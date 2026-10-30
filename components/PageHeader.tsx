interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ label, title, description, children }: PageHeaderProps) {
  return (
    <header className="page-header">
      <span className="sr-only">{label}</span>
      <h1>
        {title}
      </h1>
      {description && (
        <p className="page-description">
          {description}
        </p>
      )}
      {children}
    </header>
  );
}
