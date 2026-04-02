interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ label, title, description, children }: PageHeaderProps) {
  return (
    <section className="py-20 md:py-28 max-w-4xl">
      <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-alesvia-accent mb-4">
        {label}
      </h2>
      <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-alesvia-primary leading-[1.1] mb-6">
        {title}
      </h1>
      {description && (
        <p className="text-xl text-alesvia-muted font-light leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
      {children}
    </section>
  );
}
