import Link from 'next/link';

interface InitiativeCardProps {
  icon: string;
  title: string;
  description: string;
  status: string;
  statusLabel: string;
  href?: string;
  linkText?: string;
  variant?: 'featured' | 'standard' | 'premium';
}

export default function InitiativeCard({
  icon,
  title,
  description,
  status,
  statusLabel,
  href,
  linkText,
  variant = 'standard',
}: InitiativeCardProps) {
  if (variant === 'featured') {
    return (
      <div data-status={status} className="group bg-alesvia-white/80 backdrop-blur-sm rounded-xl p-8 border border-alesvia-primary/10 hover:border-alesvia-primary/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full lg:col-span-2 relative overflow-hidden">
        <div className="w-12 h-12 bg-alesvia-primary text-alesvia-bg rounded flex items-center justify-center font-bold text-xl mb-6 shadow-md relative z-10">
          {icon}
        </div>
        <div className="flex-1 relative z-10">
          <div className="flex justify-between items-baseline mb-3">
            <h4 className="font-serif text-2xl font-bold text-alesvia-primary">{title}</h4>
            <span className="text-xs font-semibold bg-alesvia-accent/10 text-alesvia-accent px-2 py-1 rounded backdrop-blur-md">{statusLabel}</span>
          </div>
          <p className="text-alesvia-muted leading-relaxed mb-6">{description}</p>
        </div>
        {href && linkText && (
          <Link href={href} className="font-medium text-alesvia-accent group-hover:text-alesvia-primary transition-colors inline-flex items-center relative z-10">
            {linkText}
          </Link>
        )}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-alesvia-accent/5 rounded-full blur-2xl group-hover:bg-alesvia-accent/10 transition-all duration-500"></div>
      </div>
    );
  }

  if (variant === 'premium') {
    return (
      <div data-status={status} className="group bg-gradient-to-br from-alesvia-primary to-[#1A1323] text-alesvia-bg rounded-xl p-8 border border-alesvia-primary/20 hover:shadow-2xl hover:-translate-y-2 hover:shadow-alesvia-primary/30 transition-all duration-500 flex flex-col h-full lg:col-span-2 relative overflow-hidden">
        <div className="w-12 h-12 bg-white/10 backdrop-blur-md text-alesvia-accent rounded flex items-center justify-center font-bold text-xl mb-6 relative z-10 border border-white/5">
          {icon}
        </div>
        <div className="flex-1 relative z-10">
          <div className="flex justify-between items-baseline mb-3">
            <h4 className="font-serif text-2xl font-bold text-alesvia-bg">{title}</h4>
            <span className="text-xs font-medium text-alesvia-bg/50 border border-alesvia-bg/20 px-2 py-1 rounded">{statusLabel}</span>
          </div>
          <p className="text-alesvia-bg/80 leading-relaxed mb-6 font-light">{description}</p>
        </div>
        {href && linkText && (
          <Link href={href} className="font-medium text-alesvia-accent transition-colors inline-flex items-center relative z-10">
            {linkText}
          </Link>
        )}
        <div className="absolute top-0 right-0 w-64 h-64 bg-alesvia-accent/10 rounded-full blur-3xl group-hover:bg-alesvia-accent/20 transition-all duration-1000 -mr-10 -mt-10"></div>
      </div>
    );
  }

  // standard
  return (
    <div data-status={status} className="group bg-alesvia-surface/50 rounded-xl p-8 border border-alesvia-muted/10 hover:-translate-y-1 hover:shadow-xl hover:border-alesvia-accent/30 transition-all duration-500 flex flex-col h-full">
      <div className="w-12 h-12 bg-alesvia-muted/10 text-alesvia-muted rounded flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-alesvia-muted/20 transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-baseline mb-3">
          <h4 className="font-serif text-xl font-bold text-alesvia-text">{title}</h4>
          <span className="text-xs font-medium text-alesvia-muted">{statusLabel}</span>
        </div>
        <p className="text-alesvia-muted text-sm leading-relaxed mb-6">{description}</p>
      </div>
      {href && linkText && (
        <Link href={href} className="font-medium text-alesvia-accent hover:text-alesvia-primary transition-colors inline-flex items-center">
          {linkText}
        </Link>
      )}
    </div>
  );
}
