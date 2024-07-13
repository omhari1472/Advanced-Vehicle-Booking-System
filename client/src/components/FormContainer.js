import NameField from "./NameField";
import PropTypes from "prop-types";

const FormContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[1.968rem] text-left text-[1.05rem] text-gray-1600 font-inter mq800:gap-[1rem] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.575rem] z-[1]">
        <NameField name1="Name*" emailInputPlaceholder="Enter your name" />
        <NameField name1="Email*" emailInputPlaceholder="Enter your email" />
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.393rem]">
          <div className="relative leading-[150%] font-medium inline-block min-w-[4.563rem]">
            Message
          </div>
          <textarea
            className="bg-white h-[11.681rem] w-auto [outline:none] self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-3 box-border flex flex-row items-center justify-start pt-[1.243rem] px-[1.062rem] pb-[1.25rem] font-inter text-[0.788rem] text-lightslategray-100 border-[0.5px] border-solid border-lightslategray-200"
            placeholder="Hello Drivee. My name is moon."
            rows={9}
            cols={24}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.393rem] z-[1] text-gray-2300">
        <div className="relative leading-[150%] font-medium">
          Driving license File Attachment*
        </div>
        <div className="self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-3 bg-white flex flex-row items-center justify-start py-[0.562rem] pr-[15.125rem] pl-[1rem] gap-[1.312rem] text-[0.788rem] text-darkgray-300 border-[1px] border-solid border-lightslategray-200 mq800:pr-[7.563rem] mq800:box-border mq450:flex-wrap">
          <button className="cursor-pointer [border:none] py-[0.787rem] px-[0.687rem] bg-gray-1600 rounded-6xs-3 flex flex-row items-center justify-center gap-[0.325rem] whitespace-nowrap hover:bg-darkslategray-500">
            <img
              className="h-[1.05rem] w-[1.05rem] relative object-contain"
              alt=""
              src="/upload-1@2x.png"
            />
            <div className="relative text-[0.788rem] leading-[1.188rem] font-semibold font-inter text-white text-left inline-block min-w-[4.5rem]">
              Choose File
            </div>
          </button>
          <div className="relative leading-[1.188rem] font-medium inline-block min-w-[5.563rem]">{`No file Choose `}</div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0.537rem] text-[0.788rem] text-darkslategray-1300">
        <input
          className="m-0 h-[1.444rem] w-[1.375rem] relative rounded-[3.15px] box-border z-[1] border-[1px] border-solid border-gainsboro-700"
          type="checkbox"
        />
        <div className="flex flex-col items-start justify-start pt-[0.256rem] px-[0rem] pb-[0rem]">
          <div className="relative tracking-[0.03em] z-[1]">
            I agree to the Terms and Privacy Policy
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-center justify-start z-[1]">
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-3 bg-gray-1600 flex flex-row items-center justify-center py-[0.875rem] px-[1.25rem] border-[1px] border-solid border-lightslategray-200">
            <div className="flex flex-row items-center justify-start">
              <div className="relative text-[1rem] leading-[150%] font-semibold font-inter text-white text-left inline-block min-w-[3.438rem]">
                Submit
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
