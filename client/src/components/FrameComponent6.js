import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`w-[82.688rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[1.437rem] max-w-full text-left text-[3.125rem] text-gray-1600 font-inter mq1125:flex-wrap ${className}`}
    >
      <div className="w-[35.688rem] flex flex-col items-start justify-start pt-[5.093rem] px-[0rem] pb-[0rem] box-border min-w-[35.688rem] max-w-full mq450:pt-[3.313rem] mq450:box-border mq800:min-w-full mq1125:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.531rem] shrink-0">
          <div className="w-[17.438rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[0.312rem]">
            <h1 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq450:text-[1.875rem] mq800:text-[2.5rem]">
              Rent a car
            </h1>
            <div className="self-stretch flex flex-row items-end justify-start gap-[0.937rem] text-[0.625rem] text-gray-200">
              <div className="rounded-9xs bg-whitesmoke-600 flex flex-row items-center justify-center py-[0.625rem] px-[0.937rem]">
                <div className="relative uppercase inline-block min-w-[2.5rem]">
                  luxury
                </div>
              </div>
              <div className="flex-1 rounded-9xs bg-whitesmoke-600 flex flex-row items-center justify-center py-[0.625rem] px-[0.937rem]">
                <div className="relative uppercase inline-block min-w-[3.188rem]">
                  comfort
                </div>
              </div>
              <div className="flex-1 rounded-9xs bg-whitesmoke-600 flex flex-row items-center justify-center py-[0.625rem] px-[0.937rem]">
                <div className="relative uppercase inline-block min-w-[3rem]">
                  prestige
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-[1rem] leading-[200.02%] text-dimgray-600">
            Booking a self-driving car with us is simple and easy. You can
            browse our selection of vehicles online, choose the car that best
            fits your needs, and book it for the duration of your choice. Our
            user-friendly platform allows you to manage your bookings and view
            your trip history with ease.
          </div>
          <button className="cursor-pointer [border:none] py-[0.625rem] px-[1rem] bg-black shadow-[0px_6px_20px_rgba(0,_0,_0,_0.15)] rounded-9xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray-1400">
            <div className="relative text-[0.75rem] capitalize font-semibold font-inter text-white text-left inline-block min-w-[3.188rem]">
              rent Car
            </div>
          </button>
        </div>
      </div>
      <img
        className="h-[29.563rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[28.813rem] shrink-0 mq800:min-w-full"
        loading="lazy"
        alt=""
        src="/car-rental-image@2x.png"
      />
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
