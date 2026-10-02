import React from 'react';
import { Download, ExternalLink, ChevronLeft, Check } from 'lucide-react';

export const BannerDownload = ({ onBack }: { onBack: () => void }) => {
  const bannerUrl = '/src/assets/images/shivank_linkedin_banner_final_1790966095995.jpg';
  const [downloading, setDownloading] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch(bannerUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Shivank_Pandey_LinkedIn_Banner_Light_Blue.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setDone(true);
      setTimeout(() => setDone(false), 3000);
    } catch (error) {
      console.error('Download failed', error);
      // Fallback to simple link click if fetch fails
      const link = document.createElement('a');
      link.href = bannerUrl;
      link.download = 'Shivank_Pandey_LinkedIn_Banner.jpg';
      link.click();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F7FF] flex flex-col items-center justify-center p-6 sm:p-12 animate-in fade-in duration-500">
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center gap-2 text-[#475569] hover:text-[#1E3A8A] transition-colors font-medium"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to Portfolio
      </button>

      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-[0_20px_50px_rgba(30,58,138,0.1)] overflow-hidden border border-[#E2E8F0]">
        <div className="p-8 sm:p-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0369A1] text-xs font-bold uppercase tracking-wider mb-6">
            LinkedIn Banner Design Ready
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
            Light Azure Professional Theme
          </h1>
          <p className="text-[#64748B] max-w-2xl mx-auto mb-10 text-lg">
            Maine aapke liye ek clean, light-blue professional banner design kiya hai. 
            Isme aapka poora tech stack aur AI tools proper grid mein hain.
          </p>

          <div className="relative rounded-xl border-4 border-[#F8FAFC] shadow-inner mb-10 overflow-hidden bg-[#F8FAFC]">
            <img 
              src={bannerUrl} 
              alt="LinkedIn Banner Preview" 
              className="w-full aspect-[16/9] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-3 ${
                done 
                  ? 'bg-emerald-500 shadow-emerald-200' 
                  : 'bg-[#1E3A8A] hover:bg-[#172554] shadow-blue-200 active:scale-95'
              }`}
            >
              {done ? (
                <>
                  <Check className="w-5 h-5" />
                  Downloaded!
                </>
              ) : (
                <>
                  <Download className={`w-5 h-5 ${downloading ? 'animate-bounce' : ''}`} />
                  {downloading ? 'Processing...' : 'Download for LinkedIn'}
                </>
              )}
            </button>

            <button
              onClick={() => window.open(bannerUrl, '_blank')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#1E3A8A] bg-white border-2 border-[#E2E8F0] hover:border-[#1E3A8A] transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <ExternalLink className="w-5 h-5" />
              Preview Original
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-[#F1F5F9] pt-10">
            <div className="space-y-2">
              <h3 className="font-bold text-[#0F172A]">High Resolution</h3>
              <p className="text-sm text-[#64748B]">Designed at 4K resolution for sharp display on all retina devices.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#0F172A]">Safe Zone</h3>
              <p className="text-sm text-[#64748B]">Left side is clear so your profile picture won't cover your name.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#0F172A]">Azure Palette</h3>
              <p className="text-sm text-[#64748B]">Subtle blue shades for a calm, professional engineering look.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
