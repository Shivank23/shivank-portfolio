import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import { PRODUCTION_SYSTEMS } from '../data/portfolioData';

export const ProductionSystemsSection: React.FC = () => {
  return (
    <section
      id="systems"
      className="py-16 md:py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-[11px] font-bold tracking-[0.06em] text-[#475569] font-mono mb-2">
            INSTITUTIONAL SYSTEMS PORTFOLIO
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0F172A] tracking-[-0.02em] leading-tight mb-2">
            High-Throughput Production Systems
          </h2>
          <p className="text-[14px] text-[#64748B] max-w-[65ch] leading-relaxed">
            Detailed architectural breakdowns of platforms built, deployed, and
            scaled in enterprise environments.
          </p>
        </div>

        {/* 3 Full-Width System Dossier Cards */}
        <div className="space-y-6">
          {PRODUCTION_SYSTEMS.map((system, idx) => (
            <motion.article
              key={system.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.35,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 sm:p-8 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: 7 Cols — Narrative, Metrics & Tags */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Organization & Scale Row */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="px-2.5 py-1 bg-[#EFF6FF] border border-[#BFDBFE] rounded-[4px] text-[11px] font-bold text-[#1E3A8A]">
                        {system.organization}
                      </span>
                      <span className="text-[#CBD5E1]" aria-hidden="true">
                        •
                      </span>
                      <span className="text-[11px] font-mono text-[#64748B]">
                        {system.scaleLabel}
                      </span>
                    </div>

                    {/* System Title */}
                    <h3 className="text-[22px] sm:text-[26px] font-black text-[#0F172A] tracking-[-0.03em] mb-4 leading-[1.1] bg-linear-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent">
                      {system.title}
                    </h3>

                    {/* Narrative Paragraph */}
                    <p className="text-[14px] text-[#475569] leading-[1.65] mb-6">
                      {system.narrativeParts.map((part, i) =>
                        part.bold ? (
                          <strong
                            key={i}
                            className="font-semibold text-[#0F172A]"
                          >
                            {part.text}
                          </strong>
                        ) : (
                          <React.Fragment key={i}>{part.text}</React.Fragment>
                        )
                      )}
                    </p>

                    {/* 2-Column Metric Callout Boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {system.metrics.map((metric) => (
                        <div
                          key={metric.kicker}
                          className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px]"
                        >
                          <div className="text-[10px] font-bold tracking-[0.05em] text-[#64748B] font-mono mb-1">
                            {metric.kicker}
                          </div>
                          <div className="text-[18px] font-extrabold text-[#1E3A8A] tracking-tight tabular-nums mb-0.5">
                            {metric.value}
                          </div>
                          <div className="text-[11px] text-[#64748B]">
                            {metric.subtext}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {system.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white border border-[#E2E8F0] rounded-[4px] text-[11px] font-mono font-semibold text-[#334155]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: 5 Cols — System Architecture Console */}
                <div className="lg:col-span-5">
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-5">
                    {/* Console Header */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E8F0]">
                      <span className="text-[10px] font-bold tracking-[0.06em] text-[#475569] font-mono">
                        {system.consoleTitle}
                      </span>
                      <span className="text-[10px] font-bold text-[#1E3A8A] font-mono underline underline-offset-4 decoration-[#93C5FD]">
                        {system.consoleVersion}
                      </span>
                    </div>

                    {/* Console Nodes */}
                    {system.consoleType === 'flow' ? (
                      <div className="space-y-1.5 mb-4">
                        {system.consoleNodes.map((node, nodeIdx) => (
                          <React.Fragment key={node.stepTitle}>
                            <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-[4px]">
                              <span className="text-[12px] font-bold text-[#0F172A]">
                                {node.stepTitle}
                              </span>
                              <span className="px-2 py-0.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[3px] text-[10px] font-mono font-medium text-[#475569] whitespace-nowrap">
                                {node.badgeText}
                              </span>
                            </div>
                            {nodeIdx < system.consoleNodes.length - 1 && (
                              <div className="flex justify-center py-0.5">
                                <ArrowDown className="w-3.5 h-3.5 text-[#94A3B8]" />
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2.5 mb-4">
                        {system.consoleNodes.map((node) => (
                          <div
                            key={node.stepTitle}
                            className="flex items-center justify-between gap-2 px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-[4px]"
                          >
                            <span className="text-[12px] font-bold text-[#0F172A]">
                              {node.stepTitle}
                            </span>
                            <span className="px-2 py-0.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[3px] text-[10px] font-mono font-medium text-[#475569] whitespace-nowrap">
                              {node.badgeText}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Verification Callout Box */}
                    <div className="flex items-start gap-2 px-3.5 py-2.5 bg-[#EFF6FF] border border-[#DBEAFE] rounded-[4px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A8A] shrink-0 mt-0.5" />
                      <span className="text-[11px] font-medium text-[#1E3A8A] leading-snug">
                        {system.verificationText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
