

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoSectionProps {
  title: string;
  subtitle: string;
  video: {
    src: string;
    poster: string;
    autoplay: boolean;
    controls: boolean;
    muted: boolean;
  };
  animation: {
    type: string;
    color: string;
    count: number;
  };
}

export default function VideoSection({
  title,
  subtitle,
  video,
  animation
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Ripple circles for animation
  const ripples = Array.from({ length: animation.count }, (_, i) => i);

  return (
    <section className="section bg-brand-black">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="section-headline mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Ripple Effect Circles */}
          <div className="absolute inset-0 pointer-events-none">
            {ripples.map((index) => (
              <div 
                key={index}
                className={`absolute inset-0 border-2 border-brand-orange rounded-xl opacity-30`}
                style={{
                  animation: `ripple ${2 + index * 0.5}s ease-out infinite ${index * 0.5}s`
                }}
              />
            ))}
          </div>

          {/* Video Player */}
          <div className="relative rounded-xl overflow-hidden aspect-video bg-brand-black/50">
            <video
              ref={videoRef}
              poster={video.poster}
              className="w-full h-full object-cover"
              controls={isPlaying && video.controls}
              muted={video.muted}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlayClick}
              >
                <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center transition-transform hover:scale-110">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}