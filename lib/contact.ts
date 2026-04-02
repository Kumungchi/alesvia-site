export const contactSubjects = ['general', 'partnership', 'media', 'research', 'other'] as const;

export type ContactSubject = (typeof contactSubjects)[number];

export const contactRecipientDefaults: Record<ContactSubject, string> = {
  general: 'info@alesvia.org',
  partnership: 'partners@alesvia.org',
  media: 'press@alesvia.org',
  research: 'info@alesvia.org',
  other: 'info@alesvia.org',
};

export function isContactSubject(value: string): value is ContactSubject {
  return contactSubjects.includes(value as ContactSubject);
}

export function getContactRecipient(subject: ContactSubject): string {
  const envMap: Partial<Record<ContactSubject, string | undefined>> = {
    general: process.env.CONTACT_FORM_TO_EMAIL,
    partnership: process.env.CONTACT_FORM_PARTNERS_EMAIL,
    media: process.env.CONTACT_FORM_MEDIA_EMAIL,
    research: process.env.CONTACT_FORM_RESEARCH_EMAIL,
    other: process.env.CONTACT_FORM_OTHER_EMAIL,
  };

  return envMap[subject] || contactRecipientDefaults[subject];
}
