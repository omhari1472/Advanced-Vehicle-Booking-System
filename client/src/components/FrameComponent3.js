import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "", propWidth, propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className={`w-[31.75rem] flex flex-row items-start justify-start py-[0rem] px-[0.875rem] box-border max-w-full text-left text-[1.05rem] text-gray-2300 font-inter ${className}`}
      style={frameDivStyle}
    >
      <div className="flex-1 shadow-[72.4px_320.2px_91.33px_rgba(0,_0,_0,_0),_46.2px_204.7px_83.98px_rgba(0,_0,_0,_0.01),_26.2px_115.5px_70.33px_rgba(0,_0,_0,_0.05),_11.5px_51.4px_52.49px_rgba(0,_0,_0,_0.09),_3.1px_12.6px_28.34px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] rounded-smi-6 bg-white flex flex-col items-start justify-start py-[2.25rem] pr-[1.25rem] pl-[4.125rem] box-border gap-[0.393rem] max-w-full z-[1] mq450:pl-[1.25rem] mq450:box-border">
        <div className="w-[30rem] h-[8.5rem] relative shadow-[72.4px_320.2px_91.33px_rgba(0,_0,_0,_0),_46.2px_204.7px_83.98px_rgba(0,_0,_0,_0.01),_26.2px_115.5px_70.33px_rgba(0,_0,_0,_0.05),_11.5px_51.4px_52.49px_rgba(0,_0,_0,_0.09),_3.1px_12.6px_28.34px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] rounded-smi-6 bg-white hidden max-w-full" />
        <div className="relative leading-[1.05rem] font-medium z-[2]">
          <p className="m-0">Start earning</p>
        </div>
        <div className="w-[21.781rem] relative text-[0.788rem] leading-[1.279rem] font-roboto text-dimgray-1100 inline-block max-w-full z-[2]">
          As soon as you enable bookings, guests can start taking trips in your
          car—and you can start earning money.
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FrameComponent3;
