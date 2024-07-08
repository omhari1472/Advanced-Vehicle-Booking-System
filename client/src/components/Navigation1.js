import PropTypes from "prop-types";

const Navigation1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-gray-1900 overflow-hidden flex flex-row items-start justify-center py-[2rem] px-[1.25rem] box-border gap-[0.25rem] top-[0] z-[99] sticky max-w-full text-left text-[1.063rem] text-white font-inter ${className}`}
    >
      <div className="w-[25.281rem] flex flex-col items-start justify-start pt-[0.437rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border max-w-full text-[1.638rem]">
        <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[5.188rem] whitespace-nowrap">
          Drivee
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
        <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4rem]">
          hosting
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.687rem] pb-[0rem] pr-[1.687rem] pl-[0rem]">
        <img
          className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/chevrondown1.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
        <div className="flex flex-row items-start justify-start gap-[1.968rem] mq1125:hidden">
          <div className="flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem]">
            <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[5.75rem] whitespace-nowrap">
              Contact us
            </a>
          </div>
          <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4.25rem]">
            Account
          </a>
        </div>
      </div>
      <div className="w-[12.906rem] flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem] box-border">
        <img
          className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
          alt=""
          src="/chevrondown1.svg"
        />
      </div>
      <div className="h-[0.563rem] w-[13.75rem] hidden" />
      <div className="w-[6.969rem] flex flex-col items-start justify-start py-[0rem] pr-[1.062rem] pl-[0rem] box-border">
        <button className="cursor-pointer py-[0.625rem] pr-[0.937rem] pl-[1rem] bg-[transparent] self-stretch rounded-9xs flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-white hover:bg-gainsboro-1100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
          <a className="[text-decoration:none] relative text-[1.181rem] capitalize font-inter text-white text-left inline-block min-w-[3.813rem] whitespace-nowrap">
            sign in
          </a>
        </button>
      </div>
      <button className="cursor-pointer [border:none] py-[0.718rem] px-[1rem] bg-white rounded-9xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gainsboro-100">
        <a className="[text-decoration:none] relative text-[1.181rem] capitalize font-semibold font-inter text-gray-2200 text-left inline-block min-w-[4.438rem] whitespace-nowrap">
          sign up
        </a>
      </button>
    </header>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
