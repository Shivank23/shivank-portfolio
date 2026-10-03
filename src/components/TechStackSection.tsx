import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  ArrowLeftRight,
  Palette,
  ShieldCheck,
  Database,
  Cpu,
} from 'lucide-react';
import { STACK_CATEGORIES, StackCategory } from '../data/portfolioData';
import { TechLogo } from './TechLogos';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const renderCategoryIcon = (iconType: StackCategory['iconType']) => {
    switch (iconType) {
      case 'code':
        return <Code2 className="w-5 h-5 text-[#2563EB]" />;
      case 'git-branch':
        return <ArrowLeftRight className="w-5 h-5 text-[#2563EB]" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-[#2563EB]" />;
      case 'check-circle':
        return <ShieldCheck className="w-5 h-5 text-[#2563EB]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#2563EB]" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? STACK_CATEGORIES
      : STACK_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="stack"
      className="py-16 md:py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-[11px] font-bold tracking-[0.06em] text-[#475569] font-mono mb-2">
              BATTLE-TESTED CAPABILITIES
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0F172A] tracking-[-0.02em] leading-tight mb-2">
              Technical Stack &amp; Architecture Matrix
            </h2>
            <p className="text-[14px] text-[#64748B] max-w-[68ch] leading-relaxed">
              Full-spectrum engineering stack leveraged in high-load production
              environments, spanning distributed client state, micro-frontends,
              high-speed APIs, and AI integrations.
            </p>
          </div>

          {/* Interactive Domain Filter Controls */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#F1F5F9] border border-[#E2E8F0] rounded-[6px] self-start lg:self-end">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-[4px] transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              All Domains (6)
            </button>
            {STACK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-[4px] transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-[#1E3A8A] shadow-xs border border-[#E2E8F0]'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* 6-Card Capability Matrix matching exact reference UI in image.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.3,
                delay: idx * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[10px] p-6 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] flex flex-col justify-between transition-all"
            >
              <div>
                {/* Header with Blue Icon & Bold Navy Title */}
                <div className="flex items-center gap-2.5 mb-2">
                  {renderCategoryIcon(category.iconType)}
                  <h3 className="text-[17px] font-bold text-[#1E3A8A] tracking-[-0.01em]">
                    {category.title}
                  </h3>
                </div>

                {/* Subtitle description */}
                <p className="text-[13px] text-[#475569] leading-[1.6] mb-5">
                  {category.description}
                </p>
              </div>

              {/* Flex-Wrap Badge Chips with Authentic Colored Brand Logos */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[6px] text-[12px] font-medium text-[#1E293B] shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-all cursor-default"
                  >
                    <TechLogo name={skill.name} className="w-3.5 h-3.5 shrink-0" />
                    <span className="leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
