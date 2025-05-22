// components/LogoScroller.tsx

import Image from "next/image";

export function LogoScroller() {
  const logos = [
    "/logos/bmw-logo.svg",
    "/logos/red-white.svg",
    "/logos/tiktok-white-logo-svg.svg",
    "/logos/polestar-white-1.svg",
  ];

  return (
    <div className="overflow-hidden bg-black py-6">
      <div className="flex animate-infinite-scroll space-x-12 w-max">
        {[...logos, ...logos].map((src, idx) => (
          <div key={idx} className="flex-shrink-0">
            <Image
              src={src}
              alt={`Logo ${idx}`}
              width={60}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
