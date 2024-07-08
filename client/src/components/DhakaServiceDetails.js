import AreaNamesWrapper from "./AreaNamesWrapper";
import PropTypes from "prop-types";

const DhakaServiceDetails = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[3.043rem] max-w-full text-left text-[3.15rem] text-gray-2300 font-inter mq750:gap-[1.5rem] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[9.375rem] mq450:pl-[1.25rem] mq450:box-border mq1050:pl-[4.688rem] mq1050:box-border">
        <div className="relative capitalize font-semibold mq450:text-[1.875rem] mq1050:text-[2.5rem]">
          local service in dhaka area
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[2.656rem] max-w-full text-[1.575rem] mq750:gap-[1.313rem]">
        <div className="flex flex-col items-start justify-start pt-[5.512rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[0.819rem] h-[1.638rem] relative"
            loading="lazy"
            alt=""
            src="/vector-31.svg"
          />
        </div>
        <div className="flex-1 flex flex-row items-start justify-between min-w-[50.938rem] max-w-full gap-[1.25rem] lg:flex-wrap mq1050:min-w-full">
          <AreaNamesWrapper
            areaMarkers="/ellipse-91@2x.png"
            gazipur="gazipur"
          />
          <div className="h-[15.519rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.512rem] box-border gap-[1.643rem]">
            <div className="w-[12.006rem] h-[12.006rem] relative rounded-[50%] shrink-0 flex items-center justify-center">
              <img
                className="w-full h-full shrink-0 object-contain absolute left-[0rem] top-[3.688rem] [transform:scale(1.76)]"
                loading="lazy"
                alt=""
                src="/ellipse-61@2x.png"
              />
            </div>
            <div className="relative capitalize font-medium shrink-0 mq450:text-[1.25rem]">
              mohammud pur
            </div>
          </div>
          <AreaNamesWrapper
            areaMarkers="/ellipse-81@2x.png"
            gazipur="gulshan"
          />
          <AreaNamesWrapper
            areaMarkers="/ellipse-71@2x.png"
            gazipur="dhanmondi"
          />
          <AreaNamesWrapper
            areaMarkers="/ellipse-7-11@2x.png"
            gazipur="mohakali"
          />
        </div>
      </div>
    </div>
  );
};

DhakaServiceDetails.propTypes = {
  className: PropTypes.string,
};

export default DhakaServiceDetails;
