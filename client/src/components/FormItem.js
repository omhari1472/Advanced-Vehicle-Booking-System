import LocationSection from "./LocationSection";
import PropTypes from "prop-types";

const FormItem = ({ className = "" }) => {
  return (
    <form
      className={`!m-[0] w-[74.938rem] absolute right-[7.5rem] bottom-[-4.5rem] rounded-lg bg-white box-border flex flex-row items-end justify-center py-[2.125rem] px-[2rem] gap-[1.125rem] max-w-full z-[3] border-[2px] border-solid border-gainsboro-200 mq1125:flex-wrap ${className}`}
    >
      <LocationSection location1="location" />
      <LocationSection location1="pick-UP" propGap="0.75rem" />
      <div className="w-[13.688rem] flex flex-col items-start justify-start gap-[0.75rem]">
        <a className="[text-decoration:none] relative text-[1rem] capitalize font-semibold font-inter text-gray-1000 text-left inline-block min-w-[2.313rem]">
          date
        </a>
        <div className="self-stretch rounded-8xs-2 bg-white flex flex-row items-center justify-start py-[1rem] pr-[0.812rem] pl-[0.875rem] gap-[0.787rem] border-[0.5px] border-solid border-gainsboro-1000">
          <img
            className="h-[0.875rem] w-[0.875rem] relative"
            alt=""
            src="/calender-icon.svg"
          />
          <input
            className="w-[calc(100%_-_41px)] [border:none] [outline:none] bg-[transparent] h-[1.063rem] flex-1 flex flex-row items-center justify-start font-inter text-[0.875rem] text-slategray min-w-[6.125rem]"
            placeholder="10/9/2020   -  14/9/2023"
            type="text"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[1.093rem] px-[4.437rem] bg-gray-1600 shadow-[0px_8px_24px_rgba(0,_0,_0,_0.15)] rounded-9xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray-500">
        <b className="relative text-[0.875rem] capitalize inline-block font-inter text-white text-left min-w-[5.125rem]">
          search now
        </b>
      </button>
    </form>
  );
};

FormItem.propTypes = {
  className: PropTypes.string,
};

export default FormItem;
