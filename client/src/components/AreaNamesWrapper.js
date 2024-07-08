import PropTypes from "prop-types";

const AreaNamesWrapper = ({ className = "", areaMarkers, gazipur }) => {
  return (
    <div
      className={`h-[15.519rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.512rem] box-border gap-[1.643rem] text-left text-[1.575rem] text-gray-2300 font-inter ${className}`}
    >
      <div className="w-[12.006rem] h-[12.006rem] relative rounded-[50%] shrink-0 flex items-center justify-center">
        <img
          className="w-full h-full shrink-0 object-contain absolute left-[0rem] top-[1.625rem] [transform:scale(1.372)]"
          loading="lazy"
          alt=""
          src={areaMarkers}
        />
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] px-[3.062rem]">
        <div className="relative capitalize font-medium inline-block min-w-[5.875rem] shrink-0 mq450:text-[1.25rem]">
          {gazipur}
        </div>
      </div>
    </div>
  );
};

AreaNamesWrapper.propTypes = {
  className: PropTypes.string,
  areaMarkers: PropTypes.string,
  gazipur: PropTypes.string,
};

export default AreaNamesWrapper;
