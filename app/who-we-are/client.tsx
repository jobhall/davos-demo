'use client'

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import SlidePagination from "@/components/SlidePagination";

import WhoWeAreHome from "@/components/WhoWeAre/Home";
import WhoWeArePioneer from "@/components/WhoWeAre/Pioneer";
import WhoWeAreWorkforce from "@/components/WhoWeAre/Workforce";
import WhoWeAreDeveloping from "@/components/WhoWeAre/Developing";
import WhoWeArePrecision from "@/components/WhoWeAre/Precision";
import WhoWeAreCustomer from "@/components/WhoWeAre/Customer";
import WhoWeAreSecurity from "@/components/WhoWeAre/Security";
import WhoWeAreEcosystem from "@/components/WhoWeAre/Ecosystem";
import WhoWeAreConfigured from "@/components/WhoWeAre/Configured";
import { logEvent } from "@/lib/gtag";

const ELEMENT_POSITION = [
  'translate-y-[0%] translate-x-[0%] scale-110 -rotate-5',
  'translate-y-[33%] translate-x-[0%] scale-80 rotate-25',
  'translate-y-[33%] translate-x-[0%] scale-150 rotate-25',
  'translate-y-[18%] translate-x-[0%] scale-100 rotate-62',
  'translate-y-[60%] translate-x-[0%] scale-300 rotate-200',
  'translate-y-[55%] translate-x-[-25%] scale-210 rotate-245',
  'translate-y-[22%] translate-x-[0%] scale-90 rotate-65',
  'translate-y-[-75%] translate-x-[-20%] scale-190 rotate-22',
  'translate-y-[36%] translate-x-[43%] scale-80 rotate-10',
]

const ELEMENT_VISIBILITY = [
  'opacity-100',
  'opacity-100',
  'opacity-0',
  'opacity-100',
  'opacity-0',
  'opacity-0',
  'opacity-0',
  'opacity-100',
  'opacity-100',
]

const ELEMENT_B_VISIBILITY = [
  'opacity-100',
  'opacity-0',
  'opacity-70',
  'opacity-0',
  'opacity-100',
  'opacity-100',
  'opacity-100',
  'opacity-0',
  'opacity-0',
]

const BG_GRADIENT = [
  'linear-gradient(144.23deg, #E80060 -13.15%, #030303 94.77%), #000000',
  'linear-gradient(142.7deg, #030303 -12.51%, #E80060 99.32%), #000000',
  'linear-gradient(142.7deg, #030303 -12.51%, #E80060 99.32%), #000000',
  'linear-gradient(142.7deg, #030303 -12.51%, #E80060 99.32%), linear-gradient(149.52deg, #030303 -15.43%, #E80060 72.34%, #EE939D 77.11%), #000000',
  'linear-gradient(149.52deg, #030303 -15.43%, #E80060 72.34%, #EE939D 77.11%), #000000',
  'linear-gradient(142.7deg, #030303 -12.51%, #E80060 99.32%), linear-gradient(149.52deg, #030303 -15.43%, #E80060 72.34%, #EE939D 77.11%), #000000',
  'linear-gradient(142.7deg, #030303 -12.51%, #E80060 99.32%), linear-gradient(149.52deg, #030303 -15.43%, #E80060 72.34%, #EE939D 77.11%), #000000',
  'linear-gradient(142.7deg, #030303 -12.51%, #E80060 99.32%), #000000',
  'linear-gradient(142.7deg, #030303 -12.51%, #E80060 99.32%), linear-gradient(149.52deg, #030303 -15.43%, #E80060 72.34%, #EE939D 77.11%), #000000',
]

const BGS_BASE_CLASSES = 'absolute inset-0 w-svw h-lvh z-0 opacity-0 transition-opacity duration-2000 ease-in-out';

