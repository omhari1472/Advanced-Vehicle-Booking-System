import { useMemo } from "react";
import PropTypes from "prop-types";

const Bike1 = ({ className = "", cBR, propPadding, propMarginLeft }) => {
  const bikeStyle = useMemo(() => {
    return {
      padding: propPadding,
      marginLeft: propMarginLeft,
    };
  }, [propPadding, propMarginLeft]);

  return (
    <div
      className={`w-[17.188rem] rounded-xl bg-white box-border flex flex-col items-center justify-start py-[1.375rem] px-[0.812rem] gap-[1rem] ml-[-7.075rem] text-left text-[1rem] text-black font-inter border-[1px] border-solid border-lightgray-200 mq450:pt-[1.375rem] mq450:pb-[1.25rem] mq450:box-border ${className}`}
      style={bikeStyle}
    >
      <div className="self-stretch h-[8.569rem] relative" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.456rem] gap-[0.625rem]">
          <div className="relative capitalize font-semibold inline-block min-w-[5.25rem]">
            {cBR}
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.006rem] gap-[0.312rem] text-[0.625rem] text-dimgray-100">
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
              <div className="flex flex-col items-start justify-start gap-[0.55rem]">
                <div className="relative capitalize inline-block min-w-[2.25rem]">
                  seats:2
                </div>
                <div className="relative capitalize inline-block min-w-[3.125rem]">
                  fuel:petrol
                </div>
              </div>
              <div className="flex flex-col items-end justify-start gap-[0.55rem]">
                <div className="relative capitalize inline-block min-w-[5.125rem]">
                  horsepower: 500
                </div>
                <div className="relative capitalize inline-block min-w-[3.75rem]">
                  engine:3000
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
              <div className="flex flex-col items-start justify-start gap-[0.55rem]">
                <div className="relative capitalize inline-block min-w-[4.875rem]">
                  Front Brake:Disc
                </div>
                <div className="relative capitalize inline-block min-w-[5.438rem]">
                  Gear Box:6-Speed
                </div>
              </div>
              <div className="flex flex-col items-end justify-start gap-[0.55rem]">
                <div className="relative capitalize inline-block min-w-[4.688rem]">
                  Stroke:58.7 mm
                </div>
                <div className="relative capitalize inline-block min-w-[7.188rem]">
                  Overall Mileage:40 kmpl
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-end justify-between gap-[1.25rem] text-[0.75rem] text-gray-800">
          <div className="flex flex-col items-center justify-start gap-[0.331rem]">
            <div className="relative capitalize inline-block min-w-[3.563rem]">
              per hours
            </div>
            <b className="relative text-[1.125rem] capitalize inline-block text-black min-w-[2.25rem] whitespace-nowrap">
              $56
            </b>
          </div>
          <div className="shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] bg-black flex flex-row items-center justify-center pt-[0.55rem] px-[0.875rem] pb-[0.556rem] whitespace-nowrap text-[0.606rem] text-white">
            <div className="relative capitalize font-semibold inline-block min-w-[2.813rem]">
              rent bike
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Bike1.propTypes = {
  className: PropTypes.string,
  cBR: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMarginLeft: PropTypes.any,
};

export default Bike1;
