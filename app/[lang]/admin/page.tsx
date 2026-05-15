'use client';
import { useState } from 'react';
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

type Tab = 'contact' | 'advisory' | 'policy' | 'compass';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('contact');

  const messages = useQuery(api.messages.getAll);
  const advisoryRequests = useQuery(api.advisory.getAll);
  const policyRequests = useQuery(api.policy.getAll);
  const compassRequests = useQuery(api.compass.getAll);

  const tabs: { id: Tab; label: string; data: any }[] = [
    { id: 'contact', label: 'General Contact', data: messages },
    { id: 'advisory', label: 'Advisory', data: advisoryRequests },
    { id: 'policy', label: 'Policy Lab', data: policyRequests },
    { id: 'compass', label: 'Compass', data: compassRequests },
  ];

  const activeData = tabs.find(t => t.id === activeTab)?.data;

  function formatDate(timestamp: number) {
    return new Date(timestamp).toLocaleString();
  }

  function renderTableContent() {
    if (activeData === undefined) {
      return (
        <div className="p-12 text-center text-alesvia-muted flex items-center justify-center gap-3">
          <svg className="animate-spin h-5 w-5 text-alesvia-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading data...</span>
        </div>
      );
    }

    if (activeData.length === 0) {
      return (
        <div className="p-12 text-center text-alesvia-muted">
          No submissions found for this category.
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-alesvia-muted/20">
              <th className="p-4 text-xs font-semibold text-alesvia-muted uppercase tracking-wider">Date</th>
              <th className="p-4 text-xs font-semibold text-alesvia-muted uppercase tracking-wider">Contact</th>
              
              {activeTab === 'contact' && <th className="p-4 text-xs font-semibold text-alesvia-muted uppercase tracking-wider">Subject</th>}
              
              {activeTab === 'advisory' && (
                <>
                  <th className="p-4 text-xs font-semibold text-alesvia-muted uppercase tracking-wider">Organization</th>
                  <th className="p-4 text-xs font-semibold text-alesvia-muted uppercase tracking-wider">Type / Stage</th>
                </>
              )}
              
              {activeTab === 'policy' && (
                <>
                  <th className="p-4 text-xs font-semibold text-alesvia-muted uppercase tracking-wider">Organization</th>
                  <th className="p-4 text-xs font-semibold text-alesvia-muted uppercase tracking-wider">Affiliation</th>
                </>
              )}
              
              {activeTab === 'compass' && (
                <>
                  <th className="p-4 text-xs font-semibold text-alesvia-muted uppercase tracking-wider">Company</th>
                  <th className="p-4 text-xs font-semibold text-alesvia-muted uppercase tracking-wider">Role / AI Stage</th>
                </>
              )}
              
              <th className="p-4 text-xs font-semibold text-alesvia-muted uppercase tracking-wider w-1/3">Message</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-alesvia-muted/10 text-sm">
            {activeData.map((item: any) => (
              <tr key={item._id} className="hover:bg-alesvia-accent/5 transition-colors">
                <td className="p-4 text-alesvia-muted font-mono text-xs whitespace-nowrap">
                  {formatDate(item._creationTime)}
                </td>
                <td className="p-4">
                  <div className="font-medium text-alesvia-text">{item.name}</div>
                  <div className="text-alesvia-muted text-xs">{item.email}</div>
                </td>
                
                {activeTab === 'contact' && (
                  <td className="p-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-alesvia-surface border border-alesvia-muted/20 text-alesvia-text capitalize">
                      {item.subject}
                    </span>
                  </td>
                )}
                
                {activeTab === 'advisory' && (
                  <>
                    <td className="p-4 text-alesvia-text">{item.orgName}</td>
                    <td className="p-4">
                      <div className="text-alesvia-text">{item.orgType}</div>
                      <div className="text-alesvia-muted text-xs">{item.stage}</div>
                    </td>
                  </>
                )}
                
                {activeTab === 'policy' && (
                  <>
                    <td className="p-4 text-alesvia-text">{item.organization}</td>
                    <td className="p-4 text-alesvia-muted">{item.affiliation}</td>
                  </>
                )}
                
                {activeTab === 'compass' && (
                  <>
                    <td className="p-4 text-alesvia-text">{item.company}</td>
                    <td className="p-4">
                      <div className="text-alesvia-text">{item.role}</div>
                      <div className="text-alesvia-muted text-xs">{item.aiStage}</div>
                    </td>
                  </>
                )}
                
                <td className="p-4">
                  <div className="text-alesvia-muted line-clamp-3 hover:line-clamp-none transition-all duration-300">
                    {item.message}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-alesvia-bg text-alesvia-text py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-4xl font-bold text-alesvia-text mb-2">Admin Dashboard</h1>
            <p className="text-alesvia-muted">Preview environment for incoming SaaS demo submissions.</p>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 text-amber-600 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            Unauthenticated Preview
          </div>
        </div>

        <div className="bg-alesvia-surface/80 border border-alesvia-muted/20 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-alesvia-muted/20 bg-alesvia-surface">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors relative ${
                  activeTab === tab.id 
                    ? 'text-alesvia-accent' 
                    : 'text-alesvia-muted hover:text-alesvia-text hover:bg-alesvia-accent/5'
                }`}
              >
                {tab.label}
                {tab.data && tab.data.length > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs rounded-full bg-alesvia-muted/10 text-alesvia-text">
                    {tab.data.length}
                  </span>
                )}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-alesvia-accent"></div>
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-alesvia-bg/30">
            {renderTableContent()}
          </div>
        </div>

      </div>
    </div>
  );
}
