import PropTypes from "prop-types";

const LocationCircles = ({ className = "", locationCircles, gazipur }) => {
  return (
    <div
      className={`h-[14.3rem] flex flex-col items-start justify-start gap-[1.512rem] text-left text-[1.45rem] text-gray-1600 font-inter ${className}`}
    >
      <div className="w-[11.038rem] h-[11.038rem] relative rounded-[50%] flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[0rem] top-[1.5rem] [transform:scale(1.372)]"
          loading="lazy"
          alt=""
          src={locationCircles}
        />
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[2.812rem] pl-[2.75rem]">
        <div className="relative capitalize font-medium inline-block min-w-[5.438rem] mq450:text-[1.188rem]">
          {gazipur}
        </div>
      </div>
    </div>
  );
};

LocationCircles.propTypes = {
  className: PropTypes.string,
  locationCircles: PropTypes.string,
  gazipur: PropTypes.string,
};

export default LocationCircles;
