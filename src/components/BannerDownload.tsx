import React from 'react';
import { Download, ExternalLink, ChevronLeft, Check, AlertCircle } from 'lucide-react';

export const BannerDownload = ({ onBack }: { onBack: () => void }) => {
  const bannerUrl = '/src/assets/images/shivank_linkedin_banner_4to1_final_precision_1790967625487.jpg';
  const [downloading, setDownloading] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = bannerUrl;
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement('canvas');
      const targetWidth = 1584;
      const targetHeight = 396; // 4:1 Aspect Ratio for LinkedIn
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get canvas context');

      // Calculate crop from 16:9 source to 4:1 target
      const sourceWidth = img.width;
      const sourceHeight = img.height;
      const sourceAspect = sourceWidth / sourceHeight;
      const targetAspect = targetWidth / targetHeight;

      let drawWidth, drawHeight, offsetX, offsetY;
      
      if (sourceAspect > targetAspect) {
        // Source is wider than target
        drawHeight = sourceHeight;
        drawWidth = sourceHeight * targetAspect;
        offsetY = 0;
        offsetX = (sourceWidth - drawWidth) / 2;
      } else {
        // Source is taller than target (common case for 16:9 -> 4:1)
        drawWidth = sourceWidth;
        drawHeight = sourceWidth / targetAspect;
        offsetX = 0;
        offsetY = (sourceHeight - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight, 0, 0, targetWidth, targetHeight);

      const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'Shivank_Pandey_LinkedIn_Banner_1584x396.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDone(true);
      setTimeout(() => setDone(false), 3000);
    } catch (error) {
      console.error('Download failed', error);
      window.open(bannerUrl, '_blank');
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
            LinkedIn Optimized Size: 1584 x 396
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
            Perfect LinkedIn Banner Fix
          </h1>
          <p className="text-[#64748B] max-w-2xl mx-auto mb-10 text-lg">
            Bhai, sorry for the size issue. Maine naya banner generate kiya hai jisme content middle mein hai, 
            aur niche wala button ab ise **automatically crop** karke exact LinkedIn size (1584x396) mein download karega.
          </p>

          <div className="relative rounded-xl border-4 border-[#F8FAFC] shadow-inner mb-10 overflow-hidden bg-[#F8FAFC]">
            <img 
              src={bannerUrl} 
              alt="LinkedIn Banner Preview" 
              className="w-full aspect-[16/9] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-[25%] border-y-2 border-dashed border-blue-500 bg-blue-500/5 flex items-center justify-center">
                <span className="bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">LinkedIn Crop Area</span>
              </div>
            </div>
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
                  Downloaded Exact 1584x396!
                </>
              ) : (
                <>
                  <Download className={`w-5 h-5 ${downloading ? 'animate-bounce' : ''}`} />
                  {downloading ? 'Cropping...' : 'Download (Auto-Crop to LinkedIn Size)'}
                </>
              )}
            </button>

            <button
              onClick={() => window.open(bannerUrl, '_blank')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#1E3A8A] bg-white border-2 border-[#E2E8F0] hover:border-[#1E3A8A] transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <ExternalLink className="w-5 h-5" />
              Preview Raw Image
            </button>
          </div>

          <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-100 flex gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> Download button par click karte hi image exact 1584x396 pixels mein download hogi. Ab aapko LinkedIn par crop karne ki mehnat nahi karni padegi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
