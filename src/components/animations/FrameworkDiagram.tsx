'use client';

import { motion } from 'framer-motion';

interface FrameworkDiagramProps {
  title: string;
  interactive?: boolean;
}

export default function FrameworkDiagram({ title, interactive = true }: FrameworkDiagramProps) {
  const frameworkElements = [
    { label: 'Attract Qualified Traffic', position: 'top' },
    { label: 'Convert Interest into Action', position: 'upper-middle' },
    { label: 'Win Your Ideal Customers', position: 'middle' },
    { label: 'Expand Customer Value', position: 'lower-middle' }
  ];

  return (
    <div className="relative w-full max-w-[500px] aspect-square">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full h-full">
          {/* Spiral Framework Background */}
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="animate-rotate-slow origin-center">
              {/* Multiple spiraling circles */}
              <circle cx="200" cy="200" r="180" fill="transparent" stroke="#0099FF" strokeWidth="1" />
              <circle cx="200" cy="200" r="160" fill="transparent" stroke="#0099FF" strokeWidth="1" />
              <circle cx="200" cy="200" r="140" fill="transparent" stroke="#0099FF" strokeWidth="1" />
              <circle cx="200" cy="200" r="120" fill="transparent" stroke="#0099FF" strokeWidth="1" />
              <circle cx="200" cy="200" r="100" fill="transparent" stroke="#0099FF" strokeWidth="1" />
            </g>

            {/* Orange Accent Elements */}
            <circle cx="200" cy="80" r="15" fill="#FF6B35" />
            <circle cx="280" cy="200" r="12" fill="#FF6B35" />
            <circle cx="180" cy="270" r="10" fill="#FF6B35" />
          </svg>

          {/* Text Elements */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="absolute top-[15%] w-full text-center">
              <div className="bg-brand-black/80 backdrop-blur-sm py-2 px-4 rounded-md inline-block">
                <p className="text-white text-sm md:text-base">Attract Qualified Traffic</p>
              </div>
            </div>
            <div className="absolute top-[35%] w-full text-center">
              <div className="bg-brand-black/80 backdrop-blur-sm py-2 px-4 rounded-md inline-block">
                <p className="text-white text-sm md:text-base">Convert Interest into Action</p>
              </div>
            </div>
            <div className="absolute top-[50%] w-full text-center">
              <div className="bg-brand-black/80 backdrop-blur-sm py-2 px-4 rounded-md inline-block">
                <p className="text-white text-sm md:text-base">Win Your Ideal Customers</p>
              </div>
            </div>
            <div className="absolute top-[65%] w-full text-center">
              <div className="bg-brand-black/80 backdrop-blur-sm py-2 px-4 rounded-md inline-block">
                <p className="text-white text-sm md:text-base">Expand Customer Value</p>
              </div>
            </div>
          </div>

          {/* Framework Title */}
          <div className="absolute bottom-0 w-full text-center">
            <p className="text-white text-sm font-semibold">
              {title} ™
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}