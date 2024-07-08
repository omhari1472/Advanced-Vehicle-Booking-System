import { useMemo } from "react";
import PropTypes from "prop-types";

const BMWDescription = ({ className = "", pickUp, rectangle745, propGap }) => {
  const bMWDescriptionStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.631rem] text-left text-[1rem] text-black font-inter ${className}`}
      style={bMWDescriptionStyle}
    >
      <div className="flex flex-row items-start justify-start gap-[0.631rem]">
        <img
          className="h-[1.513rem] w-[1.513rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          loading="lazy"
          alt=""
          src="/uilcalender.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[0.162rem] px-[0rem] pb-[0rem]">
          <div className="relative capitalize font-medium inline-block min-w-[3.813rem]">
            {pickUp}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.943rem] text-[0.75rem] text-gray-500 mq450:flex-wrap">
        <div className="h-[3.156rem] flex-1 relative min-w-[10.25rem]">
          <img
            className="absolute top-[0rem] left-[0rem] rounded-[4.04px] w-full h-full z-[1]"
            alt=""
            src="/rectangle-744.svg"
          />
          <div className="absolute top-[1.138rem] left-[1.294rem] capitalize inline-block min-w-[4.938rem] z-[2]">
            DD/MM/yYYY
          </div>
        </div>
        <img
          className="self-stretch w-[9.169rem] relative rounded-[4.04px] max-h-full min-h-[3.188rem]"
          alt=""
          src={rectangle745}
        />
      </div>
    </div>
  );
};

BMWDescription.propTypes = {
  className: PropTypes.string,
  pickUp: PropTypes.string,
  rectangle745: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default BMWDescription;
