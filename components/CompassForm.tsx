'use client';
import { useState, type FormEvent } from 'react';
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

interface CompassFormDict {
  title: string;
  name: string;
  email: string;
  company: string;
  role: string;
  role_risk: string;
  role_cto: string;
  role_innovation: string;
  role_other: string;
  ai_stage: string;
  stage_concept: string;
  stage_prototype: string;
  stage_deployed: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  consent: string;
}

export default function CompassForm({ dict }: { dict: CompassFormDict }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const submitCompass = useMutation(api.compass.submit);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const company = data.get('company') as string;
    const role = data.get('role') as string;
    const aiStage = data.get('ai_stage') as string;
    const rawMessage = data.get('message') as string;

    const formattedMessage = `Company: ${company}\nRole: ${role}\nAI Stage: ${aiStage}\n\nProject/Challenge Summary:\n${rawMessage}`;

    try {
      // Save to Convex
      await submitCompass({ 
        name, 
        email, 
        company, 
        role, 
        aiStage, 
        message: rawMessage 
      });
      
      // Email Notification
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject: 'partnership', message: formattedMessage }),
      });

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error("Failed to submit inquiry:", error);
      setStatus('error');
    }
  }

  // Institutional styling: clean borders, subtle translucent backgrounds, refined typography.
  const inputGroupClass = "relative flex flex-col gap-2";
  const labelClass = "text-xs font-semibold text-alesvia-muted tracking-wide uppercase";
  const inputClass = "w-full bg-alesvia-bg/50 backdrop-blur-sm border border-alesvia-muted/30 rounded-lg px-4 py-3 text-sm text-alesvia-text focus:outline-none focus:border-alesvia-accent focus:ring-1 focus:ring-alesvia-accent transition-colors";

  return (
    <div className="bg-alesvia-surface/95 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-alesvia-muted/20 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b91a3] to-alesvia-primary" />
      
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
              <label htmlFor="comp-name" className={labelClass}>{dict.name}</label>
              <input id="comp-name" name="name" type="text" required className={inputClass} />
            </div>
            <div className={inputGroupClass}>
              <label htmlFor="comp-email" className={labelClass}>{dict.email}</label>
              <input id="comp-email" name="email" type="email" required className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={inputGroupClass}>
              <label htmlFor="comp-company" className={labelClass}>{dict.company}</label>
              <input id="comp-company" name="company" type="text" required className={inputClass} />
            </div>
            <div className={inputGroupClass}>
              <label htmlFor="comp-role" className={labelClass}>{dict.role}</label>
              <select id="comp-role" name="role" required className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
                <option value="" disabled hidden></option>
                <option value={dict.role_risk}>{dict.role_risk}</option>
                <option value={dict.role_cto}>{dict.role_cto}</option>
                <option value={dict.role_innovation}>{dict.role_innovation}</option>
                <option value={dict.role_other}>{dict.role_other}</option>
              </select>
            </div>
          </div>

          <div className={inputGroupClass}>
            <label htmlFor="comp-stage" className={labelClass}>{dict.ai_stage}</label>
            <select id="comp-stage" name="ai_stage" required className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
              <option value="" disabled hidden></option>
              <option value={dict.stage_concept}>{dict.stage_concept}</option>
              <option value={dict.stage_prototype}>{dict.stage_prototype}</option>
              <option value={dict.stage_deployed}>{dict.stage_deployed}</option>
            </select>
          </div>

          <div className={inputGroupClass}>
            <label htmlFor="comp-message" className={labelClass}>{dict.message}</label>
            <textarea id="comp-message" name="message" required rows={4} className={`${inputClass} resize-y min-h-[100px]`} />
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-500 bg-red-50/50 border border-red-100 rounded-lg p-3 fade-in">
              {errorMessage || dict.error}
            </p>
          )}

          <div className="flex items-start gap-3 mt-4">
            <input type="checkbox" id="comp-consent" name="consent" required className="mt-1 w-4 h-4 rounded border-alesvia-muted/30 text-alesvia-accent focus:ring-alesvia-accent bg-alesvia-bg/50 cursor-pointer" />
            <label htmlFor="comp-consent" className="text-xs text-alesvia-text/70 leading-relaxed cursor-pointer">
              {dict.consent}
            </label>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-alesvia-text text-alesvia-bg hover:bg-alesvia-text/90 font-medium px-8 py-3 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed transition-colors min-w-[160px] flex items-center justify-center shadow-sm"
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
