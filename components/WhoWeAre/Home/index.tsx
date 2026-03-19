import { useEffect, useState } from "react";
import { WWA_GLASS_CLASSES, WWA_GLASS_CLASSES_HIDDEN } from "../consts";

interface Props {
  visible?: boolean;
  removing?: boolean;
}

export default function WhoWeAreHome({ visible, removing }: Props) {
  const [glassClasses, setGlassClasses] = useState(WWA_GLASS_CLASSES);

  useEffect(() => {
    if (visible && !removing) {
      setTimeout(() => setGlassClasses(WWA_GLASS_CLASSES), 500);
    } else {
      setGlassClasses(WWA_GLASS_CLASSES_HIDDEN);
    }
  }, [visible, removing]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center user-select-none ${visible ? '' : 'opacity-0 pointer-events-none'}`}
    >
      <div className={`flex flex-col items-center justify-center max-w-[840px] xl:max-w-[960px] w-full ${glassClasses}`}>
        <div className="p-12 xl:p-20">
          <h4 className="text-[4.5rem] xl:text-[5.25rem] leading-none font-serif">The Human Transformation Platform powering <i>enterprise performance</i></h4>
          <p className="text-md xl:text-lg font-mono mt-6 xl:mt-10 tracking-[0.09em]">TRANSFORM WORKFORCE POTENTIAL INTO BUSINESS VALUE</p>
        </div>
      </div>
    </div>
  );
}
