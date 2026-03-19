import { useEffect, useState } from "react";
import { WWA_GLASS_CLASSES_BORDERLESS_FULL, WWA_GLASS_CLASSES_BORDERLESS_HIDDEN_FULL } from "../consts";
interface Props {
  visible?: boolean;
  removing?: boolean;
}

export default function WhoWeAreWorkforce({ visible, removing }: Props) {
  const [opacity, setOpacity] = useState('opacity-0');
  const [glassClasses, setGlassClasses] = useState(WWA_GLASS_CLASSES_BORDERLESS_FULL);

  useEffect(() => {
    if (visible && !removing) {
      setOpacity('opacity-100');
      setTimeout(() => {
        setGlassClasses(WWA_GLASS_CLASSES_BORDERLESS_FULL);
      }, 500);
    } else {
      setGlassClasses(WWA_GLASS_CLASSES_BORDERLESS_HIDDEN_FULL);
      setOpacity('opacity-0');
    }
  }, [visible, removing]);

  return (
    <>
    { /*
    <div className={`fixed inset-0 z-0 bg-linear-b from-black/70 to-black/0 pointer-events-none transition-all duration-500 starting:opacity-0 ${visible && !removing ? '' : 'opacity-0'}`}></div>
    <div className={`fixed inset-0 z-1 pointer-events-none ${glassClasses} ${visible && !removing ? '' : 'opacity-0'}`}></div>
    <div className={`fixed inset-0 z-1 bg-radial from-black/0 via-black/0 to-black/70 pointer-events-none transition-all duration-500 starting:opacity-0 ${visible && !removing ? '' : 'opacity-0'}`}></div>
    <div className={`fixed inset-0 z-2 bg-[url('/images/wwa/bg-wwa-workforce.png')] bg-cover bg-center pointer-events-none transition-all duration-500 starting:opacity-0 ${visible && !removing ? '' : 'opacity-0'}`}></div>
    */ }

    <div className={`fixed inset-0 z-0 bg-[url('/images/wwa/workforce/bg-workforce.webp')] bg-size-[auto_1020px] xl:bg-cover bg-center pointer-events-none transition-all duration-1000 ease-in-out starting:opacity-0 ${visible && !removing ? '' : 'opacity-0'}`}></div>

    <div
      className={`pointer-events-none z-3 fixed inset-0 flex flex-col items-center justify-start pt-30 user-select-none ${visible ? '' : 'opacity-0'}`}
    >
      <div className={`flex flex-col pb-5 pt-5 xl:pt-8 items-center justify-center px-5 xl:px-0 max-w-[calc(100vw-80px)] xl:max-w-[1280px] w-full`}>
        <h2 className={`text-4xl xl:text-5xl leading-none text-center max-w-[650px] xl:max-w-[750px] transition-all duration-500 ${opacity}`}>The only platform built to support the entire workforce</h2>
        <div className={`fixed inset-0 flex items-center justify-center`}>
          <div
            className={`absolute font-mono text-right text-md xl:text-xl uppercase transition-all duration-1000 delay-400 w-[250px] ml-[-850px] xl:ml-[-62%] mt-[-180px] xl:mt-[-13%] ${opacity}`}
          >MOBILE & DESKTOP</div>
          <div
            className={`absolute font-mono text-right text-md xl:text-xl uppercase transition-all duration-1000 delay-550 w-[250px] ml-[-850px] xl:ml-[-62%] mt-[280px] xl:mt-[20%] ${opacity}`}
          >delivered globally</div>
          <div
            className={`absolute font-mono text-left text-md xl:text-xl uppercase transition-all duration-1000 delay-700 w-[250px] mr-[-830px] xl:mr-[-60%] mt-[-180px] xl:mt-[-13%] ${opacity}`}
          >60+ languages<br />90+ countries</div>
          <div
            className={`absolute font-mono text-left text-md xl:text-xl uppercase transition-all duration-1000 delay-850 w-[250px] mr-[-830px] xl:mr-[-60%] mt-[280px] xl:mt-[20%] ${opacity}`}
          >Executives<br />Managers<br />Frontline Employees</div>
        </div>
        <div className="absolute top-1/2 flex flex-col items-center w-[250px] ml-[-17px] mt-[108px] xl:mt-[8%] gap-2">
          <div className={`border-dashed border border-white/50 h-[100px] xl:h-[120px] w-0 transition-all duration-1000 delay-1050 ${opacity}`}></div>
          <div
            className={`font-mono text-center text-md xl:text-xl uppercase transition-all duration-1000 delay-1150 w-[250px] ${opacity}`}
          >YOUR WORKFORCE</div>
        </div>
      </div>
    </div>
    </>
  );
}
