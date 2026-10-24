import type { getDictionary } from '../dictionaries';

type CrisisSupportDictionary = Awaited<ReturnType<typeof getDictionary>>['crisis_support'];

export default function CrisisSupport({ dict }: { dict: CrisisSupportDictionary }) {
  return (
    <section aria-labelledby="human-support-title" className="my-12 max-w-3xl border-y border-alesvia-muted/20 py-8">
      <h2 id="human-support-title" className="font-serif text-2xl font-bold text-alesvia-text">{dict.title}</h2>
      <p className="mt-3 leading-relaxed">{dict.intro}</p>
      <ul className="mt-6 space-y-5">
        {dict.lines.map((line) => (
          <li key={line.phone_href}>
            <a href={line.phone_href} className="inline-block py-2 font-semibold underline underline-offset-4 hover:text-alesvia-accent">
              {line.name} — {line.phone}
            </a>
            <p className="text-sm leading-relaxed">{line.description}</p>
            <a href={line.source_url} className="mt-1 inline-block py-2 text-sm underline underline-offset-4 hover:text-alesvia-accent">{line.source_label}</a>
          </li>
        ))}
      </ul>
      <p className="mt-6 leading-relaxed">
        {dict.emergency}{' '}
        <a href="tel:155" className="inline-block py-2 font-semibold underline underline-offset-4">155</a>
        {' / '}
        <a href="tel:112" className="inline-block py-2 font-semibold underline underline-offset-4">112</a>.
      </p>
      <p className="mt-3 text-sm text-alesvia-muted">{dict.verified}</p>
    </section>
  );
}
