import React from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Terminal,
  ArrowRight,
  ExternalLink,
  FileText,
  Mail,
  Network,
  Layers,
  MapPin,
} from 'lucide-react';
import { HERO_METRICS } from '../data/portfolioData';
import shivankPic from '../assets/images/shivank_pic.png';

interface HeroSectionProps {
  onOpenResume: () => void;
  onNotify: (msg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNotify }) => {
  const handleDownloadResume = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/Shivank_Pandey_Resume.pdf');
      const buffer = await response.arrayBuffer();
      const blob = new Blob([buffer], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Shivank_Pandey_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      onNotify('Technical Resume downloaded successfully.');
    } catch {
      const link = document.createElement('a');
      link.href = '/Shivank_Pandey_Resume.pdf';
      link.download = 'Shivank_Pandey_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onNotify('Technical Resume downloaded successfully.');
    }
  };

  return (
    <section
      id="about"
      className="pt-10 pb-16 md:pt-14 md:pb-20 border-b border-[#E2E8F0] bg-[#F8FAFC]"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: 7 Cols */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Kicker Row */}
            <div className="inline-flex flex-wrap items-center gap-2.5 mb-5 px-3 py-1.5 bg-[#F1F5F9] border border-[#E2E8F0] rounded-[4px]">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1E3A8A] tracking-[0.02em]">
                <Terminal className="w-3.5 h-3.5 text-[#2563EB]" />
                Software Development Engineer (SDE II)
              </span>
              <span className="text-[#CBD5E1]" aria-hidden="true">
                •
              </span>
              <span className="text-[11px] font-medium text-[#475569]">
                Systems &amp; Full Stack Architecture
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0F172A] leading-[1.14] tracking-[-0.03em] mb-5 balance-text">
              Engineering High-Performance Web Applications &amp; Scalable Distributed Systems.
            </h1>

            {/* Lead Narrative */}
            <p className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.65] mb-7 max-w-[64ch]">
              Software Development Engineer with{' '}
              <strong className="font-semibold text-[#0F172A]">
                4+ years of experience
              </strong>{' '}
              architecting mission-critical platforms across high-scale fintech (
              <span className="font-semibold text-[#1E3A8A]">
                Axis Bank / Freecharge
              </span>
              ), enterprise B2B SaaS, and autonomous AI developer workflows.
              Specialized in distributed web architectures, resilient state
              machines, high Core Web Vitals fidelity, and zero-latency user
              flows.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <a
                href="#systems"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-[4px] shadow-[0_1px_2px_rgba(15,23,42,0.08)] transition-all whitespace-nowrap"
              >
                <span>Explore Architecture &amp; Systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/Shivank23"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-[#0F172A] bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#94A3B8] rounded-[4px] transition-colors whitespace-nowrap font-mono"
              >
                <Github className="w-3.5 h-3.5 text-[#475569]" />
                <span>github.com/Shivank23</span>
                <ExternalLink className="w-3 h-3 text-[#64748B]" />
              </a>

              <a
                href="https://www.linkedin.com/in/shivankpandey1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-[#0F172A] bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#94A3B8] rounded-[4px] transition-colors whitespace-nowrap font-mono"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
                <span>linkedin.com/in/shivankpandey1</span>
                <ExternalLink className="w-3 h-3 text-[#64748B]" />
              </a>
            </div>

            <div className="mb-8">
              <button
                type="button"
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-4 py-2 text-[12px] font-semibold text-[#334155] bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#94A3B8] rounded-[4px] transition-colors whitespace-nowrap cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#475569]" />
                <span>Download Technical Resume</span>
              </button>
            </div>

            {/* 4-Column Quantitative Metric Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 bg-white border border-[#E2E8F0] rounded-[6px] shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]">
              {HERO_METRICS.map((item) => (
                <div key={item.label} className="px-4 py-3.5">
                  <div className="text-[20px] sm:text-[22px] font-extrabold text-[#1E3A8A] tracking-tight tabular-nums leading-tight">
                    {item.value}
                  </div>
                  <div className="text-[11px] font-medium text-[#64748B] mt-1 leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 5 Cols — Engineering Profile Resume */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:mt-8"
          >
            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 sm:p-6 shadow-[0_1px_3px_0_rgba(15,23,42,0.04),0_1px_2px_-1px_rgba(15,23,42,0.03)]">
              {/* Top Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span className="text-[10px] font-bold tracking-[0.06em] text-[#475569] font-mono">
                    ENGINEERING PROFILE
                  </span>
                </div>
                <span className="text-[11px] font-medium text-[#64748B] font-mono">
                  Full Stack Architecture
                </span>
              </div>

              {/* Identity Block */}
              <div className="flex items-start gap-4 mb-5">
                {/* Executive Avatar Frame with User Uploaded shivank_pic.png */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[8px] bg-[#F8FAFC] border-2 border-[#E2E8F0] shrink-0 flex items-center justify-center overflow-hidden select-none shadow-sm">
                  <img
                    src={shivankPic}
                    alt="Shivank Pandey"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="min-w-0 pt-0.5">
                  <h2 className="text-[18px] font-bold text-[#0F172A] leading-snug">
                    Shivank Pandey
                  </h2>
                  <p className="text-[12px] font-semibold text-[#1E3A8A] leading-snug mt-0.5">
                    Software Development Engineer (SDE II)
                  </p>
                  <p className="text-[11px] text-[#64748B] mt-1.5 leading-relaxed">
                    Gurugram, India • Full Stack &amp; Distributed Systems
                  </p>
                </div>
              </div>

              {/* Structured Parameter Rows */}
              <div className="space-y-2.5 mb-5">
                <div className="px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[4px]">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#64748B] tracking-[0.04em] font-mono">
                    <Network className="w-3 h-3 text-[#2563EB]" />
                    <span>CORE SPECIALTY</span>
                  </div>
                  <div className="text-[12px] font-semibold text-[#0F172A] mt-0.5">
                    Full Stack &amp; Distributed Systems (Fintech / Enterprise)
                  </div>
                </div>

                <div className="px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[4px]">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#64748B] tracking-[0.04em] font-mono">
                    <Layers className="w-3 h-3 text-[#2563EB]" />
                    <span>CORE STACK</span>
                  </div>
                  <div className="text-[12px] font-semibold text-[#0F172A] mt-0.5">
                    React, Next.js, TypeScript, Node.js, Redux RTK
                  </div>
                </div>

                <div className="px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[4px]">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#64748B] tracking-[0.04em] font-mono">
                    <MapPin className="w-3 h-3 text-[#2563EB]" />
                    <span>LOCATION &amp; ENGAGEMENT</span>
                  </div>
                  <div className="text-[12px] font-semibold text-[#0F172A] mt-0.5">
                    Gurugram, India • Open to High-Impact Roles
                  </div>
                </div>
              </div>

              {/* Direct Connect Button */}
              <a
                href="mailto:shivankpandey23@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[12px] font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-[4px] transition-colors whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Connect - shivankpandey23@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
