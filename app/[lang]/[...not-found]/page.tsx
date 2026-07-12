import { notFound } from 'next/navigation';

// Catch-all for unmatched routes inside a locale segment. Without this,
// Next.js serves its default 404 instead of app/[lang]/not-found.tsx.
export default function NotFoundCatchAll() {
  notFound();
}
