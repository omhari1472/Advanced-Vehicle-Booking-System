import { useMemo } from "react";
import PropTypes from "prop-types";

const TestimonialItems = ({
  className = "",
  andrewD,
  userIcons,
  star7,
  star8,
  loveThisCarIWishICouldRen,
  propBoxShadow,
  propPadding,
}) => {
  const testimonialItemsStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      padding: propPadding,
    };
  }, [propBoxShadow, propPadding]);

  return (
    <div
      className={`w-[18.25rem] shadow-[0px_85px_24.14px_rgba(196,_196,_196,_0),_0px_54.6px_22.04px_rgba(196,_196,_196,_0.01),_0px_30.4px_18.89px_rgba(196,_196,_196,_0.05),_0px_13.6px_13.65px_rgba(196,_196,_196,_0.09),_0px_3.1px_7.35px_rgba(196,_196,_196,_0.1),_0px_0px_0px_rgba(196,_196,_196,_0.1)] rounded-2xs-5 bg-gray-100 box-border flex flex-col items-start justify-start py-[1.25rem] pr-[1.187rem] pl-[1.312rem] gap-[1.05rem] text-center text-[1.313rem] text-black font-inter border-[0.5px] border-solid border-gainsboro-300 ${className}`}
      style={testimonialItemsStyle}
    >
      <div className="w-[14.125rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[0.325rem]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
          <div className="relative leading-[139.02%] capitalize font-semibold inline-block min-w-[6.25rem] mq450:text-[1.063rem] mq450:leading-[1.438rem]">
            {andrewD}
          </div>
          <img
            className="h-[3.413rem] w-[3.413rem] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src={userIcons}
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[0.525rem]">
          <img
            className="h-[1.313rem] w-[1.313rem] relative rounded-12xs min-h-[1.313rem]"
            loading="lazy"
            alt=""
            src="/star-4.svg"
          />
          <img
            className="h-[1.313rem] w-[1.313rem] relative rounded-12xs min-h-[1.313rem]"
            alt=""
            src="/star-5.svg"
          />
          <img
            className="h-[1.313rem] w-[1.313rem] relative rounded-12xs min-h-[1.313rem]"
            alt=""
            src="/star-6.svg"
          />
          <img
            className="h-[1.313rem] w-[1.313rem] relative rounded-12xs min-h-[1.313rem]"
            alt=""
            src={star7}
          />
          <img
            className="h-[1.313rem] w-[1.313rem] relative rounded-12xs min-h-[1.313rem]"
            alt=""
            src={star8}
          />
        </div>
      </div>
      <div className="self-stretch h-[3.475rem] relative text-[1.05rem] leading-[139.02%] capitalize text-darkslategray-100 text-left inline-block shrink-0">
        {loveThisCarIWishICouldRen}
      </div>
    </div>
  );
};

TestimonialItems.propTypes = {
  className: PropTypes.string,
  andrewD: PropTypes.string,
  userIcons: PropTypes.string,
  star7: PropTypes.string,
  star8: PropTypes.string,
  loveThisCarIWishICouldRen: PropTypes.string,

  /** Style props */
  propBoxShadow: PropTypes.any,
  propPadding: PropTypes.any,
};

export default TestimonialItems;
