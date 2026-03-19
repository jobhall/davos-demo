import { useEffect, useState } from "react";
import { WWA_GLASS_CLASSES, WWA_GLASS_CLASSES_HIDDEN } from "../consts";

interface Props {
  visible?: boolean;
  removing?: boolean;
}

const statBlock = ({ value, label }: { value: string; label: string }) => {
  return (
    <div>
      <p className="relative text-5xl xl:text-6xl leading-none font-light border-b border-(--performance-yellow) pb-4 mb-3">{value}
        <span className="absolute top-0 text-4xl text-(--performance-yellow)">+</span>
      </p>
      <p className="text-md xl:text-lg font-mono tracking-[0.09em] uppercase min-h-16">{label}</p>
    </div>
  )
}

export default function WhoWeArePioneer({ visible, removing }: Props) {
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
        <h2 className={`text-4xl xl:text-5xl leading-none text-center max-w-[700px] xl:max-w-[920px] transition-all duration-500 ${opacity}`}>BetterUp has pioneered digital coaching and behavioral growth for over 12 years</h2>

        <div className="grid grid-cols-3 gap-5 pt-8 xl:pt-12 2xl:pt-18">
          <div className={`${glassClasses} py-8 xl:py-12 px-14`}>
            <p className="text-center font-mono [&_span]:text-(--performance-yellow)">TRUSTED BY <span>750+</span> LEADING ENTERPRISE ORGANIZATIONS ACROSS <span>90+</span> COUNTRIES</p>
            <div className="grid grid-cols-2 gap-10 mt-10">
              <div className="flex flex-col items-center gap-5 xl:gap-10 [&_img]:max-w-[100px] xl:[&_img]:max-w-auto [&_img]:max-h-[50px] xl:[&_img]:max-h-auto">
                <img src="/images/wwa/pioneer/google.svg" alt="" />
                <img src="/images/wwa/pioneer/salesforce.svg" alt="" />
                <img src="/images/wwa/pioneer/usaf.svg" alt="" />
                <img src="/images/wwa/pioneer/db.svg" alt="" />
              </div>
              <div className="flex flex-col items-center gap-5 xl:gap-10 [&_img]:max-w-[100px] xl:[&_img]:max-w-auto [&_img]:max-h-[50px] xl:[&_img]:max-h-auto">
                <img src="/images/wwa/pioneer/disney.svg" alt="" />
                <img src="/images/wwa/pioneer/pfizer.svg" alt="" />
                <img src="/images/wwa/pioneer/accenture.svg" alt="" />
                <img src="/images/wwa/pioneer/unilever.svg" alt="" />
              </div>
            </div>
          </div>
          <div className={`${glassClasses} delay-100 py-12 xl:py-18 px-7 xl:px-10 flex flex-col justify-around gap-7 xl:gap-10`}>
            {statBlock({ value: '4,000', label: 'CERTIFIED COACHES' })}
            {statBlock({ value: '5M', label: 'COACHING SESSIONS DELIVERED' })}
          </div>
          <div className={`${glassClasses} delay-200 py-12 xl:py-18 px-7 xl:px-10 flex flex-col justify-around gap-7 xl:gap-10`}>
            {statBlock({ value: '200M', label: "DATA POINTS, THE WORLD’S LARGEST DATA SET ON HUMAN BEHAVIOR" })}
            {statBlock({ value: '300', label: 'academic labs studying our data' })}
          </div>
        </div>
      </div>
    </div>
  );
}
