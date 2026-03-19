import { useEffect, useState } from "react";
import { WWA_GLASS_CLASSES_BORDERLESS, WWA_GLASS_CLASSES_BORDERLESS_HIDDEN } from "../consts";
interface Props {
  visible?: boolean;
  removing?: boolean;
}

export default function OLD_WhoWeAreWorkforce({ visible, removing }: Props) {
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
      className={`fixed inset-0 flex flex-col items-center justify-start mt-30 user-select-none ${visible ? '' : 'opacity-0 pointer-events-none'}`}
    >
      <div className={`flex flex-col pb-5 pt-5 xl:pt-8 items-center justify-center px-5 xl:px-0 max-w-[calc(100vw-80px)] xl:max-w-[1280px] w-full ${glassClasses}`}>
        <h2 className={`text-4xl xl:text-5xl leading-none text-center max-w-[650px] xl:max-w-[750px] transition-all duration-500 ${opacity}`}>The only platform built to support the entire workforce</h2>
        <div className={`relative flex flex-col gap-2 xl:gap-4 py-4 xl:py-12 items-center mt-5 xl:mt-10 ml-auto transition-all duration-500 delay-200 w-full h-full ${opacity}`}>
          <div
            className={`flex items-center gap-5 transition-all duration-1000 delay-200 ${opacity}`}
          >
            <div className="font-mono text-xl uppercase w-[300px] text-right">Your workforce</div>
            <div className="relative w-[120px] h-px bg-(--performance-yellow) before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:size-[7px] before:bg-(--performance-yellow) before:rounded-full mr-8"></div>
            <div className="w-[230px] h-[98px] rounded-[50%] border border-white/70 bg-linear-to-r from-white/0 to-white/30 flex items-center justify-center">
              <div className="relative size-4 bg-white rounded-full before:content-[''] before:absolute before:w-px before:h-[325px] xl:before:h-[345px] before:bg-white before:top-1/2 before:left-1/2 before:transition-all before:duration-1000 before:delay-400 before:starting:h-px"></div>
            </div>
          </div>

          <div
            className={`flex items-center gap-5 transition-all duration-1000 delay-400 ${opacity}`}
          >
            <div className="font-mono text-xl uppercase w-[300px] text-right">mobile & desktop</div>
            <div className="relative w-[120px] h-px bg-(--performance-yellow) before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:size-[7px] before:bg-(--performance-yellow) before:rounded-full mr-8"></div>
            <div className="w-[230px] h-[98px] rounded-[50%] bg-linear-to-r from-white/0 to-white"></div>
          </div>

          <div
            className={`flex items-center gap-5 transition-all duration-1000 delay-600 ${opacity}`}
          >
            <div className="font-mono text-xl uppercase w-[300px] text-right">Delivered globally with localized context</div>
            <div className="relative w-[120px] h-px bg-(--performance-yellow) before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:size-[7px] before:bg-(--performance-yellow) before:rounded-full mr-8"></div>
            <div className="w-[230px] h-[98px] rounded-[50%] bg-linear-to-r from-white/0 to-white"></div>
          </div>

          <div
            className={`flex items-center gap-5 transition-all duration-1000 delay-800 ${opacity}`}
          >
            <div className="font-mono text-xl uppercase w-[300px] text-right">The world’s largest coaching network</div>
            <div className="relative w-[120px] h-px bg-(--performance-yellow) before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:size-[7px] before:bg-(--performance-yellow) before:rounded-full mr-8"></div>
            <div className="w-[230px] h-[98px] rounded-[50%] bg-linear-to-r from-white/0 to-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
