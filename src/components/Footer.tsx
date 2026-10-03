import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E2E8F0] py-10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left Identity Block */}
        <div className="space-y-1">
          <div className="text-[14px] font-bold text-[#0F172A]">
            Shivank Pandey
          </div>
          <p className="text-[12px] text-[#64748B]">
            Software Development Engineer • Distributed Systems &amp;
            High-Throughput Web Platforms
          </p>
          <p className="text-[11.5px] text-[#64748B]">
            shivankpandey23@gmail.com • Gurugram, India &amp; Remote
          </p>
        </div>

        {/* Right Navigation & Copyright */}
        <div className="md:text-right space-y-2">
          <div className="flex flex-wrap md:justify-end items-center gap-5 text-[12px] font-medium text-[#475569]">
            <a
              href="#about"
              className="hover:text-[#0F172A] transition-colors"
            >
              About
            </a>
            <a
              href="#systems"
              className="hover:text-[#0F172A] transition-colors"
            >
              Systems
            </a>
            <a
              href="#projects"
              className="hover:text-[#0F172A] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-[#0F172A] transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-[11px] text-[#94A3B8]">
            © 2026 Shivank Pandey. All rights reserved. Executive Precision
            Slate &amp; Deep Cobalt Architecture.
          </p>
        </div>
      </div>
    </footer>
  );
};
