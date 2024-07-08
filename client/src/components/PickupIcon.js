import { useMemo } from "react";
import PropTypes from "prop-types";

const PickupIcon = ({
  className = "",
  locationIcon,
  group1000004068,
  rectangle743,
  propGap,
}) => {
  const pickupIconStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.631rem] text-left text-[1rem] text-black font-inter ${className}`}
      style={pickupIconStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.631rem] mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[3.031rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[1.013rem] h-[1.325rem] relative"
            alt=""
            src={locationIcon}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[3.1rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[12.938rem]">
          <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4.125rem]">
            Location
          </a>
        </div>
        <img
          className="h-[3.725rem] w-[3.725rem] relative"
          loading="lazy"
          alt=""
          src={group1000004068}
        />
      </div>
      <div className="self-stretch h-[3.156rem] relative text-[0.756rem] text-gray-500 font-outfit">
        <img
          className="absolute top-[0rem] left-[0rem] rounded-[4.04px] w-full h-full z-[1]"
          loading="lazy"
          alt=""
          src={rectangle743}
        />
        <div className="absolute top-[1.138rem] left-[1.513rem] flex flex-row items-start justify-start">
          <div className="absolute !m-[0] top-[0rem] right-[-9.437rem] capitalize">
            23/c AR Complex,Shahi Eidgah,sylhet
          </div>
          <div className="relative text-[0.75rem] capitalize font-inter inline-block min-w-[3.063rem] z-[2]">
            location
          </div>
        </div>
      </div>
    </div>
  );
};

PickupIcon.propTypes = {
  className: PropTypes.string,
  locationIcon: PropTypes.string,
  group1000004068: PropTypes.string,
  rectangle743: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default PickupIcon;
