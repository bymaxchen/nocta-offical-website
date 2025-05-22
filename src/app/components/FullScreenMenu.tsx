import { useState } from "react";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU = [
  {
    label: "Services",
    children: ["Full Product Builds", "Module / Feature Dev", "MVP Prototyping", "Maintenance & Handoff"],
  },
  {
    label: "Company",
    children: ["Career", "About us", "Contact"],
  },
];

export function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div
      className={`fixed px-6 top-[48px] left-0 right-0 bottom-0 bg-black z-40 transition-all duration-500 ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="max-w-2xl mx-auto pt-8 py-2">
        {MENU.map((item, idx) => (
          <div key={item.label} className={openIndex === idx ? "mb-2" : ""}>
            <button
              className="w-full flex items-center justify-between py-4  border-t border-white/60 focus:outline-none"
              onClick={() => handleToggle(idx)}
            >
              <span className="text-xl font-bold text-left">{item.label}</span>
              <span
                className={`transition-transform duration-300 text-2xl font-bold ${
                  openIndex === idx ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            {/* 二级菜单 */}
            <div
              className={`overflow-hidden transition-all duration-300 bg-black px-6 ${
                openIndex === idx
                  ? "max-h-60 opacity-100 pt-1 pb-4"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              {item.children.map((child) => (
                <a
                  key={child}
                  href="#"
                  className="block text-base font-medium text-white py-1 pl-2 hover:opacity-70 transition-opacity"
                  onClick={onClose}
                >
                  {child}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 