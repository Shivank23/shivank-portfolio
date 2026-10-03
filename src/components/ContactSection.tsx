import React from 'react';
import {
  Mail,
  Smartphone,
  Code2,
  Share2,
  ArrowRight,
  ExternalLink,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Copy,
} from 'lucide-react';

interface ContactSectionProps {
  onNotify: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNotify }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState(
    'Distributed Systems Architecture / SDE II Engineering Role'
  );
  const [context, setContext] = React.useState('');
  const [dispatched, setDispatched] = React.useState(false);

  const handleCopyEndpoint = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    onNotify(`${label} copied to clipboard: ${text}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      onNotify('Please provide your name and official contact email.');
      return;
    }
    setDispatched(true);
    onNotify('Technical inquiry prepared and logged for dispatch.');
  };

  const mailtoHref = `mailto:shivankpandey23@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `Name / Organization: ${name}\nContact Email: ${email}\n\nArchitectural Context & Objectives:\n${context}`
  )}`;

  return (
    <section
      id="contact"
      className="py-16 md:py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: 5 Cols — Direct Institutional Channels */}
          <div className="lg:col-span-5">
            <div className="text-[11px] font-bold tracking-[0.06em] text-[#475569] font-mono mb-2">
              DIRECT CHANNELS
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0F172A] tracking-[-0.02em] leading-tight mb-3">
              Initiate Technical Collaboration
            </h2>
            <p className="text-[13.5px] text-[#64748B] leading-[1.65] mb-6">
              Interested in discussing distributed web architectures,
              high-performance fintech systems, or autonomous AI agent
              harnesses? Connect directly via the institutional endpoints below.
            </p>

            {/* 4 Endpoint Cards */}
            <div className="space-y-3 mb-4">
              {/* 1. Primary Engineering Email */}
              <div className="group flex items-center justify-between gap-3 p-3.5 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[6px] shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-all">
                <a
                  href="mailto:shivankpandey23@gmail.com"
                  className="flex items-center gap-3.5 min-w-0 flex-1"
                >
                  <div className="w-9 h-9 rounded-[4px] bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0 text-[#1E3A8A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold tracking-[0.05em] text-[#64748B] font-mono">
                      PRIMARY ENGINEERING EMAIL
                    </div>
                    <div className="text-[13px] font-bold text-[#0F172A] truncate">
                      shivankpandey23@gmail.com
                    </div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() =>
                    handleCopyEndpoint('shivankpandey23@gmail.com', 'Email')
                  }
                  title="Copy Email Address"
                  className="p-1.5 text-[#64748B] hover:text-[#1E3A8A] transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 2. Direct Phone & WhatsApp */}
              <div className="group flex items-center justify-between gap-3 p-3.5 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[6px] shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-all">
                <a
                  href="tel:+917229948751"
                  className="flex items-center gap-3.5 min-w-0 flex-1"
                >
                  <div className="w-9 h-9 rounded-[4px] bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0 text-[#1E3A8A]">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold tracking-[0.05em] text-[#64748B] font-mono">
                      DIRECT PHONE &amp; WHATSAPP
                    </div>
                    <div className="text-[13px] font-bold text-[#0F172A] tabular-nums">
                      +91 72299 48751
                    </div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() =>
                    handleCopyEndpoint('+91 72299 48751', 'Phone number')
                  }
                  title="Copy Phone Number"
                  className="p-1.5 text-[#64748B] hover:text-[#1E3A8A] transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3. GitHub Engineering Profile */}
              <a
                href="https://github.com/Shivank23"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-3.5 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[6px] shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-[4px] bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0 text-[#1E3A8A]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold tracking-[0.05em] text-[#64748B] font-mono">
                      GITHUB ENGINEERING PROFILE
                    </div>
                    <div className="text-[13px] font-bold text-[#0F172A] truncate">
                      github.com/Shivank23
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#1E3A8A] transition-colors shrink-0" />
              </a>

              {/* 4. Professional Network */}
              <a
                href="https://www.linkedin.com/in/shivankpandey1/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-3.5 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[6px] shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-[4px] bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0 text-[#1E3A8A]">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold tracking-[0.05em] text-[#64748B] font-mono">
                      PROFESSIONAL NETWORK
                    </div>
                    <div className="text-[13px] font-bold text-[#0F172A] truncate">
                      LinkedIn / Shivank Pandey
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#1E3A8A] transition-colors shrink-0" />
              </a>
            </div>

            {/* Location Banner */}
            <div className="flex items-start gap-2.5 p-3.5 bg-[#F1F5F9] border border-[#E2E8F0] rounded-[6px] text-[11.5px] text-[#475569]">
              <MapPin className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
              <span>
                Based in Gurugram, India • Open to high-impact technical
                engagements
              </span>
            </div>
          </div>

          {/* Right Column: 7 Cols — Technical Inquiry Dispatch Card */}
          <div className="lg:col-span-7 lg:mt-6">
            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 sm:p-8 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F1F5F9]">
                <h3 className="text-[17px] font-bold text-[#0F172A]">
                  Technical Inquiry Dispatch
                </h3>
                <span className="text-[10px] font-bold tracking-[0.06em] text-[#64748B] font-mono">
                  SECURE DISPATCH CHANNEL
                </span>
              </div>

              {dispatched ? (
                <div className="p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px]">
                  <div className="flex items-center gap-2 text-[#059669] font-bold text-[14px] mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Technical Dispatch Payload Ready</span>
                  </div>
                  <p className="text-[13px] text-[#475569] leading-relaxed mb-4">
                    Your inquiry regarding{' '}
                    <strong className="text-[#0F172A]">{subject}</strong> from{' '}
                    <strong className="text-[#0F172A]">{name}</strong> ({email})
                    has been formatted for direct institutional routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 px-4 py-2 text-[12px] font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-[4px] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Mail Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopyEndpoint(
                          `Subject: ${subject}\nFrom: ${name} (${email})\n\n${context}`,
                          'Inquiry payload'
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[12px] font-semibold text-[#0F172A] bg-white border border-[#CBD5E1] hover:bg-[#F1F5F9] rounded-[4px] transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Payload</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDispatched(false)}
                      className="px-3 py-2 text-[12px] font-medium text-[#64748B] hover:text-[#0F172A] cursor-pointer"
                    >
                      Edit Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-[11px] font-bold text-[#334155] mb-1.5"
                      >
                        Your Name / Organization
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Elena Rostova / Enterprise Systems"
                        className="w-full px-3.5 py-2.5 text-[13px] text-[#0F172A] bg-white border border-[#E2E8F0] rounded-[4px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/12 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-[11px] font-bold text-[#334155] mb-1.5"
                      >
                        Official Contact Email
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@company.com"
                        className="w-full px-3.5 py-2.5 text-[13px] text-[#0F172A] bg-white border border-[#E2E8F0] rounded-[4px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/12 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-subject"
                      className="block text-[11px] font-bold text-[#334155] mb-1.5"
                    >
                      Subject / Scope of Discussion
                    </label>
                    <input
                      id="inquiry-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-[13px] text-[#0F172A] bg-white border border-[#E2E8F0] rounded-[4px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/12 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-context"
                      className="block text-[11px] font-bold text-[#334155] mb-1.5"
                    >
                      Architectural Context &amp; Objectives
                    </label>
                    <textarea
                      id="inquiry-context"
                      rows={4}
                      value={context}
                      onChange={(e) => setContext(e.target.value)}
                      placeholder="Provide brief architectural context, technical challenges, or collaboration specifics..."
                      className="w-full px-3.5 py-2.5 text-[13px] text-[#0F172A] bg-white border border-[#E2E8F0] rounded-[4px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/12 transition-all resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-1.5 text-[11px] text-[#64748B]">
                      <Clock className="w-3.5 h-3.5 text-[#64748B]" />
                      <span>Fast turnaround on technical inquiries.</span>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[12px] font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-[4px] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <span>Dispatch Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
