import nodemailer from 'nodemailer';
import { isContactSubject, getContactRecipient, type ContactSubject } from '../../../lib/contact';

export const runtime = 'nodejs';

type ContactPayload = {
  name: string;
  email: string;
  subject: ContactSubject;
  message: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePayload(payload: Record<string, unknown>): ContactPayload | null {
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const subject = typeof payload.subject === 'string' ? payload.subject.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (!name || !email || !message || !isContactSubject(subject)) {
    return null;
  }

  if (!isValidEmail(email) || name.length > 120 || email.length > 160 || message.length > 5000) {
    return null;
  }

  return { name, email, subject, message };
}

function getTransportConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM_EMAIL;

  if (!host || !port || !user || !pass || !from) {
    return null;
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true' || port === 465,
    auth: { user, pass },
    from,
    bcc: process.env.CONTACT_FORM_BCC_EMAIL,
  };
}

function getSubjectLabel(subject: ContactSubject): string {
  switch (subject) {
    case 'general':
      return 'General inquiry';
    case 'partnership':
      return 'Partnership / collaboration';
    case 'media':
      return 'Media / press';
    case 'research':
      return 'Research collaboration';
    case 'other':
      return 'Other';
  }
}

function buildTextBody(payload: ContactPayload): string {
  return [
    'A new contact form submission was received from alesvia.org.',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Subject: ${getSubjectLabel(payload.subject)}`,
    '',
    'Message:',
    payload.message,
  ].join('\n');
}

function buildHtmlBody(payload: ContactPayload): string {
  const escapedMessage = payload.message
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br />');

  return `
    <div style="font-family: Arial, sans-serif; color: #221E22; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New Alesvia contact form submission</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Subject:</strong> ${getSubjectLabel(payload.subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapedMessage}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  let payload: ContactPayload | null = null;

  try {
    const body = await request.json() as Record<string, unknown>;
    payload = validatePayload(body);
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!payload) {
    return Response.json({ error: 'Invalid contact form submission.' }, { status: 400 });
  }

  const transport = getTransportConfig();

  if (!transport) {
    return Response.json(
      { error: 'Contact form delivery is not configured.', code: 'CONTACT_NOT_CONFIGURED' },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: transport.host,
      port: transport.port,
      secure: transport.secure,
      auth: transport.auth,
    });

    await transporter.sendMail({
      from: transport.from,
      to: getContactRecipient(payload.subject),
      bcc: transport.bcc,
      replyTo: `${payload.name} <${payload.email}>`,
      subject: `[Alesvia Contact] ${getSubjectLabel(payload.subject)} — ${payload.name}`,
      text: buildTextBody(payload),
      html: buildHtmlBody(payload),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Failed to deliver contact form.' }, { status: 500 });
  }
}
