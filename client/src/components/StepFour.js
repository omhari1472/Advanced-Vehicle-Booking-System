import { useMemo } from "react";
import PropTypes from "prop-types";

const StepFour = ({
  className = "",
  connectIcon,
  ifYouHaveMultipleVehicles,
  propPadding,
}) => {
  const stepFourStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.462rem] pr-[0.937rem] pl-[1.125rem] box-border max-w-full text-left text-[0.919rem] text-darkslategray-400 font-roboto ${className}`}
      style={stepFourStyle}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[3.218rem] max-w-full shrink-0 mq750:flex-wrap mq750:gap-[1.625rem]">
        <div className="h-[7.413rem] w-[0rem] flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border">
          <img
            className="w-[0rem] flex-1 relative max-h-full object-contain shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src={connectIcon}
          />
        </div>
        <div className="flex-1 relative leading-[1.509rem] inline-block min-w-[18.563rem] shrink-0 max-w-full z-[1]">
          {ifYouHaveMultipleVehicles}
        </div>
      </div>
    </div>
  );
};

StepFour.propTypes = {
  className: PropTypes.string,
  connectIcon: PropTypes.string,
  ifYouHaveMultipleVehicles: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default StepFour;
