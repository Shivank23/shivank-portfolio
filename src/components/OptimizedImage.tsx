import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = '16/9',
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div 
      className={`relative overflow-hidden bg-slate-100 ${className}`}
      style={{ aspectRatio }}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-slate-200" />
      )}
    </div>
  );
};
