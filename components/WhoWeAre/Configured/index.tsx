import { useEffect, useState } from "react";
interface Props {
  visible?: boolean;
  removing?: boolean;
}

const CIRCLE_CLASSES = `w-[235px] xl:w-[265px] transition-all duration-500 delay-60 flex flex-col items-center justify-start gap-6`;
const INNER_CIRCLE_CLASSES = `size-[235px] xl:size-[265px] rounded-full bg-cover border-2 border-white flex items-center justify-center p-10 xl:p-14 text-center font-mono`;

export default function WhoWeAreConfigured({ visible, removing }: Props) {
  const [opacity, setOpacity] = useState('opacity-0');

  useEffect(() => {
    if (visible && !removing) {
      setOpacity('opacity-100');
    } else {
      setOpacity('opacity-0');
    }
  }, [visible, removing]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-start mt-30 user-select-none transition-all duration-500 ${visible && !removing ? '' : 'opacity-0 pointer-events-none'}`}
    >
      <div className={`flex flex-col pt-3 xl:pt-5 items-center justify-center px-5 xl:px-0 max-w-full xl:max-w-[1210px] w-full`}>
        <h2 className={`text-4xl xl:text-5xl leading-none text-center max-w-[680px] transition-all duration-500 ${opacity}`}>Configured to your strategy</h2>

        <div className="mt-14 xl:mt-20 flex flex-row">
          <div className={`${CIRCLE_CLASSES} ${opacity} delay-60`}>
            <p className="font-mono text-xl">1</p>
            <div className={`${INNER_CIRCLE_CLASSES}`}>
              <div>UNDERSTAND <span className="text-nowrap">YOUR WHY, WHAT,</span> <span className="text-nowrap">AND WHO</span></div>
            </div>
          </div>
          <div className={`${CIRCLE_CLASSES} ${opacity} -ml-6 xl:-ml-10 delay-120`}>
            <p className="font-mono text-xl">2</p>
            <div className={`${INNER_CIRCLE_CLASSES}`}>
              <div>DESIGN <span className="text-nowrap">YOUR SOLUTION</span> BLUEPRINT</div>
            </div>
          </div>
          <div className={`${CIRCLE_CLASSES} ${opacity} -ml-6 xl:-ml-10 delay-180`}>
            <p className="font-mono text-xl">3</p>
            <div className={`${INNER_CIRCLE_CLASSES}`}>
              <div>CONFIGURE TO YOUR CONTEXT & DEPLOY ORG-WIDE</div>
            </div>
          </div>
          <div className={`${CIRCLE_CLASSES} ${opacity} -ml-6 xl:-ml-10 delay-240`}>
            <p className="font-mono text-xl">4</p>
            <div className={`${INNER_CIRCLE_CLASSES}`}>
              <div>DRIVE ENGAGEMENT & PROVE IMPACT</div>
            </div>
          </div>
          <div className={`${CIRCLE_CLASSES} ${opacity} -ml-6 xl:-ml-10 delay-300`}>
            <p className="font-mono text-xl">5</p>
            <div className={`${INNER_CIRCLE_CLASSES}`}>
              <div>OPTIMIZE STRATEGY WITH PERFORMANCE INSIGHTS</div>
            </div>
          </div>
        </div>

        <div className={`mt-12 flex items-center justify-center relative w-full transition-all duration-700 ${opacity} delay-300`}>
          <div className="text-lg">Fully connected and continuously evolving as your strategy evolves</div>
          <div className="absolute mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="952"
              height="54"
              viewBox="0 0 952 54"
              fill="none"
              className="max-w-[850px] xl:max-w-full xl:scale-96"
            >
              <path
                d="M946.615 2.66675C946.615 4.13951 947.809 5.33341 949.282 5.33341C950.754 5.33341 951.948 4.13951 951.948 2.66675C951.948 1.19399 950.754 8.13007e-05 949.282 8.13007e-05C947.809 8.13007e-05 946.615 1.19399 946.615 2.66675ZM4.03519 2.31319C3.83993 2.11793 3.52335 2.11793 3.32809 2.31319L0.146107 5.49518C-0.0491555 5.69044 -0.0491555 6.00702 0.146107 6.20228C0.341369 6.39754 0.657951 6.39754 0.853214 6.20228L3.68164 3.37385L6.51007 6.20228C6.70533 6.39754 7.02191 6.39754 7.21717 6.20228C7.41244 6.00702 7.41244 5.69044 7.21717 5.49518L4.03519 2.31319ZM949.282 2.66675H948.782V45.0668H949.282H949.782V2.66675H949.282ZM941.282 53.0667V52.5667H11.6816V53.0667V53.5667H941.282V53.0667ZM3.68164 45.0667H4.18164V2.66675H3.68164H3.18164V45.0667H3.68164ZM11.6816 53.0667V52.5667C7.53949 52.5667 4.18164 49.2089 4.18164 45.0667H3.68164H3.18164C3.18164 49.7612 6.98721 53.5667 11.6816 53.5667V53.0667ZM949.282 45.0668H948.782C948.782 49.2089 945.424 52.5667 941.282 52.5667V53.0667V53.5667C945.976 53.5667 949.782 49.7612 949.782 45.0668H949.282Z"
                fill="#DDFF0E"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
