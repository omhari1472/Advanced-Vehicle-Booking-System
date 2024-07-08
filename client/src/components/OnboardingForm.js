import { useMemo } from "react";
import PropTypes from "prop-types";

const OnboardingForm = ({ className = "", propPadding }) => {
  const onboardingFormStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-[0.425rem] px-[0rem] pb-[0rem] box-border min-w-[22.813rem] max-w-full text-left text-[0.919rem] text-dimgray-500 font-inter mq750:min-w-full ${className}`}
      style={onboardingFormStyle}
    >
      <div className="self-stretch h-[44.35rem] shadow-[118.6px_170.1px_57.73px_rgba(168,_168,_168,_0),_75.6px_109.2px_53.54px_rgba(168,_168,_168,_0.01),_43px_60.9px_45.14px_rgba(168,_168,_168,_0.05),_18.9px_27.3px_33.59px_rgba(168,_168,_168,_0.09),_5.2px_6.3px_17.85px_rgba(168,_168,_168,_0.1),_0px_0px_0px_rgba(168,_168,_168,_0.1)] rounded-smi-6 bg-white flex flex-col items-end justify-start pt-[2.362rem] px-[3.875rem] pb-[2.087rem] box-border gap-[2.456rem] z-[1] mq750:gap-[1.25rem] mq750:pt-[1.563rem] mq750:px-[1.938rem] mq750:pb-[1.375rem] mq750:box-border">
        <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0.062rem] pb-[0.493rem] text-[1.313rem] text-gray-2300">
          <div className="w-[18.763rem] flex flex-col items-start justify-start gap-[0.656rem]">
            <div className="relative leading-[1.063rem] font-semibold inline-block min-w-[7.375rem] whitespace-nowrap mq450:text-[1.063rem] mq450:leading-[0.813rem]">
              Get Started
            </div>
            <div className="self-stretch relative text-[0.919rem] capitalize text-darkslategray-1100">
              Submit the form to start
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.431rem] gap-[1.968rem] mq450:gap-[1rem]">
          <div className="relative leading-[1.313rem] font-semibold inline-block min-w-[5.438rem]">
            First name *
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/vector-6.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.431rem] gap-[1.968rem] mq450:gap-[1rem]">
          <div className="relative leading-[1.313rem] font-semibold inline-block min-w-[5.375rem]">
            Last name *
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/vector-6.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.437rem] gap-[1.968rem] mq450:gap-[1rem]">
          <div className="relative leading-[1.313rem] font-semibold inline-block min-w-[3.125rem]">
            Email *
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/vector-6.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.437rem] gap-[0.656rem]">
          <div className="relative leading-[1.313rem] font-semibold inline-block min-w-[7rem]">
            Phone number*
          </div>
          <div className="self-stretch h-[1.369rem] relative text-[0.656rem] text-black">
            <img
              className="absolute top-[1.306rem] left-[0rem] w-[27.263rem] h-[0.063rem]"
              loading="lazy"
              alt=""
              src="/vector-6-3.svg"
            />
            <div className="absolute top-[0rem] left-[0.194rem] leading-[1.313rem] inline-block min-w-[4.688rem]">
              XXX-XXX-XXXX
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.968rem] mq450:gap-[1rem]">
          <div className="relative leading-[1.313rem] font-semibold inline-block min-w-[4rem]">
            Zip Cod*
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-6.svg"
          />
        </div>
        <img
          className="w-[8rem] flex-1 relative max-h-full"
          loading="lazy"
          alt=""
          src="/group-1000004054.svg"
        />
      </div>
    </div>
  );
};

OnboardingForm.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default OnboardingForm;
