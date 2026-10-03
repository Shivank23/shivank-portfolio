import React from 'react';
import { motion } from 'motion/react';
import {
  Wallet,
  ScanText,
  ShieldCheck,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { IMPACT_MILESTONES, ImpactMilestone } from '../data/portfolioData';

interface ImpactSectionProps {
  onSelectMilestone: (milestone: ImpactMilestone) => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({
  onSelectMilestone,
}) => {
  const renderIcon = (iconType: ImpactMilestone['iconType']) => {
    switch (iconType) {
      case 'wallet':
        return <Wallet className="w-4 h-4 text-[#1E3A8A]" />;
      case 'scan':
        return <ScanText className="w-4 h-4 text-[#1E3A8A]" />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-[#1E3A8A]" />;
      case 'layers':
        return <Layers className="w-4 h-4 text-[#1E3A8A]" />;
    }
  };

  return (
    <section
      id="impact"
      className="py-16 md:py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-[11px] font-bold tracking-[0.06em] text-[#475569] font-mono mb-2">
              MEASURABLE BUSINESS OUTCOMES &amp; TECHNICAL LEADERSHIP
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0F172A] tracking-[-0.02em] leading-tight">
              Key Production Milestones &amp; High-Scale Impact
            </h2>
          </div>

          <p className="text-[13px] text-[#64748B] max-w-[44ch] leading-relaxed lg:text-right">
            Quantified results delivered across consumer finance platforms,
            enterprise B2B SaaS, and high-load web architectures.
          </p>
        </div>

        {/* 4-Column Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {IMPACT_MILESTONES.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.35,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => onSelectMilestone(item)}
              className="group bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[8px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] hover:shadow-[0_8px_16px_-4px_rgba(15,23,42,0.06)] transition-all cursor-pointer"
            >
              <div>
                {/* Top Tag & Icon Row */}
                <div className="flex items-start justify-between gap-2.5 mb-5">
                  <span className="inline-block px-2.5 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[4px] text-[10px] font-bold tracking-[0.04em] text-[#334155] font-mono leading-tight">
                    {item.tag}
                  </span>
                  <div className="pt-0.5 shrink-0">
                    {renderIcon(item.iconType)}
                  </div>
                </div>

                {/* Big Metric */}
                <div className="text-[32px] xl:text-[36px] font-extrabold text-[#1E3A8A] tracking-[-0.03em] tabular-nums leading-none mb-2">
                  {item.metric}
                </div>

                {/* Subtitle */}
                <h3 className="text-[14.5px] font-bold text-[#0F172A] mb-2.5 leading-snug">
                  {item.title}
                </h3>

                {/* Narrative Body */}
                <p className="text-[12.5px] text-[#475569] leading-[1.6] mb-5">
                  {item.description}
                </p>
              </div>

              {/* Footer Verification Line */}
              <div className="pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1E3A8A] min-w-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span className="truncate">{item.badge}</span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-[#64748B] group-hover:text-[#2563EB] transition-colors shrink-0">
                  Inspect →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
