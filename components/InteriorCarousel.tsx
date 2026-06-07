"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/assets/interior-reception.png",
    alt: "高端宠物洗护店接待与等候区",
    label: "接待与等候区",
    description:
      "开放明亮的前厅，产品陈列、等候沙发和接待台形成安静舒适的第一印象。"
  },
  {
    src: "/assets/interior-wash-spa.png",
    alt: "高端宠物洗护店洗护水疗区",
    label: "洗护水疗区",
    description:
      "独立洗护位、雾面隔断和专业淋浴设备，让清洁流程更卫生也更安心。"
  },
  {
    src: "/assets/interior-styling.png",
    alt: "高端宠物洗护店造型烘干区",
    label: "造型烘干区",
    description:
      "专业美容台、低噪烘干设备和整洁工具收纳，适合精修与完工整理。"
  }
];

export default function InteriorCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showSlide = (index: number) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % slides.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="carousel"
      aria-label="店内环境轮播图"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <article
            className="carousel-slide"
            aria-label={slide.label}
            key={slide.label}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 700px) 90vw, 88vw"
            />
            <div className="slide-caption">
              <strong>{slide.label}</strong>
              <span>{slide.description}</span>
            </div>
          </article>
        ))}
      </div>
      <button
        className="carousel-control prev"
        type="button"
        aria-label="上一张"
        onClick={() => showSlide(currentSlide - 1)}
      >
        ‹
      </button>
      <button
        className="carousel-control next"
        type="button"
        aria-label="下一张"
        onClick={() => showSlide(currentSlide + 1)}
      >
        ›
      </button>
      <div className="carousel-dots" aria-label="轮播图分页">
        {slides.map((slide, index) => (
          <button
            className={`carousel-dot${index === currentSlide ? " active" : ""}`}
            type="button"
            aria-label={`查看${slide.label}`}
            key={slide.label}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
