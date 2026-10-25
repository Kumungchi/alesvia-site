export default function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="section-label font-sans text-xs font-bold uppercase tracking-widest text-alesvia-accent-ink mb-4">
      {children}
    </h2>
  );
}
