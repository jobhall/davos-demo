import { useEffect, useState } from "react";
import { WWA_GLASS_CLASSES_BORDERLESS, WWA_GLASS_CLASSES_BORDERLESS_HIDDEN } from "../consts";
interface Props {
  visible?: boolean;
  removing?: boolean;
}

export default function WhoWeAreEcosystem({ visible, removing }: Props) {
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
      <div className={`flex flex-col pb-5 pt-5 xl:pt-8 items-center justify-center px-5 xl:px-0 max-w-[calc(100vw-80px)] xl:max-w-[1280px] w-full ${glassClasses}`}>
        <h2 className={`text-4xl xl:text-5xl leading-none text-center max-w-[550px] xl:max-w-[700px] transition-all duration-500 ${opacity}`}>An ecosystem to deliver enterprise-specific solutions</h2>

        <div className={`relative mt-8 flex flex-col items-center justify-center [&>div]:absolute [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:gap-2 [&>div]:transition-all [&>div]:duration-500 [&>div]:starting:translate-y-5`}>
          <div className={`delay-500 ${opacity} top-[5%] xl:top-[5%] left-[18%] xl:left-[18%]`}>
            <p className="w-min text-right font-mono leading-5">MARTIN SELIGMAN</p>
            <img src="/images/wwa/ecosystem/martin.png" alt="Martin Seligman" className="scale-80 xl:scale-100" />
          </div>
          <div className={`delay-600 ${opacity} top-[27%] xl:top-[22%] left-[13%] xl:left-[7.5%]`}>
            <p className="w-min text-right font-mono leading-5">BRENÉ BROWN</p>
            <img src="/images/wwa/ecosystem/brene.png" alt="Brené Brown" className="scale-80 xl:scale-100" />
          </div>
          <div className={`delay-700 ${opacity} top-[52%] xl:top-[42%] left-[8%] xl:left-[1%]`}>
            <p className="w-min text-right font-mono leading-5">ADAM GRANT</p>
            <img src="/images/wwa/ecosystem/adam.png" alt="Adam Grant" className="scale-80 xl:scale-100" />
          </div>

          <div className={`delay-500 ${opacity} top-[6%] xl:top-[6%] ml-[52%] xl:ml-[52%]`}>
            <img src="/images/wwa/ecosystem/bu-labs.png" className="w-[162px]" alt="BetterUp Labs logo" />
          </div>
          <div className={`delay-600  ${opacity} top-[31%] xl:top-[25%] ml-[66%] xl:ml-[76%]`}>
            <img src="/images/wwa/ecosystem/oxford.svg" alt="University of Oxford logo" />
          </div>
          <div className={`delay-700 ${opacity} top-[52%] xl:top-[41%] right-[5%] xl:-right-[4%]`}>
            <img src="/images/wwa/ecosystem/stanford.png" className="w-[137px]" alt="Stanford logo" />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="994"
            height="545"
            viewBox="0 0 994 545"
            fill="none"
            className="[&_text]:whitespace-pre [&_text]:font-mono max-h-[calc(100vh-400px)] xl:max-h-full"
          >
            <mask id="path-1-inside-1_5005_1322" fill="white">
              <path
                d="M515.279 84.7C742.238 84.7001 926.224 275.324 926.224 510.47V510.471H104.334V510.47C104.334 275.324 288.321 84.7 515.279 84.7Z"
                className={`transition-all duration-500 delay-400 ${opacity}`}
              />
            </mask>
            <path
              d="M515.279 84.7V82.7V82.7V84.7ZM926.224 510.471V512.471H928.224V510.471H926.224ZM104.334 510.471H102.334V512.471H104.334V510.471ZM515.279 84.7V86.7C741.067 86.7001 924.224 276.361 924.224 510.47H926.224H928.224C928.224 274.287 743.409 82.7001 515.279 82.7V84.7ZM926.224 510.47H924.224V510.471H926.224H928.224V510.47H926.224ZM926.224 510.471V508.471H104.334V510.471V512.471H926.224V510.471ZM104.334 510.471H106.334V510.47H104.334H102.334V510.471H104.334ZM104.334 510.47H106.334C106.334 276.361 289.491 86.7 515.279 86.7V84.7V82.7C287.15 82.7 102.334 274.287 102.334 510.47H104.334Z"
              fill="white"
              mask="url(#path-1-inside-1_5005_1322)"
              className={`transition-all duration-500 delay-400 ${opacity}`}
            />
            <mask id="path-3-inside-2_5005_1322" fill="white">
              <path
                d="M517.196 195.371C685.049 195.371 821.121 336.352 821.121 510.26V510.262H213.271V510.26C213.272 336.351 349.344 195.371 517.196 195.371Z"
                className={`transition-all duration-500 delay-300 ${opacity}`}
              />
            </mask>
            <path
              d="M517.196 195.371V193.371V193.371V195.371ZM821.121 510.26H823.121V510.26H821.121ZM821.121 510.262V512.262H823.121V510.262H821.121ZM213.271 510.262H211.271V512.262H213.271V510.262ZM213.271 510.26H211.271V510.26H213.271ZM517.196 195.371V197.371C683.878 197.371 819.121 337.389 819.121 510.26H821.121H823.121C823.121 335.314 686.22 193.371 517.196 193.371V195.371ZM821.121 510.26H819.121V510.262H821.121H823.121V510.26H821.121ZM821.121 510.262V508.262H213.271V510.262V512.262H821.121V510.262ZM213.271 510.262H215.271V510.26H213.271H211.271V510.262H213.271ZM213.271 510.26H215.271C215.272 337.389 350.514 197.371 517.196 197.371V195.371V193.371C348.173 193.371 211.272 335.314 211.271 510.26H213.271Z"
              fill="white"
              mask="url(#path-3-inside-2_5005_1322)"
              className={`transition-all duration-500 delay-200 ${opacity}`}
            />
            <path
              d="M516.416 317.067C619.351 317.067 702.951 403.329 704.269 510.261H328.564C329.882 403.329 413.481 317.067 516.416 317.067Z"
              fill="white"
              fillOpacity="0.06"
              className={`transition-all duration-500 delay-200 ${opacity}`}
            />
            <path
              d="M702.489 509.371C702.489 402.673 618.983 316.177 515.972 316.177C412.962 316.177 329.455 402.673 329.455 509.371"
              stroke="white"
              strokeWidth="2"
              className={`transition-all duration-500 delay-200 ${opacity}`}
            />
            <path
              d="M105.99 509.371H924.172"
              stroke="white"
              strokeWidth="2"
              className={`transition-all duration-500 delay-200 ${opacity}`}
            />
            <path
              d="M516.416 317.067C619.351 317.067 702.951 403.329 704.269 510.261H328.564C329.882 403.329 413.481 317.067 516.416 317.067Z"
              fill="white"
              fillOpacity="0.06"
              className={`transition-all duration-500 delay-200 ${opacity}`}
            />
            <path
              d="M702.489 509.371C702.489 402.673 618.983 316.177 515.972 316.177C412.962 316.177 329.455 402.673 329.455 509.371"
              stroke="white"
              strokeWidth="2"
              className={`transition-all duration-500 delay-200 ${opacity}`}
            />
            <path
              d="M105.99 509.371H924.172"
              stroke="white"
              strokeWidth="2"
              className={`transition-all duration-500 delay-200 ${opacity}`}
            />
            <text
              fill="white"
              xmlSpace="preserve"
              style={{fontFamily: 'var(--font-soehne-web)'}}
              fontSize="34.2938"
              letterSpacing="0em"
              className={`transition-all duration-500 delay-200 ${opacity}`}
            >
              <tspan x="457.754" y="388.739">Human</tspan>
              <tspan x="397.004" y="426.475">Transformation</tspan>
              <tspan x="451.793" y="464.21">Platform</tspan>
            </text>
            <text
              fill="white"
              xmlSpace="preserve"
              fontSize="20.5763"
              letterSpacing="0.04em"
              className={`transition-all duration-500 delay-400 ${opacity}`}
            >
              <tspan x="418.675" y="142.746">EVIDENCE-BASED</tspan>
              <tspan x="458.158" y="165.746">ECOSYSTEM</tspan>
            </text>
            <text
              fill="white"
              xmlSpace="preserve"
              fontSize="12.32"
              letterSpacing="0.04em"
              className={`transition-all duration-500 delay-400 ${opacity}`}
            >
              <tspan x="244.784" y="235.317">STRATEGIC</tspan>
              <tspan x="256.604" y="249.317">ADVISOR</tspan>
            </text>
            <text
              fill="white"
              xmlSpace="preserve"
              fontSize="12.32"
              letterSpacing="0.04em"
              className={`transition-all duration-500 delay-400 ${opacity}`}
            >
              <tspan x="155.332" y="337.342">CONFIGURATION</tspan>
              <tspan x="179.218" y="351.342">PARTNER</tspan>
            </text>
            <text
              fill="white"
              xmlSpace="preserve"
              fontSize="12.32"
              letterSpacing="0.04em"
              className={`transition-all duration-500 delay-400 ${opacity}`}
            >
              <tspan x="154.553" y="439.367">IQ</tspan>
              <tspan x="119.094" y="453.367">PSYCHOLOGIST</tspan>
            </text>
            <text
              fill="white"
              xmlSpace="preserve"
              fontSize="12.32"
              letterSpacing="0.04em"
              className={`transition-all duration-500 delay-400 ${opacity}`}
            >
              <tspan x="695.308" y="237.627">CLIENT DELIVERY </tspan>
              <tspan x="723.134" y="251.627">DIRECTOR</tspan>
            </text>
            <text
              fill="white"
              xmlSpace="preserve"
              fontSize="12.32"
              letterSpacing="0.04em"
              className={`transition-all duration-500 delay-400 ${opacity}`}
            >
              <tspan x="799.454" y="331.497">DATA &amp;</tspan>
              <tspan x="787.634" y="345.497">ANALYTICS</tspan>
              <tspan x="799.454" y="359.497">PARTNER</tspan>
            </text>
            <text
              fill="white"
              xmlSpace="preserve"
              fontSize="12.32"
              letterSpacing="0.04em"
              className={`transition-all duration-500 delay-400 ${opacity}`}
            >
              <tspan x="838.34" y="432.367">CHANGE</tspan>
              <tspan x="826.273" y="446.367">MANAGEMENT </tspan>
              <tspan x="838.34" y="460.367">PARTNER</tspan>
            </text>
            <text
              fill="white"
              xmlSpace="preserve"
              fontSize="20.5763"
              letterSpacing="0.04em"
              className={`transition-all duration-500 delay-300 ${opacity}`}
            >
              <tspan x="392.354" y="263.354">STRATEGIC ADVISORY</tspan>
              <tspan x="438.417" y="286.354">AND SERVICES</tspan>
            </text>
            <defs>
              <pattern id="pattern0_5005_1322" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_5005_1322" transform="matrix(0.00687831 0 0 0.00686958 -0.197368 -0.0131579)"/>
              </pattern>
              <pattern id="pattern1_5005_1322" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image1_5005_1322" transform="scale(0.000732064 0.000488281)"/>
              </pattern>
              <pattern id="pattern2_5005_1322" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image2_5005_1322" transform="scale(0.00401606)"/>
              </pattern>
              <pattern id="pattern3_5005_1322" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image3_5005_1322" transform="matrix(0.00212395 0 0 0.00502197 0.0567399 0.259259)"/>
              </pattern>
              <pattern id="pattern4_5005_1322" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image4_5005_1322" transform="scale(0.000625 0.00180832)"/>
              </pattern>
              <pattern id="pattern5_5005_1322" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image5_5005_1322" transform="matrix(0.00126582 0 0 0.00187266 -0.563291 0)"/>
              </pattern>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
