"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    percent: "30%",
    stat: "faster release cycles",
    quote:
      "Nocta helped us ship our MVP in under 3 weeks. Their speed and code quality outperformed two other teams we had worked with previously.",
    title: "Co-founder & CMO, WaitWell",
    name: "John Doe",
    logo: "/logos/amd.svg", // 你需要将logo图片放到public目录下
    button: {
      text: "Read Case Study",
      link: "#",
    },
  },
  {
    percent: "40%",
    stat: "saved projected budget",
    quote:
      "We assumed Swedish-based meant expensive — but Nocta delivered on time, on scope, and under budget. That’s rare.",
    title: "Product Lead, Värna Health",
    name: "Isabelle Henriksson",
    logo: "/logos/red-white.svg", // 你需要将logo图片放到public目录下
    button: {
      text: "Read Case Study",
      link: "#",
    },
  },
  {
    percent: "17 days",
    stat: "from idea to live product",
    quote:
      "The Nocta team felt like our own in-house dev squad — responsive, proactive, and focused. We’re now planning phase 2 with them.",
    title: "Founder, SmartDeli",
    name: "Linus Tran",
    logo: "/logos/bmw-logo.svg", // 你需要将logo图片放到public目录下
    button: {
      text: "Read Case Study",
      link: "#",
    },
  }
];

export const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const dragging = useRef(false);

  // 触摸事件
  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    startX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    dragging.current = false;
    if (deltaX.current > 50 && current > 0) {
      setCurrent(current - 1);
    } else if (deltaX.current < -50 && current < testimonials.length - 1) {
      setCurrent(current + 1);
    }
    deltaX.current = 0;
  };

  // 桌面端左右箭头
  const goNext = () => {
    if (current < testimonials.length - 1) setCurrent(current + 1);
  };
  // const goPrev = () => {
  //   if (current > 0) setCurrent(current - 1);
  // };

  return (
    <div className="bg-black text-white pt-12 min-h-[700px] relative overflow-hidden font-serif">
      <h2 className="text-3xl font-bold mb-6 leading-tight px-6 max-w-[600px] mx-auto">
        Clients who ship with Nocta — and stay.
      </h2>
      <div
        className="flex transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)]"
        style={{ transform: `translateX(-${current * 100}vw)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {testimonials.map((t, idx) => (
          <div
            className="min-w-full box-border flex flex-col justify-start max-w-[600px] mx-auto"
            key={idx}
          >
            <div className="px-6 max-w-[600px] mx-auto">
              <div className="border-l-1 border-white pl-6">
                <div className="text-5xl font-medium mb-0">{t.percent}</div>
                <div className="text-2xl mb-4">{t.stat}</div>
                <blockquote className="text-md font-normal my-4 leading-snug">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded mr-4">
                    <Image src={t.logo} alt="logo" width={48} height={48} />
                  </div>
                  <div>
                    <div className="text-xl font-medium">{t.name}</div>
                    <div className="text-base">{t.title}</div>
                  </div>
                </div>
                <a
                  href={t.button.link}
                  className="inline-flex items-center border-2 border-white px-2 py-2 text-md font-semibold text-white bg-transparent rounded-none no-underline mb-4 transition-colors duration-200 hover:bg-white hover:text-black w-3/5"
                >
                  <span>{t.button.text}</span>
                  <span className="ml-4 text-2xl">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 bottom-32 -translate-x-1/2 text-xl flex items-center gap-4">
        {current + 1}/{testimonials.length}
        <button
          onClick={goNext}
          className="bg-none border-none text-white text-3xl cursor-pointer ml-2"
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel; 