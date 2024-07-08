import QuestionItems from "./QuestionItems";
import PropTypes from "prop-types";

const Questions = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full ${className}`}
    >
      <form className="m-0 w-[72.563rem] flex flex-col items-end justify-start gap-[2.418rem] max-w-full mq800:gap-[1.188rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[40.644rem] flex flex-col items-start justify-start gap-[1.831rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.437rem]">
              <div className="relative text-[3.15rem] capitalize font-semibold font-inter text-gray-1600 text-left mq450:text-[1.875rem] mq800:text-[2.5rem]">
                have any Question
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq800:flex-wrap mq800:justify-center">
              <div className="flex flex-col items-start justify-start pt-[0.656rem] px-[0rem] pb-[0rem]">
                <div className="relative text-[1.313rem] capitalize font-inter text-gray-200 text-left inline-block min-w-[4.813rem] mq450:text-[1.063rem]">
                  General
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.656rem] px-[0rem] pb-[0rem]">
                <div className="relative text-[1.313rem] capitalize font-inter text-gray-200 text-left inline-block min-w-[5.125rem] mq450:text-[1.063rem]">
                  security
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[0.656rem] px-[1.062rem] bg-whitesmoke-1200 flex flex-row items-start justify-start hover:bg-lightgray-300">
                <div className="relative text-[1.313rem] capitalize font-semibold font-inter text-gray-1600 text-left inline-block min-w-[5.188rem] mq450:text-[1.063rem]">
                  booking
                </div>
              </button>
              <div className="flex flex-col items-start justify-start pt-[0.656rem] px-[0rem] pb-[0rem]">
                <div className="relative text-[1.313rem] capitalize font-inter text-gray-200 text-left inline-block min-w-[5.438rem] mq450:text-[1.063rem]">
                  payment
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.656rem] px-[0rem] pb-[0rem]">
                <div className="relative text-[1.313rem] capitalize font-inter text-gray-200 text-left inline-block min-w-[4.25rem] mq450:text-[1.063rem]">
                  others
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq800:gap-[1.25rem]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.25rem] max-w-full">
            <div className="flex-1 rounded-6xs-3 box-border flex flex-row items-center justify-start py-[1.125rem] pr-[1.625rem] pl-[1.562rem] relative gap-[3.675rem] min-w-[23.188rem] max-w-full border-[1px] border-solid border-darkgray-200 mq450:gap-[1.813rem] mq450:min-w-full">
              <div className="relative text-[1.125rem] capitalize font-medium font-inter text-gray-1000 text-left">
                how do i find a car or bike for trip?
              </div>
              <img
                className="h-[0.331rem] w-[0.663rem] absolute !m-[0] top-[1.813rem] left-[33.313rem]"
                alt=""
                src="/vector-23.svg"
              />
            </div>
            <div className="flex-1 rounded-6xs-3 box-border overflow-hidden flex flex-row items-center justify-center py-[1rem] px-[1.437rem] gap-[0.737rem] min-w-[23.188rem] max-w-full border-[1px] border-solid border-darkgray-200 mq450:min-w-full">
              <div className="flex-1 relative text-[1.125rem] leading-[145.52%] capitalize font-medium font-inter text-gray-1000 text-left inline-block max-w-[calc(100%_-_37px)]">
                How can i extend my trip date after booking?
              </div>
              <img
                className="h-[1.575rem] w-[1.575rem] relative overflow-hidden shrink-0"
                alt=""
                src="/chevrondown-2.svg"
              />
            </div>
          </div>
          <QuestionItems
            howDoExtandMyTrip="how do extand my trip?"
            amIResponsibleForFuel="am i responsible for fuel?"
            chevronDown="/chevrondown-3.svg"
          />
          <QuestionItems
            howDoExtandMyTrip="can i book car or bike under 20 of age?"
            amIResponsibleForFuel="how can i apply for promo code?"
            chevronDown="/chevrondown-4.svg"
          />
        </div>
      </form>
    </section>
  );
};

Questions.propTypes = {
  className: PropTypes.string,
};

export default Questions;
