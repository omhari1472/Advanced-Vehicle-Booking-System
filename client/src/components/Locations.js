import LocationCircles from "./LocationCircles";
import PropTypes from "prop-types";

const Locations = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[2.375rem] pb-[8.762rem] box-border max-w-full text-center text-[3rem] text-gray-1600 font-inter mq800:pb-[5.688rem] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[4.062rem] max-w-full mq450:gap-[1rem] mq800:gap-[2rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem]">
          <h1 className="m-0 relative text-inherit capitalize font-bold font-inherit z-[1] mq450:text-[1.813rem] mq800:text-[2.375rem]">
            local service we provide
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[3.1rem] max-w-full text-left text-[1.45rem] mq800:gap-[1.563rem]">
          <div className="flex-1 flex flex-row items-start justify-center gap-[3.468rem] min-w-[51.25rem] max-w-full mq800:gap-[1.75rem] mq1125:flex-wrap mq1125:min-w-full">
            <div className="flex flex-col items-start justify-start pt-[5.5rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[3.281rem] h-[3.281rem] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/chevronleft.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-between min-w-[46.813rem] max-w-full gap-[1.25rem] z-[1] mq1125:flex-wrap mq1125:min-w-full">
              <LocationCircles
                locationCircles="/ellipse-9@2x.png"
                gazipur="gazipur"
              />
              <div className="h-[14.3rem] flex flex-col items-start justify-start gap-[1.512rem]">
                <div className="w-[11.038rem] h-[11.038rem] relative rounded-[50%] flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain absolute left-[0rem] top-[3.438rem] [transform:scale(1.76)]"
                    loading="lazy"
                    alt=""
                    src="/ellipse-6@2x.png"
                  />
                </div>
                <div className="relative capitalize font-medium mq450:text-[1.188rem]">
                  mohammud pur
                </div>
              </div>
              <LocationCircles
                locationCircles="/ellipse-8@2x.png"
                gazipur="gulshan"
              />
              <LocationCircles
                locationCircles="/ellipse-7@2x.png"
                gazipur="dhanmondi"
              />
              <LocationCircles
                locationCircles="/ellipse-7-1@2x.png"
                gazipur="mohakali"
              />
            </div>
          </div>
          <div className="h-[8.781rem] flex flex-col items-start justify-start">
            <img
              className="w-[3.281rem] h-[3.281rem] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Locations.propTypes = {
  className: PropTypes.string,
};

export default Locations;
