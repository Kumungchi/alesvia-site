'use client';
import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { getPublicPath } from '../lib/routes';
import { contactRecipientDefaults, type ContactSubject } from '../lib/contact';
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

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

export default function ContactForm({ dict, lang, formType = 'contact' }: { dict: ContactFormDict; lang: string; formType?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'fallback' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const sendMessage = useMutation(api.messages.send);

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
      // 1. Save to Convex Database
      await sendMessage({ formType, name, email, subject, message });
      
      // 2. Send Email Notification
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error("Failed to save message to database:", error);
      fallbackToMailClient();
    }
  }

  const inputGroupClass = "relative group";
  const inputClass = "peer w-full bg-alesvia-bg/40 backdrop-blur-sm border-2 border-alesvia-muted/20 rounded-xl px-4 pt-6 pb-2 text-alesvia-text placeholder-transparent focus:outline-none focus:border-alesvia-accent/60 focus:bg-alesvia-bg/80 focus:ring-4 focus:ring-alesvia-accent/10 transition-all duration-300";
  const labelClass = "absolute left-4 top-2 text-xs font-semibold text-alesvia-muted/80 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-alesvia-accent pointer-events-none";

  const fallbackMessage =
    lang === 'cs'
      ? 'Váš e-mailový klient by se měl otevřít s předvyplněnou zprávou.'
      : 'Your email client should open with a pre-filled draft.';

  return (
    <div className="glass rounded-3xl p-8 md:p-12 border border-alesvia-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-alesvia-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <h3 className="font-serif text-3xl font-bold text-alesvia-text mb-8 relative z-10">{dict.form_label}</h3>

      {status === 'success' || status === 'fallback' ? (
        <div className="text-center py-16 fade-in" aria-live="polite">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-500">
            <svg className="w-10 h-10 text-green-600 animate-[pulse_2s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-xl text-alesvia-text font-medium">{status === 'success' ? dict.form_success : fallbackMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={inputGroupClass}>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className={inputClass}
                placeholder={dict.form_name}
              />
              <label htmlFor="contact-name" className={labelClass}>
                {dict.form_name} <span className="text-alesvia-accent">*</span>
              </label>
            </div>
            <div className={inputGroupClass}>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder={dict.form_email}
              />
              <label htmlFor="contact-email" className={labelClass}>
                {dict.form_email} <span className="text-alesvia-accent">*</span>
              </label>
            </div>
          </div>

          <div className={inputGroupClass}>
            <select
              id="contact-subject"
              name="subject"
              required
              className={`${inputClass} appearance-none cursor-pointer`}
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              {subjects.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <label htmlFor="contact-subject" className={`absolute left-4 top-2 text-xs font-semibold text-alesvia-muted/80 transition-all duration-300 pointer-events-none`}>
              {dict.form_subject} <span className="text-alesvia-accent">*</span>
            </label>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-alesvia-muted">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <div className={inputGroupClass}>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              className={`${inputClass} resize-y min-h-[120px]`}
              placeholder={dict.form_message}
            />
            <label htmlFor="contact-message" className={labelClass}>
              {dict.form_message} <span className="text-alesvia-accent">*</span>
            </label>
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-500 bg-red-50/50 border border-red-100 rounded-lg p-3 fade-in" aria-live="polite">
              {errorMessage || dict.form_error}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
            <div className="flex items-start gap-3 max-w-[280px]">
              <input type="checkbox" id="contact-consent" name="consent" required className="mt-1 w-4 h-4 rounded border-alesvia-muted/20 text-alesvia-accent focus:ring-alesvia-accent bg-alesvia-bg/40 cursor-pointer" />
              <label htmlFor="contact-consent" className="text-xs text-alesvia-muted/80 leading-relaxed cursor-pointer">
                {dict.form_privacy}{' '}
                <Link href={getPublicPath(lang === 'cs' ? 'cs' : 'en', 'legalPrivacy')} className="text-alesvia-accent hover:text-alesvia-primary transition-colors font-medium link-animated">
                  {lang === 'cs' ? 'zásadami ochrany osobních údajů' : 'privacy policy'}
                </Link>.
              </label>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group relative btn-primary bg-alesvia-primary text-alesvia-bg font-semibold px-8 py-4 rounded-xl disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap overflow-hidden min-w-[160px] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {status === 'sending' ? (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-alesvia-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{dict.form_sending}</span>
                </div>
              ) : (
                <span className="flex items-center gap-2">
                  {dict.form_submit}
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
