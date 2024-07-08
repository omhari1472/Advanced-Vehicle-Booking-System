import { useMemo } from "react";
import PropTypes from "prop-types";

const LocationSection = ({ className = "", location1, propGap }) => {
  const locationSectionStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[12.875rem] text-left text-[1rem] text-gray-1000 font-inter mq1125:flex-1 ${className}`}
      style={locationSectionStyle}
    >
      <div className="relative capitalize font-semibold inline-block min-w-[4.188rem]">
        {location1}
      </div>
      <div className="self-stretch rounded-8xs-2 bg-white flex flex-row items-center justify-between py-[1rem] px-[0.875rem] gap-[1.25rem] text-[0.875rem] text-slategray border-[0.5px] border-solid border-gainsboro-1000">
        <div className="flex flex-row items-center justify-start">
          <div className="relative capitalize inline-block min-w-[6.438rem]">
            select location
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.375rem]">
          <img
            className="w-[0.5rem] h-[0.25rem] relative"
            alt=""
            src="/location-drop-down-icon.svg"
          />
          <img
            className="w-[0.5rem] h-[0.25rem] relative object-contain"
            alt=""
            src="/location-drop-down-icon-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

LocationSection.propTypes = {
  className: PropTypes.string,
  location1: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default LocationSection;
