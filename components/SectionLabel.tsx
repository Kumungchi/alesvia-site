export default function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-alesvia-accent mb-4">
      {children}
    </h2>
  );
}
