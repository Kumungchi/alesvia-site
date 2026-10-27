'use client';
import { useState, type FormEvent } from 'react';
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { submitInquiry } from "../lib/submit-inquiry";

interface AcademyFormDict {
  title: string;
  name: string;
  email: string;
  organization: string;
  org_type: string;
  org_firm: string;
  org_school: string;
  org_public: string;
  org_community: string;
  org_other: string;
  program: string;
  prog_workshops: string;
  prog_curricula: string;
  prog_educators: string;
  prog_audits: string;
  prog_seminars: string;
  prog_saas: string;
  prog_unsure: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
}

export default function AcademyForm({ dict }: { dict: AcademyFormDict }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const sendMessage = useMutation(api.messages.send);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const organization = data.get('organization') as string;
    const orgType = data.get('org_type') as string;
    const program = data.get('program') as string;
    const rawMessage = data.get('message') as string;

    const formattedMessage = `Organization: ${organization}\nOrganization type: ${orgType}\nProgram: ${program}\n\nDetails:\n${rawMessage}`;

    try {
      await submitInquiry(() => sendMessage({ formType: 'academy_pilot', name, email, subject: 'partnership', message: formattedMessage }), { name, email, subject: 'partnership', message: formattedMessage });

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error("Failed to submit inquiry:", error);
      setStatus('error');
    }
  }

  const inputGroupClass = "relative flex flex-col gap-2";
  const labelClass = "text-xs font-semibold text-alesvia-muted tracking-wide uppercase";
  const inputClass = "w-full bg-alesvia-white border border-alesvia-text/20 rounded-md px-4 py-3 text-sm text-alesvia-text focus:outline-none focus:border-alesvia-accent focus:ring-1 focus:ring-alesvia-accent transition-colors";

  return (
    <div className="site-form">

      <h3 className="font-serif text-2xl font-bold text-alesvia-text mb-8">{dict.title}</h3>

      {status === 'success' ? (
        <div className="text-center py-12 fade-in" aria-live="polite">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-lg text-alesvia-text font-medium">{dict.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={inputGroupClass}>
              <label htmlFor="academy-name" className={labelClass}>{dict.name}</label>
              <input id="academy-name" name="name" type="text" required className={inputClass} />
            </div>
            <div className={inputGroupClass}>
              <label htmlFor="academy-email" className={labelClass}>{dict.email}</label>
              <input id="academy-email" name="email" type="email" required className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={inputGroupClass}>
              <label htmlFor="academy-org" className={labelClass}>{dict.organization}</label>
              <input id="academy-org" name="organization" type="text" required className={inputClass} />
            </div>
            <div className={inputGroupClass}>
              <label htmlFor="academy-org-type" className={labelClass}>{dict.org_type}</label>
              <select id="academy-org-type" name="org_type" required className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
                <option value="" disabled hidden></option>
                <option value={dict.org_firm}>{dict.org_firm}</option>
                <option value={dict.org_school}>{dict.org_school}</option>
                <option value={dict.org_public}>{dict.org_public}</option>
                <option value={dict.org_community}>{dict.org_community}</option>
                <option value={dict.org_other}>{dict.org_other}</option>
              </select>
            </div>
          </div>

          <div className={inputGroupClass}>
            <label htmlFor="academy-program" className={labelClass}>{dict.program}</label>
            <select id="academy-program" name="program" required className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
              <option value="" disabled hidden></option>
              <option value={dict.prog_workshops}>{dict.prog_workshops}</option>
              <option value={dict.prog_curricula}>{dict.prog_curricula}</option>
              <option value={dict.prog_educators}>{dict.prog_educators}</option>
              <option value={dict.prog_audits}>{dict.prog_audits}</option>
              <option value={dict.prog_seminars}>{dict.prog_seminars}</option>
              <option value={dict.prog_saas}>{dict.prog_saas}</option>
              <option value={dict.prog_unsure}>{dict.prog_unsure}</option>
            </select>
          </div>

          <div className={inputGroupClass}>
            <label htmlFor="academy-message" className={labelClass}>{dict.message}</label>
            <textarea id="academy-message" name="message" required rows={4} className={`${inputClass} resize-y min-h-[100px]`} />
          </div>

          {status === 'error' && (
            <p role="alert" className="text-sm text-red-700 bg-red-50/50 border border-red-100 rounded-lg p-3 fade-in">
              {errorMessage || dict.error}
            </p>
          )}

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-alesvia-text text-alesvia-bg hover:bg-alesvia-text/90 font-medium px-8 py-3 rounded-md disabled:opacity-70 disabled:cursor-not-allowed transition-colors min-w-[160px] flex items-center justify-center shadow-sm"
            >
              {status === 'sending' ? (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{dict.sending}</span>
                </div>
              ) : (
                <span>{dict.submit}</span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
