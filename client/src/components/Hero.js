import { Form } from "react-router-dom";
import PickupIcon from "./PickupIcon";
import PropTypes from "prop-types";
import FormItem from "./FormItem";

const Hero = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[1.237rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full text-left text-[3.375rem] text-white font-inter ${className}`}
    >
      <div className="w-[72.419rem] flex flex-row items-start justify-center gap-[1.25rem] max-w-full mq1050:flex-wrap">
        <div className="flex-1 flex flex-row items-start justify-start relative min-w-[27.125rem] max-w-full mq750:min-w-full">
          <h1 className="!m-[0] absolute top-[5.688rem] right-[-3.937rem] text-inherit capitalize font-semibold font-inherit mq750:text-[2.688rem] mq450:text-[2rem]">
            Car Booking
          </h1>
          <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.006rem] box-border gap-[1.456rem] max-w-full z-[1]">
            <div className="self-stretch h-[25.25rem] relative">
              <img
                className="absolute top-[0rem] left-[0rem] rounded-mid w-full h-full object-contain"
                alt=""
                src="/image-57@2x.png"
              />
              <img
                className="absolute top-[13.6rem] left-[37.444rem] w-[2.813rem] h-[2.813rem] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/group-10000040701@2x.png"
              />
              <img
                className="absolute top-[13.6rem] left-[1.338rem] w-[2.813rem] h-[2.813rem] z-[1]"
                loading="lazy"
                alt=""
                src="/group-10000040711.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[1.462rem] mq750:flex-wrap">
              <img
                className="self-stretch flex-1 relative rounded-[6.15px] max-w-full overflow-hidden max-h-full object-cover min-w-[9.688rem] min-h-[7.75rem]"
                loading="lazy"
                alt=""
                src="/rectangle-8281@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded-[6.15px] max-w-full overflow-hidden max-h-full object-cover min-w-[9.688rem] min-h-[7.75rem]"
                loading="lazy"
                alt=""
                src="/rectangle-8301@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded-[6.15px] max-w-full overflow-hidden max-h-full object-cover min-w-[9.688rem] min-h-[7.75rem]"
                loading="lazy"
                alt=""
                src="/rectangle-8291@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[29.544rem] shadow-[0px_189.2px_52.61px_rgba(209,_209,_209,_0),_0px_121.4px_48.57px_rgba(209,_209,_209,_0.01),_0px_67.8px_40.47px_rgba(209,_209,_209,_0.05),_0px_30.4px_30.35px_rgba(209,_209,_209,_0.09),_0px_7.1px_16.19px_rgba(209,_209,_209,_0.1),_0px_0px_0px_rgba(209,_209,_209,_0.1)] rounded-[12.14px] bg-whitesmoke-700 box-border flex flex-col items-start justify-start pt-[1.937rem] px-[1.75rem] pb-[2rem] relative gap-[1.806rem] min-w-[29.544rem] max-w-full z-[1] text-[1rem] text-black border-[1px] border-solid border-gainsboro-500 mq750:pt-[1.25rem] mq750:pb-[1.313rem] mq750:box-border mq750:min-w-full mq1050:flex-1">
        <FormItem />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