export default function WhoWeAreClient() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [hidePagination, setHidePagination] = useState(false);

  const onNext = () => {
    setNext(prev => prev + 1);
  };
  const onPrev = () => {
    setNext(prev => prev - 1);
  };

  useEffect(() => {
    logEvent({ action: 'slide_view', category: 'who-we-are', label: `${next}` });
  }, []);

  useEffect(() => {
    setTimeout(() => setCurrent(next), 500);

    logEvent({ action: 'slide_view', category: 'who-we-are', label: `${next}` });
  }, [next]);

  return (
    <div
      className="flex h-lvh items-start justify-center font-sans"
      style={{
        background: BG_GRADIENT[next-1],
      }}
    >
      <div id="bgs" className="fixed inset-0 z-0 pointer-events-none" style={{
        background: 'linear-gradient(144.23deg, #E80060 -13.15%, #030303 94.77%), #000000'
      }}>
        <div className={`${BGS_BASE_CLASSES} ${next === 1 ? 'opacity-100' : ''}`} style={{ background: BG_GRADIENT[0] }} />
        <div className={`${BGS_BASE_CLASSES} ${next === 2 ? 'opacity-100' : ''}`} style={{ background: BG_GRADIENT[1] }} />
        <div className={`${BGS_BASE_CLASSES} ${next === 3 ? 'opacity-100' : ''}`} style={{ background: BG_GRADIENT[2] }} />
        <div className={`${BGS_BASE_CLASSES} ${next === 4 ? 'opacity-100' : ''}`} style={{ background: BG_GRADIENT[3] }} />
        <div className={`${BGS_BASE_CLASSES} ${next === 5 ? 'opacity-100' : ''}`} style={{ background: BG_GRADIENT[4] }} />
        <div className={`${BGS_BASE_CLASSES} ${next === 6 ? 'opacity-100' : ''}`} style={{ background: BG_GRADIENT[5] }} />
        <div className={`${BGS_BASE_CLASSES} ${next === 7 ? 'opacity-100' : ''}`} style={{ background: BG_GRADIENT[6] }} />
        <div className={`${BGS_BASE_CLASSES} ${next === 8 ? 'opacity-100' : ''}`} style={{ background: BG_GRADIENT[7] }} />
        <div className={`${BGS_BASE_CLASSES} ${next === 9 ? 'opacity-100' : ''}`} style={{ background: BG_GRADIENT[8] }} />
      </div>
      {hidePagination ? null : <Header useBlackBtn />}
      <div className="fixed inset-0 z-1 pointer-events-none 2xl:flex 2xl:justify-center">
        <img
          id="element"
          src="/images/form.webp"
          className={`absolute transition-all duration-2000 ease-in-out ${ELEMENT_POSITION[next-1]} ${ELEMENT_VISIBILITY[next-1]}`}
        />
        <img
          id="element-b"
          src="/images/form-b.webp"
          className={`absolute transition-all duration-2000 ease-in-out ${ELEMENT_POSITION[next-1]} ${ELEMENT_B_VISIBILITY[next-1]}`}
        />
        <img
          id="element-tl"
          src="/images/wwa/form-tl.webp"
          className={`absolute top-0 left-0 transition-all duration-2000 ease-in-out ${next !== 9 ? 'rotate-45 -translate-y-full -translate-x-full' : 'rotate-0 translate-y-0 translate-x-0 scale-70 origin-top-left'}`}
        />
      </div>
      <div id="content" className="absolute inset-0 z-2">
        {current === 1 && <WhoWeAreHome visible={current === 1} removing={next !== 1} />}
        {current === 2 && <WhoWeArePioneer visible={current === 2} removing={next !== 2} />}
        {current === 3 && <WhoWeAreWorkforce visible={current === 3} removing={next !== 3} />}
        {current === 4 && <WhoWeAreDeveloping visible={current === 4} removing={next !== 4} />}
        {current === 5 && <WhoWeArePrecision visible={current === 5} removing={next !== 5} />}
        {current === 6 && <WhoWeAreCustomer visible={current === 6} removing={next !== 6} onPopupChange={setHidePagination} />}
        {current === 7 && <WhoWeAreSecurity visible={current === 7} removing={next !== 7} />}
        {current === 8 && <WhoWeAreEcosystem visible={current === 8} removing={next !== 8} />}
        {current === 9 && <WhoWeAreConfigured visible={current === 9} removing={next !== 9} />}
      </div>
      <div className={`fixed bottom-10 z-5 ${hidePagination ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
        <SlidePagination length={9} current={current} onNext={onNext} onPrev={onPrev} />
      </div>
    </div>
  );
}
