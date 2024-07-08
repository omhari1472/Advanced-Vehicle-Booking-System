import { useMemo } from "react";
import PropTypes from "prop-types";

const StepTwo = ({
  className = "",
  uploadIcon,
  propAlignSelf,
  propPadding,
  propWidth,
}) => {
  const stepTwoStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.125rem] box-border max-w-full text-left text-[0.919rem] text-darkslategray-400 font-roboto ${className}`}
      style={stepTwoStyle}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[2.45rem] max-w-full mq450:flex-wrap mq450:gap-[1.25rem]">
        <div className="h-[6.488rem] flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border">
          <div className="w-[0.7rem] flex-1 relative max-h-full z-[1] flex items-center justify-center">
            <img
              className="w-full flex-1 z-[1] object-contain absolute left-[0rem] top-[-0.187rem] h-full [transform:scale(1.056)]"
              loading="lazy"
              alt=""
              src={uploadIcon}
            />
          </div>
        </div>
        <div className="h-[4.594rem] flex-1 relative leading-[1.509rem] inline-block min-w-[14.813rem] max-w-full z-[1]">
          On the sign-up form, you'll tell us about you and your car. Give your
          car a name, and continue to the next step.
        </div>
      </div>
    </div>
  );
};

StepTwo.propTypes = {
  className: PropTypes.string,
  uploadIcon: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default StepTwo;
