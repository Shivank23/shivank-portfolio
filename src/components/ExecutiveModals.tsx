import React from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Download,
  Code2,
  Globe,
} from 'lucide-react';
import {
  PersonalProject,
  ImpactMilestone,
  ADDITIONAL_REPOSITORIES,
} from '../data/portfolioData';
import { jsPDF } from 'jspdf';

interface ProjectSpecModalProps {
  project: PersonalProject | null;
  onClose: () => void;
}

export const ProjectSpecModal: React.FC<ProjectSpecModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white border border-[#E2E8F0] rounded-[12px] shadow-[0_20px_25px_-5px_rgba(15,23,42,0.08),0_8px_10px_-6px_rgba(15,23,42,0.04)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#475569]">
              SYSTEM ARCHITECTURE SPECIFICATION
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-[4px] text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0]/50 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-5">
          <div>
            <div className="text-[11px] font-semibold text-[#1E3A8A] mb-1">
              {project.category} · {project.statusLabel}
            </div>
            <h3 className="text-[26px] font-black text-[#0F172A] tracking-[-0.03em] leading-tight mb-2">
              {project.title}
            </h3>
            <a
              href={project.primaryActionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#2563EB] hover:underline mt-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{project.primaryActionUrl}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <p className="text-[13.5px] text-[#475569] mt-2.5 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Telemetry Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px]">
              <div className="text-[10px] font-mono font-bold text-[#64748B]">
                TOPOLOGY PATTERN
              </div>
              <div className="text-[12px] font-bold text-[#0F172A] mt-1">
                {project.architectureSpec.architecturePattern}
              </div>
            </div>
            <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px]">
              <div className="text-[10px] font-mono font-bold text-[#64748B]">
                LATENCY &amp; VITALS
              </div>
              <div className="text-[12px] font-bold text-[#1E3A8A] font-mono mt-1">
                {project.architectureSpec.latencyProfile}
              </div>
            </div>
            <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px]">
              <div className="text-[10px] font-mono font-bold text-[#64748B]">
                RUNTIME TARGET
              </div>
              <div className="text-[12px] font-bold text-[#0F172A] mt-1">
                {project.architectureSpec.deploymentTarget}
              </div>
            </div>
          </div>

          {/* Core Modules */}
          <div>
            <div className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#475569] mb-2.5">
              CORE ARCHITECTURAL MODULES
            </div>
            <div className="space-y-2">
              {project.architectureSpec.coreModules.map((mod) => (
                <div
                  key={mod.name}
                  className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <span className="text-[12.5px] font-bold text-[#0F172A]">
                    {mod.name}
                  </span>
                  <span className="text-[12px] text-[#475569] sm:text-right">
                    {mod.spec}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Highlights */}
          <div>
            <div className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#475569] mb-2">
              KEY ENGINEERING DECISIONS
            </div>
            <ul className="space-y-2">
              {project.architectureSpec.engineeringHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13px] text-[#334155]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-white border border-[#E2E8F0] rounded-[3px] text-[10px] font-mono font-semibold text-[#334155]"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {project.secondaryActionUrl && (
              <a
                href={project.secondaryActionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[12px] font-semibold text-[#0F172A] bg-white border border-[#CBD5E1] hover:bg-[#F1F5F9] rounded-[4px] transition-colors whitespace-nowrap"
              >
                <span>{project.secondaryActionLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.primaryActionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-[4px] transition-colors whitespace-nowrap"
            >
              <span>{project.primaryActionLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MilestoneModalProps {
  milestone: ImpactMilestone | null;
  onClose: () => void;
}

export const MilestoneModal: React.FC<MilestoneModalProps> = ({
  milestone,
  onClose,
}) => {
  if (!milestone) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white border border-[#E2E8F0] rounded-[12px] shadow-[0_20px_25px_-5px_rgba(15,23,42,0.08)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <span className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#1E3A8A]">
            {milestone.tag}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-[4px] text-[#64748B] hover:text-[#0F172A] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="flex items-baseline gap-3">
            <span className="text-[36px] font-extrabold text-[#1E3A8A] tabular-nums">
              {milestone.metric}
            </span>
            <span className="text-[18px] font-black text-[#0F172A] tracking-[-0.02em]">
              {milestone.title}
            </span>
          </div>

          <div className="p-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px]">
            <div className="text-[10px] font-mono font-bold text-[#64748B] mb-1">
              ARCHITECTURAL BOTTLENECK ADDRESSED
            </div>
            <p className="text-[13px] text-[#334155] leading-relaxed">
              {milestone.architectureDetails.problemStatement}
            </p>
          </div>

          <div>
            <div className="text-[11px] font-mono font-bold text-[#475569] mb-2">
              ENGINEERING IMPLEMENTATION
            </div>
            <ul className="space-y-2">
              {milestone.architectureDetails.systemDesign.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-2 text-[13px] text-[#334155]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            {milestone.architectureDetails.quantifiedOutcomes.map((o) => (
              <div
                key={o.label}
                className="p-3 bg-[#EFF6FF]/60 border border-[#DBEAFE] rounded-[6px]"
              >
                <div className="text-[16px] font-extrabold text-[#1E3A8A] tabular-nums">
                  {o.value}
                </div>
                <div className="text-[10px] font-medium text-[#475569] mt-0.5">
                  {o.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onNotify,
}) => {
  if (!isOpen) return null;

  const resumePlainText = `SHIVANK PANDEY
Software Development Engineer (SDE II) — Distributed Systems & Full Stack Architecture
Location: Gurugram, India
Email: shivankpandey23@gmail.com | Phone: +91 72299 48751
GitHub: https://github.com/Shivank23 | LinkedIn: https://www.linkedin.com/in/shivankpandey1/

EXECUTIVE SUMMARY
Software Development Engineer with 4+ years of experience architecting mission-critical platforms across high-scale fintech (Axis Bank / Freecharge), enterprise B2B SaaS, and autonomous AI developer workflows. Specialized in distributed web architectures, resilient state machines, high Core Web Vitals fidelity, and zero-latency user flows.

KEY PRODUCTION IMPACT
- ₹80Cr+ Disbursed via Reject / Relook Engine (Axis Bank & Freecharge Scale)
- -80% Manual Rework via DocAI OCR Pre-Flight & Ops-Maker Automation
- ₹5Cr Annual Savings via Real-Time Digital NeSL E-Stamping Pipeline
- 100+ Enterprise Deployments: Costen Travel & Expense Suite and EVYA Statutory Payroll System

LIVE PERSONAL & CLIENT PLATFORMS
1. Zelvra Silver Jewelry: https://zelvra-vq41.vercel.app/
2. Learnify Solutions: https://www.learnify-solutions.com/
3. MedQuvia Health Portal: https://medquvia-production.up.railway.app/
4. NS Travel (Luxury Tours): https://ns-travels-sigma.vercel.app/
5. LAC Heating Company (UK): https://lac-heating-company.vercel.app/
6. ELD Trip Planner: https://eld-trip-planner-ten.vercel.app/
7. Pokemon Explorer App: https://pokemon-app-xi-eight.vercel.app/
8. Aspire Financial Dashboard: https://aspire-dashboard-uyoj.vercel.app/

INSTITUTIONAL SYSTEMS EXPERIENCE
1. Freecharge / Axis Bank — Maximus Distributed Digital Loan Origination Engine
   - Architected multi-journey paperless lending origination pipeline integrating DocAI OCR, NeSL E-Stamping, and Hunter Deduplication.
   - Achieved ₹80Cr+ disbursement in first 30 days with <0.08% state fallout.

2. Procloz Enterprise — Costen Travel & Expense Suite & EVYA Payroll Management System
   - Engineered Costen Travel & Expense management system for corporate booking and policy-compliant reimbursements, alongside EVYA Payroll system for multi-tenant statutory tax compliance, PF/ESI deductions, and automated salary disbursements across 100+ enterprise corporations.

3. Koenig Solutions — VERU Enterprise Workforce Computation Engine
   - Engineered administrative computation platform for 500+ daily operators with virtualized windowing over 10k+ relational ledger rows, yielding 30% query acceleration.

TECHNICAL STACK
- Frontend & Modern Web: React.js, Next.js 14, TypeScript, JavaScript (ES6+), HTML5/CSS3
- State & Concurrency: Redux Toolkit (RTK), TanStack Query, RESTful APIs, Axios Interceptors, Web Workers
- Design Systems: Tailwind CSS, Material UI (MUI), Ant Design, Headless UI, WCAG 2.1
- Backend & Databases: Node.js, Express.js, Supabase, MongoDB, MSSQL, REST & GraphQL
- Testing & AI Tooling: Jest, React Testing Library, SonarQube, Model Context Protocol (MCP), Claude, Cursor IDE`;

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Shivank_Pandey_Resume.pdf';
    link.download = 'Shivank_Pandey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onNotify('Technical Resume downloaded as Shivank_Pandey_Resume.pdf');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-white border border-[#E2E8F0] rounded-[12px] shadow-[0_20px_25px_-5px_rgba(15,23,42,0.08)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#0F172A]">
              EXECUTIVE TECHNICAL DOSSIER &amp; RESUME
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-[4px] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-[#64748B] hover:text-[#0F172A] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 max-h-[78vh] overflow-y-auto space-y-5 text-[13px] text-[#334155]">
          <div className="pb-4 border-b border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-[24px] font-black text-[#0F172A] tracking-[-0.02em]">
                Shivank Pandey
              </h3>
              <p className="text-[13px] font-semibold text-[#1E3A8A]">
                Software Development Engineer (SDE II) · Distributed Systems &amp;
                Full Stack Architecture
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#475569] sm:text-right">
              <div>shivankpandey23@gmail.com</div>
              <div>+91 72299 48751 · Gurugram, India</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px]">
              <div className="text-[16px] font-extrabold text-[#1E3A8A] tabular-nums">
                ₹80Cr+
              </div>
              <div className="text-[10.5px] text-[#475569]">
                Recovered &amp; Disbursed Volume
              </div>
            </div>
            <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px]">
              <div className="text-[16px] font-extrabold text-[#1E3A8A] tabular-nums">
                -80%
              </div>
              <div className="text-[10.5px] text-[#475569]">
                Manual Rework via DocAI OCR
              </div>
            </div>
            <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px]">
              <div className="text-[16px] font-extrabold text-[#1E3A8A] tabular-nums">
                ₹5Cr/yr
              </div>
              <div className="text-[10.5px] text-[#475569]">
                Saved via NeSL E-Stamping
              </div>
            </div>
            <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px]">
              <div className="text-[16px] font-extrabold text-[#1E3A8A] tabular-nums">
                100+ B2B Clients
              </div>
              <div className="text-[10.5px] text-[#475569]">
                Travel, Expense &amp; EVYA Payroll
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-[11px] font-mono font-bold text-[#475569] tracking-[0.05em]">
              PRODUCTION ENGINEERING LEADERSHIP
            </div>
            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] space-y-3">
              <div>
                <div className="flex items-center justify-between font-bold text-[#0F172A]">
                  <span>
                    Maximus Distributed Digital Loan Origination Engine
                  </span>
                  <span className="text-[11px] font-mono text-[#1E3A8A]">
                    Freecharge / Axis Bank
                  </span>
                </div>
                <p className="text-[12.5px] text-[#475569] mt-1">
                  Architected multi-journey paperless lending pipeline
                  integrating DocAI OCR, NeSL E-Stamping, Hunter Deduplication,
                  and Reject/Relook recovery flows.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E2E8F0]">
                <div className="flex items-center justify-between font-bold text-[#0F172A]">
                  <span>Costen Travel &amp; Expense Suite &amp; EVYA Payroll System</span>
                  <span className="text-[11px] font-mono text-[#1E3A8A]">
                    Procloz Enterprise
                  </span>
                </div>
                <p className="text-[12.5px] text-[#475569] mt-1">
                  Engineered Costen Travel &amp; Expense Management System for automated booking and reimbursement workflows, alongside EVYA Payroll Management System for multi-tenant statutory tax compliance, PF/ESI deductions, and salary disbursements across 100+ enterprise corporations.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E2E8F0]">
                <div className="flex items-center justify-between font-bold text-[#0F172A]">
                  <span>VERU Enterprise Workforce Computation Engine</span>
                  <span className="text-[11px] font-mono text-[#1E3A8A]">
                    Koenig Solutions
                  </span>
                </div>
                <p className="text-[12.5px] text-[#475569] mt-1">
                  Implemented virtualized windowing over 10k+ relational ledger
                  rows for 500+ daily operators, accelerating complex queries by
                  30%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AllReposModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AllReposModal: React.FC<AllReposModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-white border border-[#E2E8F0] rounded-[12px] shadow-[0_20px_25px_-5px_rgba(15,23,42,0.08)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-[#1E3A8A]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#0F172A]">
              LIVE DEPLOYMENTS &amp; REPOSITORY INDEX (GITHUB.COM/SHIVANK23)
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#64748B] hover:text-[#0F172A] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ADDITIONAL_REPOSITORIES.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[6px] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[13px] font-bold text-[#1E3A8A] group-hover:text-[#2563EB] transition-colors">
                      {repo.name}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 rounded-[3px] shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      {repo.stars}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#475569] leading-relaxed mb-3">
                    {repo.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#64748B] pt-2 border-t border-[#E2E8F0]">
                  <span>{repo.language}</span>
                  <span className="inline-flex items-center gap-1 text-[#1E3A8A] font-semibold">
                    Visit Live <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[12px] text-[#64748B]">
              All 7 production web deployments &amp; 20+ GitHub repositories
              linked directly.
            </span>
            <a
              href="https://github.com/Shivank23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-[4px] transition-colors whitespace-nowrap"
            >
              <span>View Full GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
