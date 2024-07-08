import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "", frameDivPadding }) => {
  const frameHeaderStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[7.793rem] pr-[1.25rem] pl-[1.625rem] box-border max-w-full text-left text-[1.063rem] text-gray-2200 font-inter ${className}`}
      style={frameHeaderStyle}
    >
      <div className="w-[72.844rem] flex flex-row items-start justify-start gap-[0.25rem] max-w-full">
        <div className="flex-[0.9506] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border max-w-full text-[1.638rem]">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[5.188rem]">
            Drivee
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
          <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4rem]">
            hosting
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[1.687rem] pl-[0rem]">
          <img
            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-row items-start justify-start gap-[1.968rem]">
            <div className="flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem]">
              <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[5.75rem] whitespace-nowrap">
                Contact us
              </a>
            </div>
            <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4.25rem]">
              Account
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <img
            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[2.125rem] h-[2.125rem] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-11@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivPadding: PropTypes.any,
};

export default FrameComponent4;
