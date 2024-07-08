import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[2.625rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full text-left text-[1.5rem] text-black font-inter mq750:pb-[1.688rem] mq750:box-border ${className}`}
    >
      <div className="w-[71.813rem] flex flex-row items-start justify-start relative max-w-full">
        <div className="w-[20.688rem] !m-[0] absolute top-[-3.312rem] left-[-0.312rem] flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="relative capitalize font-semibold mq450:text-[1.188rem]">
            Specifications
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-[1.125rem] text-dimgray-100">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
              <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] gap-[1.5rem]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[2.813rem]">
                    Body
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[3.438rem]">
                    Sedan
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[2.5rem]">
                    Seat
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[4.063rem]">
                    2 seats
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[2.625rem]">
                    Door
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[4.25rem]">
                    2 doors
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[4.75rem]">
                    Luggage
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[2rem]">
                    150
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[7.125rem]">
                    Transmission
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[5.563rem]">
                    Automatic
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[2.813rem]">
                    Drive
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[2.688rem]">
                    4WD
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[2.438rem]">
                    Year
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[2.875rem]">
                    2020
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[4.25rem]">
                    Mileage
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[2.188rem]">
                    200
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[5.188rem]">
                    Fuel Type
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[3.625rem]">
                    Hybird
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[3.688rem]">
                    Engine
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[2.938rem]">
                    3000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[30.125rem] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-56@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
