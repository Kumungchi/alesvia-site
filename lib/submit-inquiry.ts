import type { ContactSubject } from './contact';

type Notification = { name: string; email: string; subject: ContactSubject; message: string };

// Saving an inquiry is not confirmation that its email notification was delivered.
export async function submitInquiry(save: () => Promise<unknown>, notification: Notification, fetcher: typeof fetch = fetch) {
  await save();
  const response = await fetcher('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(notification),
  });
  if (!response.ok) throw new Error('Email delivery was not confirmed.');
  const result: unknown = await response.json();
  if (!result || typeof result !== 'object' || !('ok' in result) || result.ok !== true) {
    throw new Error('Email delivery was not confirmed.');
  }
}
