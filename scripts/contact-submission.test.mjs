import assert from 'node:assert/strict';
import test from 'node:test';
import { submitInquiry } from '../lib/submit-inquiry.ts';
import { escapeContactHtml } from '../lib/contact.ts';

const notification = { name: 'Audit <test>', email: 'audit@example.test', subject: 'general', message: 'Mocked delivery test' };

test('untrusted name, email and message text cannot introduce email HTML', () => {
  assert.equal(escapeContactHtml('<img src="x" onerror=\'alert(1)\'>&'), '&lt;img src=&quot;x&quot; onerror=&#39;alert(1)&#39;&gt;&amp;');
  assert.equal(escapeContactHtml('Matias Bunnik — česky'), 'Matias Bunnik — česky');
});

test('success requires both persistence and an explicit successful delivery acknowledgement', async () => {
  const events = [];
  await submitInquiry(async () => events.push('save'), notification, async (url, options) => {
    events.push('notify');
    assert.equal(url, '/api/contact');
    assert.equal(options.method, 'POST');
    assert.deepEqual(JSON.parse(options.body), notification);
    return Response.json({ ok: true });
  });
  assert.deepEqual(events, ['save', 'notify']);
});

for (const status of [400, 500, 503]) {
  test(`HTTP ${status} never produces a success result after a database save`, async () => {
    let saved = 0;
    await assert.rejects(submitInquiry(async () => saved++, notification, async () => Response.json({ error: 'failed' }, { status })));
    assert.equal(saved, 1);
  });
}

test('a failed database save does not attempt email delivery', async () => {
  let called = false;
  await assert.rejects(submitInquiry(async () => { throw new Error('Unavailable'); }, notification, async () => { called = true; return Response.json({ ok: true }); }));
  assert.equal(called, false);
});

test('network failure and malformed acknowledgements are failures', async () => {
  for (const fetcher of [
    async () => { throw new TypeError('Offline'); },
    async () => Response.json({ ok: false }),
    async () => Response.json({}),
    async () => new Response('invalid json'),
  ]) await assert.rejects(submitInquiry(async () => undefined, notification, fetcher));
});
