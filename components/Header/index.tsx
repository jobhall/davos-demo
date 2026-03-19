'use client'

import MainMenu from "../MainMenu";
import { useState } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { transitionSlideInOut } from "@/consts/transition";
import { TransitionLink } from "../TransitionLink";

interface HeaderProps {
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
  backButtonLink?: string;
  useBlackBtn?: boolean;
}

export default function Header({ leftSide, rightSide, backButtonLink, useBlackBtn }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useTransitionRouter();

  const handleBackButton = () => {
    if (backButtonLink) {
      router.push(backButtonLink, {
        onTransitionReady: transitionSlideInOut,
      })
    } else {
      router.back()
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-100 grid grid-cols-3 items-center justify-between p-10">
        <div>
          {leftSide ? leftSide : backButtonLink ? (
            <button
              onClick={handleBackButton}
              className={`flex flex-col items-center justify-center relative size-16 rounded-full cursor-pointer ${useBlackBtn ? "bg-black/20" : "bg-[#8E8E93]/20"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex flex-col items-center justify-center relative size-16 rounded-full cursor-pointer ${useBlackBtn ? "bg-black/20" : "bg-[#8E8E93]/20"}`}
            >
              <div className={`bg-white w-6 h-0.5 transition-all duration-300 absolute ${!menuOpen ? "-mt-4" : "rotate-45"}`}></div>
              <div className={`bg-white w-6 h-0.5 transition-all duration-300 ${!menuOpen ? "" : "opacity-0"}`}></div>
              <div className={`bg-white w-6 h-0.5 transition-all duration-300 absolute ${!menuOpen ? "-mb-4" : "-rotate-45"}`}></div>
            </button>
          )}
        </div>
        <div className="flex items-center justify-center">
          <TransitionLink href="/">
            <img src="/betterup.svg" alt="BetterUp" />
          </TransitionLink>
        </div>
        <div className="flex items-center justify-end">
          {rightSide}
        </div>
      </div>
      <MainMenu open={menuOpen} />
    </>
  );
}
