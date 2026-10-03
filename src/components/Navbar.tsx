import React from 'react';
import { Github, Linkedin, Share2, UserCheck, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
  onSharePortfolio: () => void;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work & Systems', href: '#systems' },
  { label: 'Personal Projects', href: '#projects' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenResume,
  onSharePortfolio,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Title */}
        <a
          href="#about"
          className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] rounded-sm"
        >
          <div className="w-8 h-8 rounded-[6px] bg-[#1E3A8A] text-white flex items-center justify-center font-mono font-bold text-[13px] shadow-xs group-hover:bg-[#172554] transition-colors">
            SP
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold tracking-tight text-[#0F172A] leading-none group-hover:text-[#1E3A8A] transition-colors">
              Shivank Pandey
            </span>
            <span className="text-[10px] font-mono text-[#64748B] leading-none mt-1 hidden sm:inline">
              SDE II • Systems &amp; Full Stack
            </span>
          </div>
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-5 text-[13px] font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#1E3A8A] font-semibold'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1E3A8A]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Shivank23"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Engineering Profile"
            aria-label="GitHub Engineering Profile"
            className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-[4px] border border-[#CBD5E1] bg-white text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] hover:border-[#94A3B8] transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://www.linkedin.com/in/shivankpandey1/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Professional Profile"
            aria-label="LinkedIn Professional Profile"
            className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-[4px] border border-[#CBD5E1] bg-white text-[#475569] hover:text-[#0077B5] hover:bg-[#F1F5F9] hover:border-[#94A3B8] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onSharePortfolio}
            title="Copy Portfolio Link"
            aria-label="Copy Portfolio Link"
            className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-[4px] border border-[#CBD5E1] bg-white text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] hover:border-[#94A3B8] transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-3.5 py-1.5 text-[12px] font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-[4px] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={onOpenResume}
            title="View Technical Resume"
            aria-label="View Technical Resume"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E3A8A] hover:bg-[#DBEAFE] transition-colors cursor-pointer"
          >
            <UserCheck className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="lg:hidden inline-flex items-center justify-center w-8 h-8 rounded-[4px] border border-[#CBD5E1] bg-white text-[#0F172A]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E2E8F0] bg-white px-5 py-3">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[13px] font-medium text-[#475569] hover:text-[#1E3A8A] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
