'use client';

interface Incident {
  date: string;
  severity: string;
  type: string;
  description: string;
  status: string;
}

interface DashboardDict {
  title: string;
  status_live: string;
  col_date: string;
  col_severity: string;
  col_type: string;
  col_description: string;
  col_status: string;
  severity_high: string;
  severity_med: string;
  status_logged: string;
  status_review: string;
  incidents: Incident[];
}

export default function IncidentDashboard({ dict }: { dict: DashboardDict }) {
  return (
    <div className="w-full bg-alesvia-surface/80 border border-alesvia-muted/20 rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Dashboard Header */}
      <div className="bg-[#0F2C59]/80 border-b border-alesvia-muted/20 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
          <h3 className="font-serif text-xl font-bold text-alesvia-bg tracking-wide">{dict.title}</h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
          <span className="text-xs font-bold text-red-400 tracking-widest uppercase">{dict.status_live}</span>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-alesvia-bg/50 border-b border-alesvia-muted/10 text-xs uppercase tracking-wider text-alesvia-muted font-semibold">
              <th className="p-4 w-32">{dict.col_date}</th>
              <th className="p-4 w-32">{dict.col_severity}</th>
              <th className="p-4 w-64">{dict.col_type}</th>
              <th className="p-4">{dict.col_description}</th>
              <th className="p-4 w-36 text-right">{dict.col_status}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-alesvia-muted/10 text-sm">
            {dict.incidents.map((incident, idx) => (
              <tr key={idx} className="hover:bg-alesvia-accent/5 transition-colors group">
                <td className="p-4 text-alesvia-muted font-mono">{incident.date}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border
                    ${incident.severity === dict.severity_high 
                      ? 'bg-red-500/10 text-red-400 border-red-500/20' 
                      : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'}`}>
                    {incident.severity}
                  </span>
                </td>
                <td className="p-4 text-alesvia-text font-medium">{incident.type}</td>
                <td className="p-4 text-alesvia-muted leading-relaxed pr-8">{incident.description}</td>
                <td className="p-4 text-right">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium
                    ${incident.status === dict.status_review ? 'text-alesvia-accent' : 'text-alesvia-muted'}`}>
                    {incident.status === dict.status_review && (
                      <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    {incident.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile / Tablet List View */}
      <div className="lg:hidden divide-y divide-alesvia-muted/10">
        {dict.incidents.map((incident, idx) => (
          <div key={idx} className="p-6 space-y-3">
            <div className="flex items-center justify-between gap-4">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border
                ${incident.severity === dict.severity_high 
                  ? 'bg-red-500/10 text-red-400 border-red-500/20' 
                  : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'}`}>
                {incident.severity}
              </span>
              <span className="text-xs text-alesvia-muted font-mono">{incident.date}</span>
            </div>
            <h4 className="text-base font-bold text-alesvia-text">{incident.type}</h4>
            <p className="text-sm text-alesvia-muted leading-relaxed">{incident.description}</p>
            <div className="pt-2 flex justify-end">
              <span className={`inline-flex items-center gap-1.5 text-xs font-medium
                ${incident.status === dict.status_review ? 'text-alesvia-accent' : 'text-alesvia-muted'}`}>
                {incident.status === dict.status_review && (
                  <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {incident.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
