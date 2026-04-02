'use client';
import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { getPublicPath } from '../lib/routes';
import { contactRecipientDefaults, type ContactSubject } from '../lib/contact';

interface ContactFormDict {
  form_label: string;
  form_name: string;
  form_email: string;
  form_subject: string;
  form_subject_general: string;
  form_subject_partnership: string;
  form_subject_media: string;
  form_subject_research: string;
  form_subject_other: string;
  form_message: string;
  form_submit: string;
  form_sending: string;
  form_success: string;
  form_error: string;
  form_privacy: string;
}

export default function ContactForm({ dict, lang }: { dict: ContactFormDict; lang: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'fallback' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const subjects = [
    { value: 'general', label: dict.form_subject_general },
    { value: 'partnership', label: dict.form_subject_partnership },
    { value: 'media', label: dict.form_subject_media },
    { value: 'research', label: dict.form_subject_research },
    { value: 'other', label: dict.form_subject_other },
  ];

  const emailMap = contactRecipientDefaults;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = data.get('subject') as ContactSubject;
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const message = data.get('message') as string;

    const fallbackToMailClient = () => {
      const to = emailMap[subject] || emailMap.general;
      const subjectLine = `[${subjects.find((s) => s.value === subject)?.label}] Message from ${name}`;
      const body = `From: ${name} (${email})\n\n${message}`;
      const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      setStatus('fallback');
      form.reset();
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        return;
      }

      const payload = await response.json().catch(() => ({}));
      if (payload.code === 'CONTACT_NOT_CONFIGURED') {
        fallbackToMailClient();
        return;
      }

      setStatus('error');
      setErrorMessage(dict.form_error);
    } catch {
      fallbackToMailClient();
    }
  }

  const inputClasses = 'w-full bg-alesvia-bg border border-alesvia-muted/20 rounded-lg px-4 py-3 text-alesvia-text placeholder:text-alesvia-muted/40 focus:outline-none focus:border-alesvia-accent/50 focus:ring-1 focus:ring-alesvia-accent/20 transition-colors';
  const fallbackMessage =
    lang === 'cs'
      ? 'Váš e-mailový klient by se měl otevřít s předvyplněnou zprávou.'
      : 'Your email client should open with a pre-filled draft.';

  return (
    <div className="glass rounded-2xl p-8 md:p-12 border border-alesvia-muted/10">
      <h3 className="font-serif text-2xl font-bold text-alesvia-text mb-8">{dict.form_label}</h3>

      {status === 'success' || status === 'fallback' ? (
        <div className="text-center py-12" aria-live="polite">
          <div className="w-16 h-16 bg-alesvia-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-alesvia-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-lg text-alesvia-text font-medium">{status === 'success' ? dict.form_success : fallbackMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-alesvia-text mb-2">
                {dict.form_name} <span className="text-alesvia-accent">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className={inputClasses}
                placeholder={dict.form_name}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-alesvia-text mb-2">
                {dict.form_email} <span className="text-alesvia-accent">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className={inputClasses}
                placeholder={dict.form_email}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-alesvia-text mb-2">
              {dict.form_subject} <span className="text-alesvia-accent">*</span>
            </label>
            <select
              id="contact-subject"
              name="subject"
              required
              className={inputClasses}
            >
              {subjects.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-alesvia-text mb-2">
              {dict.form_message} <span className="text-alesvia-accent">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              className={inputClasses + ' resize-y'}
              placeholder={dict.form_message}
            />
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-600" aria-live="polite">
              {errorMessage || dict.form_error}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-alesvia-muted">
              {dict.form_privacy}{' '}
              <Link href={getPublicPath(lang === 'cs' ? 'cs' : 'en', 'legalPrivacy')} className="text-alesvia-accent hover:text-alesvia-primary transition-colors">
                {lang === 'cs' ? 'zásadami ochrany osobních údajů' : 'privacy policy'}
              </Link>.
            </p>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary bg-alesvia-primary text-alesvia-bg font-semibold px-8 py-3.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'sending' ? dict.form_sending : dict.form_submit}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
