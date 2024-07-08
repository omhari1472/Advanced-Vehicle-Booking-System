import PickupIcon from "./PickupIcon";
import BMWDescription from "./BMWDescription";
import PropTypes from "prop-types";

const BikeImage = ({ className = "" }) => {
  return (
    <div
      className={`w-[72.5rem] flex flex-col items-start justify-start gap-[4.375rem] max-w-full text-left text-[1.5rem] text-black font-inter mq750:gap-[1.063rem] mq1225:gap-[2.188rem] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.312rem] max-w-full text-[0.75rem] text-gray-500 mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.462rem] min-w-[27.125rem] max-w-full mq750:min-w-full">
          <div className="self-stretch h-[30.106rem] relative">
            <img
              className="absolute top-[0rem] left-[0rem] rounded-[12.31px] w-full h-full object-cover"
              alt=""
              src="/vehicle-image@2x.png"
            />
            <img
              className="absolute top-[13.619rem] left-[37.5rem] w-[2.819rem] h-[2.819rem] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/group-1000004070@2x.png"
            />
            <img
              className="absolute top-[13.619rem] left-[1.344rem] w-[2.819rem] h-[2.819rem] z-[1]"
              loading="lazy"
              alt=""
              src="/group-1000004071.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.462rem] mq750:flex-wrap">
            <img
              className="self-stretch flex-1 relative rounded-[6.16px] max-w-full overflow-hidden max-h-full object-cover min-w-[9.688rem] min-h-[7.75rem]"
              loading="lazy"
              alt=""
              src="/rectangle-828@2x.png"
            />
            <img
              className="self-stretch flex-1 relative rounded-[6.16px] max-w-full overflow-hidden max-h-full object-cover min-w-[9.688rem] min-h-[7.75rem]"
              loading="lazy"
              alt=""
              src="/rectangle-830@2x.png"
            />
            <img
              className="self-stretch flex-1 relative rounded-[6.16px] max-w-full overflow-hidden max-h-full object-cover min-w-[9.688rem] min-h-[7.75rem]"
              loading="lazy"
              alt=""
              src="/rectangle-829@2x.png"
            />
          </div>
        </div>
        <div className="w-[29.5rem] shadow-[0px_188.9px_52.53px_rgba(209,_209,_209,_0),_0px_121.2px_48.49px_rgba(209,_209,_209,_0.01),_0px_67.7px_40.41px_rgba(209,_209,_209,_0.05),_0px_30.3px_30.31px_rgba(209,_209,_209,_0.09),_0px_7.1px_16.16px_rgba(209,_209,_209,_0.1),_0px_0px_0px_rgba(209,_209,_209,_0.1)] rounded-[12.12px] bg-whitesmoke-700 box-border flex flex-col items-start justify-start pt-[1.937rem] px-[1.75rem] pb-[2rem] relative gap-[1.806rem] min-w-[29.501rem] max-w-full border-[1px] border-solid border-gainsboro-500 mq750:pt-[1.25rem] mq750:pb-[1.313rem] mq750:box-border mq750:min-w-full mq1050:flex-1">
          <div className="absolute !m-[0] top-[14.713rem] left-[3.031rem] text-[0.756rem] capitalize font-outfit inline-block min-w-[4.938rem]">
            DD/MM/yYYY
          </div>
          <div className="w-[3.313rem] absolute !m-[0] top-[14.713rem] right-[-9.106rem] capitalize inline-block">
            12.30 pM
          </div>
          <div className="w-[3.313rem] absolute !m-[0] right-[-9.106rem] bottom-[14.431rem] capitalize inline-block">
            12.30 pM
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.268rem] text-[1rem] text-black">
            <PickupIcon
              locationIcon="/vector-2.svg"
              group1000004068="/group-1000004068.svg"
              rectangle743="/rectangle-743.svg"
            />
            <BMWDescription
              pickUp="Pick-up"
              rectangle745="/rectangle-745.svg"
            />
            <BMWDescription
              pickUp="Drop-off"
              rectangle745="/rectangle-745-1.svg"
              propGap="0.637rem"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.481rem] text-[1rem] text-black">
            <div className="relative capitalize font-semibold inline-block min-w-[4.188rem]">
              Duration
            </div>
            <div className="self-stretch flex flex-row items-center justify-between py-[0rem] pr-[0.062rem] pl-[0rem] gap-[1.25rem] text-[0.756rem] text-dimgray-200 mq450:flex-wrap">
              <div className="relative capitalize font-medium inline-block min-w-[3.875rem]">
                7.75 hours
              </div>
              <button className="cursor-pointer [border:none] pt-[0.612rem] px-[1.5rem] pb-[0.618rem] bg-white shadow-[0px_18.2px_5.05px_rgba(145,_136,_136,_0),_0px_12.1px_5.05px_rgba(145,_136,_136,_0.01),_0px_7.1px_4.04px_rgba(145,_136,_136,_0.05),_0px_3px_3.03px_rgba(145,_136,_136,_0.09),_0px_1px_2.02px_rgba(145,_136,_136,_0.1),_0px_0px_0px_rgba(145,_136,_136,_0.1)] rounded-[2.02px] flex flex-row items-start justify-start hover:bg-gainsboro-100">
                <div className="relative text-[1.081rem] capitalize font-semibold font-inter text-darkslategray-900 text-left inline-block min-w-[3.75rem] whitespace-nowrap">
                  $36.65
                </div>
              </button>
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[1.125rem] px-[1.25rem] pb-[1.131rem] bg-gray-2100 w-[25.075rem] rounded-2xs-1 flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full hover:bg-darkslategray-700">
            <b className="relative text-[0.963rem] uppercase inline-block font-inter text-white text-left min-w-[5.5rem]">
              book now
            </b>
          </button>
        </div>
      </div>
      <div className="w-[35.563rem] flex flex-row items-start justify-start py-[0rem] px-[0.625rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] max-w-full">
          <b className="relative capitalize z-[1] mq450:text-[1.188rem]">
            BMW M2 2020
          </b>
          <div className="self-stretch relative text-[1.125rem] leading-[170%] capitalize text-darkslategray-1000 z-[1]">
            The BMW M2 is the high-performance version of the 2 Series 2-door
            coupé. The first generation of the M2 is the F87 coupé and is
            powered by turbocharged.
          </div>
        </div>
      </div>
      <div className="w-[22.688rem] flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[49.013rem] w-[64.813rem] absolute !m-[0] top-[-16rem] right-[-47rem]"
            loading="lazy"
            alt=""
            src="/group.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] max-w-full z-[1]">
            <div className="relative capitalize font-semibold mq450:text-[1.188rem]">
              Specifications
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-[1.125rem] text-dimgray-100">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] gap-[1.5rem]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="relative capitalize font-medium">
                      Ground Clearance
                    </div>
                    <div className="relative capitalize font-medium inline-block min-w-[4.25rem]">
                      170 mm
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="relative capitalize font-medium inline-block min-w-[7.938rem]">
                      Engine Display
                    </div>
                    <div className="relative capitalize font-medium inline-block min-w-[3.75rem]">
                      155 cc
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="relative capitalize font-medium inline-block min-w-[5.188rem]">
                      Fuel Type
                    </div>
                    <div className="relative capitalize font-medium inline-block min-w-[3.188rem]">
                      Petrol
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="relative capitalize font-medium inline-block min-w-[6.938rem]">
                      Wheels Type
                    </div>
                    <div className="relative capitalize font-medium inline-block min-w-[2.688rem]">
                      Alloy
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="relative capitalize font-medium inline-block min-w-[7.75rem]">
                      Emission Type
                    </div>
                    <div className="relative capitalize font-medium inline-block min-w-[4.375rem]">
                      BS6-2.0
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="relative capitalize font-medium inline-block min-w-[4.25rem]">
                      Mileage
                    </div>
                    <div className="relative capitalize font-medium inline-block min-w-[4.5rem]">
                      40 kmpl
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="relative capitalize font-medium inline-block min-w-[4.938rem]">
                      Gear Box
                    </div>
                    <div className="relative capitalize font-medium inline-block min-w-[4.688rem]">
                      6-Speed
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="relative capitalize font-medium inline-block min-w-[2.25rem]">
                      ABS
                    </div>
                    <div className="relative capitalize font-medium inline-block min-w-[7.188rem]">
                      Dual Channel
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                      <div className="relative capitalize font-medium inline-block min-w-[5.375rem]">
                        Tyre Type
                      </div>
                      <div className="relative capitalize font-medium inline-block min-w-[4.875rem]">
                        Tubeless
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BikeImage.propTypes = {
  className: PropTypes.string,
};

export default BikeImage;
