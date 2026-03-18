import { useEffect, useState } from "react";
import { WWA_GLASS_CLASSES, WWA_GLASS_CLASSES_HIDDEN } from "../consts";

interface Props {
  visible?: boolean;
  removing?: boolean;
}

export default function WhoWeAreSecurity({ visible, removing }: Props) {
  const [opacity, setOpacity] = useState('opacity-0');
  const [glassClasses, setGlassClasses] = useState(WWA_GLASS_CLASSES);

  useEffect(() => {
    if (visible && !removing) {
      setOpacity('opacity-100');
      setTimeout(() => {
        setGlassClasses(WWA_GLASS_CLASSES);
      }, 500);
    } else {
      setGlassClasses(WWA_GLASS_CLASSES_HIDDEN);
      setOpacity('opacity-0');
    }
  }, [visible, removing]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-start mt-30 user-select-none ${visible ? '' : 'opacity-0 pointer-events-none'}`}
    >
      <div className={`flex flex-col pt-3 xl:pt-5 items-center justify-center px-5 xl:px-0 max-w-full xl:max-w-[1210px] w-full`}>
        <h2 className={`text-4xl xl:text-5xl leading-none text-center max-w-[500px] xl:max-w-[600px] transition-all duration-500 ${opacity}`}>Enterprise-grade security. Human-centered safety.</h2>

        <div className="grid grid-cols-3 gap-2 xl:gap-5 pt-5 xl:pt-10 2xl:pt-20 w-full">
          <div className={`${glassClasses} delay-70 p-5 xl:px-10 xl:py-7 flex flex-col justify-start gap-4 xl:gap-10`}>
            <p className="text-center font-mono uppercase text-xl">A research-informed<br />ethical Framework</p>
            <div className="flex flex-col gap-2 xl:gap-3 [&_div]:text-center [&_div]:text-sm xl:[&_div]:text-md [&_div]:font-mono [&_div]:uppercase [&_div]:border [&_div]:border-white [&_div]:w-full [&_div]:py-2 [&_div]:px-4 [&_div]:rounded-full">
              <div>Fair w/ harmful bias managed</div>
              <div>Resilient + Reliable</div>
              <div>Human Engagement</div>
              <div>Transparency</div>
              <div>Privacy</div>
            </div>
          </div>
          <div className={`${glassClasses} delay-140 p-5 xl:px-10 xl:py-7 flex flex-col justify-start gap-4`}>
            <p className="text-center font-mono uppercase text-xl max-w-[200px] mx-auto">certified workday partner</p>
            <img src="/images/wwa/security/workday-rais.png" className="w-[94px] xl:w-[124px] mx-auto" alt="" />
            <div className="w-full border-b border-(--performance-yellow)"></div>
            <img src="/images/wwa/security/workday-ci.png" className="w-[94px] xl:w-[124px] mx-auto" alt="" />
          </div>
          <div className={`${glassClasses} delay-210 p-5 xl:px-10 xl:py-7 flex flex-col justify-start gap-4`}>
            <p className="text-center font-mono uppercase text-xl max-w-[120px] mx-auto">Guardian Ai Agents</p>
            <div className="relative size-[220px] xl:size-[275px] mx-auto">
              <div className="absolute top-0 left-0 size-[120px] xl:size-[146px] border border-white rounded-full flex items-center justify-center">
                <p className="font-mono uppercase text-sm xl:text-md">EXPERTISE</p>
              </div>
              <div className="absolute top-0 right-0 size-[120px] xl:size-[146px] border border-white rounded-full flex items-center justify-center">
                <p className="font-mono uppercase text-sm xl:text-md">EMPATHY</p>
              </div>
              <div className="absolute bottom-0 left-0 size-[120px] xl:size-[146px] border border-white rounded-full flex items-center justify-center">
                <p className="font-mono uppercase text-sm xl:text-md">SAFETY</p>
              </div>
              <div className="absolute bottom-0 right-0 size-[120px] xl:size-[146px] border border-white rounded-full flex items-center justify-center">
                <p className="font-mono uppercase text-sm xl:text-md">OUTCOMES</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${glassClasses} delay-280 flex flex-row items-center justify-center gap-10 w-full mt-2 xl:mt-5 p-2 xl:p-3 rounded-full`}>
          <img src="/images/wwa/security/logos-left.png" alt="" />
          <p className="text-center font-mono uppercase text-xl">Enterprise-Grade Security</p>
          <img src="/images/wwa/security/logos-right.png" alt="" />
        </div>
      </div>
    </div>
  );
}
