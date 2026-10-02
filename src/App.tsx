/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ImpactSection } from './components/ImpactSection';
import { TechStackSection } from './components/TechStackSection';
import { PersonalProjectsSection } from './components/PersonalProjectsSection';
import { ProductionSystemsSection } from './components/ProductionSystemsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PersonalProject, ImpactMilestone } from './data/portfolioData';
import { CheckCircle2, Image as ImageIcon, Loader2 } from 'lucide-react';

// Lazy load non-critical sections and modals
const BannerDownload = React.lazy(() => import('./components/BannerDownload').then(m => ({ default: m.BannerDownload })));
const ProjectSpecModal = React.lazy(() => import('./components/ExecutiveModals').then(m => ({ default: m.ProjectSpecModal })));
const MilestoneModal = React.lazy(() => import('./components/ExecutiveModals').then(m => ({ default: m.MilestoneModal })));
const ResumeModal = React.lazy(() => import('./components/ExecutiveModals').then(m => ({ default: m.ResumeModal })));
const AllReposModal = React.lazy(() => import('./components/ExecutiveModals').then(m => ({ default: m.AllReposModal })));

// Loading Fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <Loader2 className="w-8 h-8 animate-spin text-[#1E3A8A]" />
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = React.useState<string>('about');
  const [selectedProject, setSelectedProject] =
    React.useState<PersonalProject | null>(null);
  const [selectedMilestone, setSelectedMilestone] =
    React.useState<ImpactMilestone | null>(null);
  const [resumeOpen, setResumeOpen] = React.useState<boolean>(false);
  const [reposOpen, setReposOpen] = React.useState<boolean>(false);
  const [bannerView, setBannerView] = React.useState<boolean>(false);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const showNotification = React.useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  // Initialize Lenis for smooth momentum scrolling
  React.useEffect(() => {
    // Dynamically import Lenis to avoid potential SSR issues or build timing
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Handle anchor links with Lenis for smooth scrolling
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');
        if (link && link.hash && link.origin === window.location.origin) {
          const targetElement = document.querySelector(link.hash);
          if (targetElement) {
            e.preventDefault();
            lenis.scrollTo(targetElement);
          }
        }
      };

      document.addEventListener('click', handleAnchorClick);

      return () => {
        lenis.destroy();
        document.removeEventListener('click', handleAnchorClick);
      };
    });
  }, []);

  React.useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => {
      setToastMessage(null);
    }, 3500);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  // Scroll-spy for active navigation highlighting
  React.useEffect(() => {
    const sectionIds = ['about', 'impact', 'stack', 'projects', 'systems', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close modals on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedMilestone(null);
        setResumeOpen(false);
        setReposOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSharePortfolio = () => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url);
    showNotification('Portfolio link copied to clipboard.');
  };

  if (bannerView) {
    return (
      <React.Suspense fallback={<LoadingFallback />}>
        <BannerDownload onBack={() => setBannerView(false)} />
      </React.Suspense>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* Sticky Top Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setResumeOpen(true)}
        onSharePortfolio={handleSharePortfolio}
      />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection
          onOpenResume={() => setResumeOpen(true)}
          onNotify={showNotification}
        />
        <ImpactSection
          onSelectMilestone={(milestone) => setSelectedMilestone(milestone)}
        />
        <TechStackSection />
        <PersonalProjectsSection
          onOpenProjectSpec={(project) => setSelectedProject(project)}
          onOpenAllRepos={() => setReposOpen(true)}
        />
        <ProductionSystemsSection />
        <ContactSection onNotify={showNotification} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Download Banner Button (Temporary for User) */}
      <button
        onClick={() => setBannerView(true)}
        className="fixed bottom-20 right-5 z-40 p-3 bg-white border border-[#E2E8F0] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all text-[#1E3A8A]"
        title="Download LinkedIn Banner"
      >
        <ImageIcon className="w-6 h-6" />
      </button>

      {/* Interactive Executive Modals - Lazy Loaded */}
      <React.Suspense fallback={null}>
        <ProjectSpecModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
        <MilestoneModal
          milestone={selectedMilestone}
          onClose={() => setSelectedMilestone(null)}
        />
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
          onNotify={showNotification}
        />
        <AllReposModal
          isOpen={reposOpen}
          onClose={() => setReposOpen(false)}
        />
      </React.Suspense>

      {/* Subtle Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-2.5 bg-[#0F172A] text-white text-[12px] font-medium rounded-[6px] shadow-[0_10px_15px_-3px_rgba(15,23,42,0.2)] border border-[#334155]"
        >
          <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
