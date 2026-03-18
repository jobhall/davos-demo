'use client'

import { useState, useEffect, useRef } from 'react';
import { TCustomer } from '@/consts/customers';

interface Props {
  items: TCustomer[];
  onCardClick?: (id: string) => void;
}

export default function Slider3D({ items, onCardClick }: Props) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const autoRotateInterval = useRef<NodeJS.Timeout | null>(null);
  const autoRotateDebounce = useRef<NodeJS.Timeout | null>(null);
  const AUTO_ROTATE_SPEED = 2000;

  const itemCount = items.length;
  const radius = 66 * itemCount;
  const theta = 360 / itemCount;

  const rotateNext = () => {
    setRotation(prev => prev - theta);
    stopAutoRotate();
  };
  const rotatePrev = () => {
    setRotation(prev => prev + theta);
    stopAutoRotate();
  };

  useEffect(() => {
    startAutoRotate();
    return () => {
      stopAutoRotate();
      if (autoRotateDebounce.current) {
        clearTimeout(autoRotateDebounce.current);
      }
    };
  }, []);

  const startAutoRotate = () => {
    stopAutoRotate();
    autoRotateInterval.current = setInterval(rotateNext, AUTO_ROTATE_SPEED);
  };

  const stopAutoRotate = () => {
    if (autoRotateInterval.current) {
      clearInterval(autoRotateInterval.current);
      autoRotateInterval.current = null;
    }
    if (autoRotateDebounce.current) {
      clearTimeout(autoRotateDebounce.current);
    }
    autoRotateDebounce.current = setTimeout(() => {
      startAutoRotate();
    }, 3000);
  };

  const handleMouseDown = (e: any) => {
    stopAutoRotate();
    setIsDragging(true);
    setStartX(e.pageX - rotation);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    const x = e.pageX - startX;
    setRotation(x);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setRotation(prev => Math.round(prev / theta) * theta);
  };

  const handleTouchStart = (e: any) => {
    stopAutoRotate();
    setIsDragging(true);
    setStartX(e.touches[0].pageX - rotation);
  };

  const handleTouchMove = (e: any) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - startX;
    setRotation(x);
  };

  const handleCardClick = (id: string) => {
    onCardClick?.(id);
  };

  return (
    <>
      <button
        onClick={rotatePrev}
        className="hidden 2xl:flex items-center justify-center bg-white/6 border border-white/4 rounded-full size-12 absolute left-10 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9.56982 5.92999L3.49982 12L9.56982 18.07" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.5 12H3.67" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        style={{ perspective: '1800px' }}
      >
        <div
          className="relative w-[350px] h-[350px] transition-transform duration-500 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`
          }}
        >
          {items.map((item, index) => {
            const itemRotation = index * theta;
            return (
              <div
                key={item.id}
                className="absolute inset-0 w-full h-full select-none cursor-pointer"
                style={{
                  transform: `rotateY(${itemRotation}deg) translateZ(${radius}px)`,
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => handleCardClick(item.id)}
              >
                <div
                  className="absolute flex items-center justify-center inset-0 w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 bg-white/5 backdrop-blur-xl"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative w-full h-full overflow-hidden p-5 pointer-events-none max-w-[250px] max-h-[200px]">
                    <img
                      src={item.logo}
                      alt={item.id}
                      className="w-full h-full object-contain transition-transform duration-700 select-none"
                    />
                  </div>
                </div>

                <div
                  className="absolute flex items-center justify-center inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
                  style={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div
                    className="relative w-full h-full overflow-hidden p-5 pointer-events-none blur-md opacity-50 max-w-[250px] max-h-[200px]"
                    style={{
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <img
                      src={item.logo}
                      alt={item.id}
                      className="w-full h-full object-contain transition-transform duration-700 select-none"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={rotateNext}
        className="hidden 2xl:flex items-center justify-center bg-white/6 border border-white/4 rounded-full size-12 absolute right-10 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='rotate-180'>
          <path d="M9.56982 5.92999L3.49982 12L9.56982 18.07" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.5 12H3.67" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  )
}
