'use client'

import Header from "@/components/Header";
import { GLASS_CLASSES_BLACK, HEADLINE_CLASSES, TITLE_CLASSES } from "@/consts/classes";
import { logEvent } from "@/lib/gtag";
import { useState } from "react";

const cards = [
  {
    title: "Partner Experience",
    headline: "DEMO",
    link: "https://studios-executive-dashboard.vercel.app/",
  },
  {
    title: "Member Experience",
    headline: "DEMO",
    link: "https://app.betterup.co/frontend/",
  },
]

export default function PlatformDemoClient() {
  const [activeIframe, setActiveIframe] = useState<string | undefined>(undefined);

  const handleBtnClick = (iframeSrc: string) => {
    setActiveIframe(iframeSrc);

    const selectedCard = cards.find((card) => card.link === iframeSrc);
    logEvent({ action: 'view', category: 'platform-demo__iframe', label: selectedCard?.title });
  }

  return (
    <div className="flex h-lvh pt-[20svh] items-start justify-center bg-zinc-50 font-sans bg-[url('/images/bgs/bg-demo.webp')] bg-cover bg-center">
      <Header useBlackBtn />
      <div className="flex flex-col items-center justify-center">
      <h4 className={HEADLINE_CLASSES}>The human transformation Platform</h4>
      <h1
        className={`${TITLE_CLASSES} text-center max-w-[1000px]`}
      >
        A platform that transforms workforce potential into business value
      </h1>
      <div className="flex items-center justify-center gap-6 mt-8">
        {cards.map((card) => (
          <button
            key={card.title}
            className={`flex flex-col items-left justify-center cursor-pointer gap-2 ${GLASS_CLASSES_BLACK} w-[294px] h-[334px] px-6 text-left`}
            onClick={() => handleBtnClick(card.link)}
          >
            <h6 className="font-mono uppercase text-sm">{card.headline}</h6>
            <h2 className="font-serif text-[2.5rem] leading-[1.1]">{card.title}</h2>
          </button>
        ))}
      </div>
      {activeIframe && (
        <div
          id="iframe"
          className="fixed inset-0 z-500 bg-black/95 p-10 backdrop-blur-xl transition-all duration-600 starting:opacity-0"
        >
          <div className="flex items-center justify-center overflow-hidden rounded-2xl w-full h-full">
            <button
              onClick={() => setActiveIframe(undefined)}
              className="absolute top-4 right-4 size-12 flex items-center justify-center rounded-full cursor-pointer border border-white/20 bg-black/50 text-white z-10"
            >
              <div className="absolute w-5 h-0.5 bg-white rotate-45"></div>
              <div className="absolute w-5 h-0.5 bg-white -rotate-45"></div>
            </button>
            <iframe
              src={activeIframe}
              className="transition-all duration-800 starting:translate-y-full"
              allow="autoplay; fullscreen; picture-in-picture"
              title="BetterUp"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            ></iframe>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
