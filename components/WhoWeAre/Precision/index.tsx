import { useEffect, useState } from "react";
import { WWA_GLASS_CLASSES_BORDERLESS, WWA_GLASS_CLASSES_BORDERLESS_HIDDEN } from "../consts";

interface Props {
  visible?: boolean;
  removing?: boolean;
}

export default function WhoWeArePrecision({ visible, removing }: Props) {
  const [opacity, setOpacity] = useState('opacity-0');
  const [glassClasses, setGlassClasses] = useState(WWA_GLASS_CLASSES_BORDERLESS);

  useEffect(() => {
    if (visible && !removing) {
      setOpacity('opacity-100');
      setTimeout(() => {
        setGlassClasses(WWA_GLASS_CLASSES_BORDERLESS);
      }, 500);
    } else {
      setGlassClasses(WWA_GLASS_CLASSES_BORDERLESS_HIDDEN);
      setOpacity('opacity-0');
    }
  }, [visible, removing]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-start 2xl:justify-center 2xl:pb-30 mt-30 user-select-none ${visible ? '' : 'opacity-0 pointer-events-none'}`}
    >
      <div className={`relative h-[calc(100vh-240px)] 2xl:h-[800px] flex flex-col pb-5 pt-5 xl:pt-8 items-center justify-center px-5 xl:px-0 max-w-[calc(100vw-80px)] xl:max-w-[1280px] w-full border border-white/10 ${glassClasses}`}>
        <h2 className={`absolute top-10 left-10 text-4xl xl:text-5xl leading-none transition-all duration-500 max-w-[450px] xl:max-w-[550px] ${opacity}`}>Precision development for your entire organization</h2>
        <div className={`relative flex ml-auto [&>img]:transition-all [&>img]:duration-1000 w-full h-full`}>
          <img src="/images/wwa/precision/precision-1.png" alt="Precision" className={`absolute starting:-translate-y-10 right-0 max-h-full delay-200 ${opacity}`} />
          <img src="/images/wwa/precision/precision-2.png" alt="Precision" className={`absolute starting:-translate-y-10 right-0 max-h-full delay-400 ${opacity}`} />
          <img src="/images/wwa/precision/precision-3.png" alt="Precision" className={`absolute starting:-translate-y-10 right-0 max-h-full delay-600 ${opacity}`} />
          <img src="/images/wwa/precision/precision-4.png" alt="Precision" className={`absolute starting:-translate-y-10 right-0 max-h-full delay-800 ${opacity}`} />
          <img src="/images/wwa/precision/precision-5.png" alt="Precision" className={`absolute right-0 max-h-full delay-1200 ${opacity}`} />
        </div>
      </div>
    </div>
  );
}
