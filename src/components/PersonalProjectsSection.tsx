import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Globe } from 'lucide-react';
import { PERSONAL_PROJECTS, PersonalProject } from '../data/portfolioData';

interface PersonalProjectsSectionProps {
  onOpenProjectSpec: (project: PersonalProject) => void;
  onOpenAllRepos: () => void;
}

export const PersonalProjectsSection: React.FC<PersonalProjectsSectionProps> = ({
  onOpenProjectSpec,
  onOpenAllRepos,
}) => {
  const [imgErrors, setImgErrors] = React.useState<Record<string, boolean>>({});

  return (
    <section
      id="projects"
      className="py-16 md:py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-[11px] font-bold tracking-[0.06em] text-[#475569] font-mono mb-2">
              R&amp;D &amp; OPEN SOURCE INNOVATION
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0F172A] tracking-[-0.02em] leading-tight mb-2">
              Personal Engineering Projects
            </h2>
            <p className="text-[14px] text-[#64748B] max-w-[65ch] leading-relaxed">
              Independent technical systems engineered to explore autonomous
              agent protocols, distributed web performance, and client-side
              machine intelligence.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenAllRepos}
            className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#1E3A8A] hover:text-[#2563EB] transition-colors whitespace-nowrap self-start sm:self-end pb-1 cursor-pointer"
          >
            <span>Explore All 20+ Repositories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6-Project Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERSONAL_PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.35,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[8px] overflow-hidden shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] hover:shadow-[0_8px_16px_-4px_rgba(15,23,42,0.06)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Preview Frame — Clickable to open live URL or inspect */}
                <a
                  href={project.primaryActionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit live deployment: ${project.primaryActionUrl}`}
                  className="block relative h-44 w-full bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden"
                >
                  {!imgErrors[project.id] ? (
                    <img
                      src={project.image}
                      alt={`${project.title} live platform screenshot`}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setImgErrors((prev) => ({
                          ...prev,
                          [project.id]: true,
                        }))
                      }
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#F8FAFC] flex flex-col items-center justify-center p-4 text-center">
                      <Globe className="w-6 h-6 text-[#1E3A8A] mb-1.5" />
                      <span className="text-[12px] font-bold text-[#0F172A]">
                        {project.title}
                      </span>
                      <span className="text-[10px] font-mono text-[#64748B] mt-0.5">
                        {project.liveDomain}
                      </span>
                    </div>
                  )}

                  {/* Top-Left Category Overlay */}
                  <div className="absolute top-3 left-3 max-w-[58%] px-2.5 py-1 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] rounded-[4px] shadow-2xs">
                    <span className="block text-[10px] font-bold text-[#0F172A] leading-tight">
                      {project.category}
                    </span>
                  </div>

                  {/* Top-Right Status Overlay */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] rounded-[4px] shadow-2xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0" />
                    <span className="text-[10px] font-semibold text-[#334155] leading-tight">
                      {project.statusLabel}
                    </span>
                  </div>
                </a>

                {/* Card Body */}
                <div className="p-5 sm:p-6 pb-4">
                  <div className="mb-2.5">
                    <div className="text-[10px] font-bold text-[#1E3A8A] tracking-[0.05em] uppercase mb-1 opacity-80">
                      {project.category}
                    </div>
                    <h3 className="text-[19px] font-black text-[#0F172A] tracking-[-0.02em] leading-tight group-hover:text-[#1E3A8A] transition-colors">
                      <a
                        href={project.primaryActionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    </h3>
                  </div>

                  <p className="text-[12.5px] text-[#475569] leading-[1.6] mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[4px] text-[10px] font-mono font-semibold text-[#334155]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#F1F5F9] grid grid-cols-2 gap-2.5">
                <a
                  href={project.primaryActionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-[4px] transition-colors whitespace-nowrap"
                >
                  <span>{project.primaryActionLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {project.secondaryActionUrl ? (
                  <a
                    href={project.secondaryActionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-semibold text-[#0F172A] bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#94A3B8] rounded-[4px] transition-colors whitespace-nowrap"
                  >
                    <span>{project.secondaryActionLabel}</span>
                    <ExternalLink className="w-3 h-3 text-[#64748B]" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onOpenProjectSpec(project)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-semibold text-[#0F172A] bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#94A3B8] rounded-[4px] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>{project.secondaryActionLabel}</span>
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
