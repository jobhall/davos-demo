"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, EffectCreative, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Header from "@/components/Header";
import { HEADLINE_CLASSES, TITLE_CLASSES } from "@/consts/classes";
import { TransitionLink } from "@/components/TransitionLink";

let SLIDES = [
  {
    href: "/research/workslop",
    imgSrc: "/images/research/slider/workslop.webp",
    imgAlt: "Workslop",
    title: "Workslop",
  },
  {
    href: "/research/the-performance-crisis",
    imgSrc: "/images/research/slider/the-performance-crisis.webp",
    imgAlt: "The Performance Crisis",
    title: "The Performance Crisis",
  },
  {
    href: "/research/betterup-ai-pilots-vs-passengers",
    imgSrc: "/images/research/slider/1.webp",
    imgAlt: "Pilots vs Passengers",
    title: "Pilots vs Passengers",
  },
  {
    href: "/research/connection-crisis",
    imgSrc: "/images/research/slider/2.webp",
    imgAlt: "Connection crisis",
    title: "Connection crisis",
  },
  {
    href: "/research/the-centered-organization",
    imgSrc: "/images/research/slider/4.webp",
    imgAlt: "The centered organization",
    title: "The centered organization",
  },
  {
    href: "/research/building-a-coaching-culture",
    imgSrc: "/images/research/slider/3.webp",
    imgAlt: "Building a coaching culture",
    title: "Building a coaching culture",
  },
];

SLIDES = SLIDES.concat(SLIDES);
SLIDES = SLIDES.concat(SLIDES);

export default function ResearchInsightsClient() {
  const SwiperRef = useRef<any>(null);

  return (
    <>
      <div className="flex h-lvh pt-[16svh] xl:pt-[20svh] items-start justify-center bg-zinc-50 font-sans bg-[url('/images/bgs/bg-research.webp')] bg-cover bg-bottom">
        <Header/>
        <div className="flex flex-col items-center justify-center">
        <h4 className={HEADLINE_CLASSES}>RESEARCH</h4>
        <h1
          className={`${TITLE_CLASSES} text-center px-10 xl:px-20 xl:max-w-[1400px]`}
        >Groundbreaking research on leadership upskilling, manager effectiveness, and culture change.</h1>
        <div className="flex items-center justify-center gap-6 mt-18 w-svw">
          <button
            id="swiper-prev"
            className="hidden 2xl:flex items-center justify-center bg-white/6 border border-white/4 rounded-full size-12 absolute left-10 z-10 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9.56982 5.92999L3.49982 12L9.56982 18.07" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.5 12H3.67" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <Swiper
            ref={SwiperRef}
            loop={true}
            spaceBetween={30}
            effect="creative"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            className="init"
            id="swiper-home"
            wrapperClass={`swiper-wrapper`}
            modules={[EffectCoverflow, EffectCreative, Navigation]}
            navigation={{
              nextEl: "#swiper-next",
              prevEl: "#swiper-prev",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -100,
              depth: 250,
              modifier: 1,
              scale: 0.85,
              slideShadows: false,
            }}
            creativeEffect={{
              perspective: true,
              progressMultiplier: 1.5,
              limitProgress: 4,
              next: {
                translate: [200, -20, -30],
                rotate: [0, 0, 0],
                scale: 0.85,
                opacity: 1,
                origin: 'top',
              },
              prev: {
                translate: [-200, -20, -30],
                rotate: [0, 0, 0],
                scale: 0.85,
                opacity: 1,
                origin: 'top',
              },
            }}
            onInit={(s: any) => {
              window.setTimeout(() => {
                const intNext = window.setInterval(() => {
                  if (SwiperRef.current.classList.contains("interact")) {
                    window.clearInterval(intNext);
                    return;
                  }
                  s.slideNext(1000);
                }, 3000);
              }, 1000);
            }}
            onTouchStart={(s: any) => {
              SwiperRef.current.classList.add("interact");
            }}
          >
            {SLIDES.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide slide-research"
                style={{
                  width: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  textAlign: "center",
                }}
              >
                <TransitionLink href={slide.href} className="slide-research-link flex flex-col items-center justify-center gap-4 transition-all duration-300">
                  <div>
                    <Image
                      src={slide.imgSrc}
                      alt={slide.imgAlt}
                      width={280}
                      height={280}
                      className="rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="slide-research-title h-[70px] text-xl leading-none transition-all duration-300"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  ></div>
                </TransitionLink>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            id="swiper-next"
            className="hidden 2xl:flex items-center justify-center bg-white/6 border border-white/4 rounded-full size-12 absolute right-10 z-10 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='rotate-180'>
              <path d="M9.56982 5.92999L3.49982 12L9.56982 18.07" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.5 12H3.67" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        </div>

        <div className="fixed pointer-events-none bottom-8 left-1/2 -translate-x-1/2 text-white text-sm uppercase font-mono opacity-50">
          swipe Left/right and tap to explore
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper {
          padding-top: 200px;
          margin-top: -200px;
        }

        .swiper-slide:not(.swiper-slide-active) {
          .slide-research-link {
            opacity: 0.4;
            filter: blur(14px);
          }
          .slide-research-title {
            opacity: 0;
          }
        }

        .swiper-slide.swiper-slide-next,
        .swiper-slide.swiper-slide-prev {
          .slide-research-link {
            opacity: 0.6;
            filter: blur(3px);
          }
        }

        .swiper-slide:not(.swiper-slide-visible) {
          opacity: 0 !important;
        }

        @media and (min-width: 1540px) {
          .swiper-slide.swiper-slide-visible:nth-child(1 of .swiper-slide-visible),
          .swiper-slide.swiper-slide-visible:nth-last-child(1 of .swiper-slide-visible){
            opacity: 0 !important;
          }
        }
      ` }} />
    </>
  );
}
