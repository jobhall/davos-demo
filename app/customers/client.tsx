'use client'

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Header from "@/components/Header";
import Slider3D from "@/components/Slider3D";
import { customers, TCustomer } from "@/consts/customers";
import { HEADLINE_CLASSES, TITLE_CLASSES } from "@/consts/classes";
import { logEvent } from "@/lib/gtag";

export default function CustomersClient() {
  const [selectedCustomer, setSelectedCustomer] = useState<TCustomer | undefined>(undefined);
  const [closing, setClosing] = useState(false);

  const handleOnCardClick = (id: string) => {
    setSelectedCustomer(customers.find((customer) => customer.id === id));
  }

  const handleNextClick = () => {
    const index = customers.findIndex((customer) => customer.id === selectedCustomer?.id);
    const nextIndex = index + 1;
    if (nextIndex < customers.length) {
      setSelectedCustomer(customers[nextIndex]);
    } else {
      setSelectedCustomer(customers[0]);
    }
  }

  const handlePrevClick = () => {
    const index = customers.findIndex((customer) => customer.id === selectedCustomer?.id);
    const prevIndex = index - 1;
    if (prevIndex >= 0) {
      setSelectedCustomer(customers[prevIndex]);
    } else {
      setSelectedCustomer(customers[customers.length - 1]);
    }
  }

  useEffect(() => {
    if (closing) {
      setTimeout(() => {
        setSelectedCustomer(undefined);
        setClosing(false);
      }, 500);
    }
  }, [closing]);

  useEffect(() => {
    if (selectedCustomer) {
      logEvent({ action: 'view', category: 'customers', label: selectedCustomer.id });
    }
  }, [selectedCustomer]);

  const closeBtn = (
    <button
      onClick={() => setClosing(true)}
      className="flex flex-col items-center justify-center relative size-16 rounded-full bg-[#8E8E93]/20 cursor-pointer"
    >
      <div className={`bg-white w-6 h-0.5 absolute rotate-45`}></div>
      <div className={`bg-white w-6 h-0.5 absolute -rotate-45`}></div>
    </button>
  );

  return (
    <div className="flex flex-col h-lvh items-center justify-center bg-zinc-50 font-sans bg-[url('/images/bgs/bg-clients.webp')] bg-cover bg-center">
      <Header leftSide={selectedCustomer ? closeBtn : undefined} />

      <h4 className={HEADLINE_CLASSES}>Our Customers</h4>
      <h1 className={`${TITLE_CLASSES} text-center px-10 xl:px-40 xl:max-w-[1400px]`}>The world’s leading companies trust us to drive business outcomes</h1>

      <div className="relative mt-8 w-full flex items-center justify-center">
        <Slider3D items={customers} onCardClick={handleOnCardClick} />
      </div>
      {(selectedCustomer || closing) && (
        <div className={`fixed inset-0 z-50 p-10 pt-35 gap-10 flex flex-col items-center justify-center bg-black/50 backdrop-blur-2xl transition-opacity duration-500 starting:opacity-0 w-full h-full ${closing ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex-1 grid grid-cols-[1fr_1.05fr] xl:grid-cols-[1fr_1.15fr] gap-10 xl:gap-14 h-full w-full max-w-[1240px]">
            <div className="flex flex-col pb-0 xl:pb-4 flex-1">
              <div className="flex w-full max-w-[200px] xl:max-w-[250px] relative mb-6 xl:mb-10 mt-4">
                <img
                  src={selectedCustomer?.logo || ''}
                  alt={selectedCustomer?.id || ''}
                  style={{
                    objectFit: "contain",
                    objectPosition: "left",
                    width: (selectedCustomer?.wwaMaxWidth || 200) * 1.25
                  }}
                  className="max-h-[65px] xl:max-h-auto max-w-[150px] xl:max-w-auto"
                />
              </div>
              <p className="text-lg leading-6 xl:text-[1.625rem] xl:leading-9">{selectedCustomer?.text || ''}</p>
              <div className="flex-1"></div>
              <div className="grid grid-cols-2 gap-12 min-h-[222px] xl:min-h-[280px]">
                <div className="flex flex-col gap-2 max-w-[210px] xl:max-w-[240px]">
                  <p className="text-[4rem] xl:text-[5rem] border-b border-white font-light pb-0 mb-1 xl:pb-1 xl:mb-3">
                    <CountUp
                      key={`${selectedCustomer?.id}-1`}
                      start={0}
                      end={selectedCustomer?.stat1 || 0}
                      duration={2}
                      suffix={selectedCustomer?.stat1Suffix}
                      delay={0.2}
                    />
                  </p>
                  <p className="font-mono uppercase text-sm xl:text-xl">{selectedCustomer?.stat1Label || ''}</p>
                  <p className="text-[#D9D9D9] text-xs xl:text-sm">{selectedCustomer?.stat1Description || ''}</p>
                </div>
                <div className="flex flex-col gap-2 max-w-[210px] xl:max-w-[240px]">
                  <p className="text-[4rem] xl:text-[5rem] border-b border-white font-light pb-0 mb-1 xl:pb-1 xl:mb-3">
                    <CountUp
                      key={`${selectedCustomer?.id}-2`}
                      start={0}
                      end={selectedCustomer?.stat2 || 0}
                      duration={4}
                      suffix={selectedCustomer?.stat2Suffix}
                      delay={0.2}
                    />
                  </p>
                  <p className="font-mono uppercase text-sm xl:text-xl">{selectedCustomer?.stat2Label || ''}</p>
                  <p className="text-[#D9D9D9] text-xs xl:text-sm">{selectedCustomer?.stat2Description || ''}</p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center p-5 bg-white/6 border border-white/4 rounded-4xl">
              <div className="relative w-full h-full">
                <img
                  src={selectedCustomer?.image || ''}
                  alt={selectedCustomer?.id || ''}
                  className="absolute object-cover rounded-2xl bg-black/50 w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 w-full">
            <button
              onClick={handlePrevClick}
              className="flex items-center justify-center bg-white/6 border border-white/4 rounded-full size-12 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.56982 5.92999L3.49982 12L9.56982 18.07" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.5 12H3.67" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex items-center justify-center bg-white/6 border border-white/4 rounded-full h-22 w-fit px-8 gap-8 xl:gap-12">
              {customers.map((customer) => (
                <button
                  key={customer.id}
                  onClick={() => handleOnCardClick(customer.id)}
                  className={`flex items-center justify-center relative transition-all duration-300 cursor-pointer ${selectedCustomer?.id === customer.id ? "" : "opacity-30"}`}
                >
                  <img
                    src={customer.logo}
                    alt={customer.id}
                    style={{
                      objectFit: "contain",
                      width: customer.wwaMaxWidth / 1.6
                    }}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={handleNextClick}
              className="flex items-center justify-center bg-white/6 border border-white/4 rounded-full size-12 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-180">
                <path d="M9.56982 5.92999L3.49982 12L9.56982 18.07" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.5 12H3.67" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="fixed pointer-events-none bottom-8 left-1/2 -translate-x-1/2 text-white text-sm uppercase font-mono opacity-50">
        swipe Left/right and tap to explore
      </div>
    </div>
  );
}
