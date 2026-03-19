'use client';

import { useState } from "react";
import { TransitionLink } from "../TransitionLink";
import { logEvent } from "@/lib/gtag";

const links = [
  { label: "What is BetterUp?", href: "/who-we-are" },
  { label: "Customer stories", href: "/customers" },
  { label: "Research & insights", href: "/research" },
  { label: "Platform demos", href: "/platform-demo" },
]

const buttons = [
  { label: "Highlight loop", vimeoSrc: "https://player.vimeo.com/video/1154509693?h=215f251bd1&controls=0&loop=1&app_id=58479&texttrack=en" },
  { label: "Ambient branding loop", vimeoSrc: "https://player.vimeo.com/video/1154510307?h=bfef113738&controls=0&loop=1&app_id=58479&texttrack=en" },
  // { label: "Mercedes F1", vimeoSrc: "https://player.vimeo.com/video/1124392363?h=f531a52d58&controls=0&loop=1&app_id=58479&texttrack=en" },
  { label: "Schedule loop", vimeoSrc: "https://player.vimeo.com/video/1154510902?h=f66664a64c&controls=0&loop=1&app_id=58479&texttrack=en" },
]

interface MainMenuProps {
  open: boolean;
  hasLogo?: boolean;
}

export default function MainMenu({ open, hasLogo }: MainMenuProps) {
  const [activeVideo, setActiveVideo] = useState<string | undefined>(undefined);

  const handleBtnClick = (videoSrc: string, label: string) => {
    setActiveVideo(videoSrc);
    logEvent({ action: 'view', category: 'home__video', label });
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex h-lvh w-full transition-all duration-300 items-center justify-center bg-zinc-50 font-sans bg-[url('/images/bgs/bg-main.webp')] bg-cover bg-center ${open ? "" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center justify-between h-full py-15 w-full">
          <div className="flex-1">
            <img src="/betterup.svg" alt="BetterUp" className={hasLogo ? "opacity-100" : "opacity-0"} />
          </div>
          <div className="flex flex-col items-center justify-center w-full flex-1">
            {links.map((link) => (
              <TransitionLink
                key={link.href}
                href={link.href}
                className="py-2 font-serif text-[3.5rem] w-full flex items-center justify-center h-[130px] px-4 cursor-pointer"
              >
                <div className="flex items-center justify-between max-w-[1024px] w-full h-full border-b border-white/10">
                  <span className="text-[#]">{link.label}</span>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="69" height="42" viewBox="0 0 69 42" fill="none">
                      <path d="M39.8369 0.23584C41.4822 7.00877 45.175 19.2001 67.99 20.5546" stroke="white" strokeWidth="2"/>
                      <path d="M39.8369 40.8735C41.4822 34.1006 45.175 21.9093 67.99 20.5547" stroke="white" strokeWidth="2"/>
                      <path d="M0 20.5552L64.648 20.5552" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                </div>
              </TransitionLink>
            ))}
          </div>
          <div className={`flex items-center justify-center w-full gap-4 flex-2`}>
            {buttons.map((button) => (
              <button
                key={button.label}
                onClick={() => handleBtnClick(button.vimeoSrc, button.label)}
                className="text-white py-2.5 px-8 rounded-full border border-white/20 bg-white/13 backdrop-blur-xl uppercase font-mono text-md cursor-pointer"
              >{button.label}</button>
            ))}
          </div>
        </div>
      </div>
      {activeVideo && (
        <div
          id="video"
          className="fixed inset-0 z-500 bg-black/95 transition-all duration-600 starting:opacity-0"
        >
          <button
            onClick={() => setActiveVideo(undefined)}
            className="absolute top-4 right-4 size-12 flex items-center justify-center rounded-full bg-white/10 text-white z-10 cursor-pointer"
          >
            <div className="absolute w-5 h-0.5 bg-white rotate-45"></div>
            <div className="absolute w-5 h-0.5 bg-white -rotate-45"></div>
          </button>
          <iframe
            src={`${activeVideo}&autoplay=1&muted=1`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="BetterUp"
            data-ready="true"
            className="pointer-events-none"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          ></iframe>
        </div>
      )}
    </>
  );
}
