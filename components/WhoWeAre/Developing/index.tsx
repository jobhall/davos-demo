import { useEffect, useState } from "react";
import { WWA_GLASS_CLASSES_SMALL, WWA_GLASS_CLASSES_HIDDEN } from "../consts";

interface Props {
  visible?: boolean;
  removing?: boolean;
}

interface StatBlockProps {
  value: string;
  label: string;
  glassClasses: string;
  delay: string;
}

const statBlock = ({ value, label, glassClasses, delay }: StatBlockProps) => {
  return (
    <div className={`${glassClasses} bg-black/6 py-10 xl:py-14 px-7 xl:px-10 flex flex-col ${delay}`}>
      <div>
        <p className="relative text-6xl leading-none font-light border-b border-(--performance-yellow) pb-4 mb-3">{value}</p>
        <p className="text-md font-mono tracking-[0.09em] uppercase">{label}</p>
      </div>
    </div>
  )
}

export default function WhoWeAreDeveloping({ visible, removing }: Props) {
  const [opacity, setOpacity] = useState('opacity-0');
  const [glassClasses, setGlassClasses] = useState(WWA_GLASS_CLASSES_SMALL);

  useEffect(() => {
    if (visible && !removing) {
      setOpacity('opacity-100');
      setTimeout(() => {
        setGlassClasses(WWA_GLASS_CLASSES_SMALL);
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
        <h2 className={`text-4xl xl:text-5xl leading-none text-center max-w-[600px] xl:max-w-[840px] transition-all duration-500 ${opacity}`}>BetterUp drives your business results by developing your people</h2>

        <div className="grid grid-cols-4 gap-5 pt-20 xl:pt-30">
          {statBlock({ value: '11x ROI', label: 'Over 2–3 years BASED ON AGGREGATE ANALYSIS ACROSS 15 ENTERPRISE CUSTOMERS', glassClasses, delay: 'delay-100' })}
          {statBlock({ value: '41%', label: "INCREASE IN TOP PERFORMERS", glassClasses, delay: 'delay-200' })}
          {statBlock({ value: '50%', label: "REDUCTION IN VOLUNTARY TURNOVER", glassClasses, delay: 'delay-300' })}
          {statBlock({ value: '7.5%', label: "INCREASE IN REVENUE", glassClasses, delay: 'delay-400' })}
        </div>
      </div>
    </div>
  );
}
