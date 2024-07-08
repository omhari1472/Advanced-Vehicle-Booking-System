import { useMemo } from "react";
import PropTypes from "prop-types";

const ContactInfo = ({
  className = "",
  propAlignSelf,
  propPadding,
  propWidth,
}) => {
  const contactInfoStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.375rem] pl-[1.25rem] box-border max-w-full text-left text-[0.919rem] text-darkgray-100 font-inter ${className}`}
      style={contactInfoStyle}
    >
      <div className="w-[27.438rem] flex flex-col items-start justify-start gap-[0.687rem] max-w-full">
        <div className="self-stretch rounded-9xs bg-white box-border flex flex-row items-start justify-start py-[0.687rem] px-[0.875rem] max-w-full border-[1px] border-solid border-gainsboro-600">
          <div className="h-[3.125rem] w-[27.438rem] relative rounded-9xs bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro-600" />
          <div className="w-[11.025rem] relative leading-[172.52%] capitalize inline-block shrink-0 z-[1]">
            <p className="m-0">Phone Number</p>
          </div>
        </div>
        <div className="self-stretch rounded-9xs bg-white box-border flex flex-row items-start justify-start py-[0.687rem] px-[0.875rem] max-w-full border-[1px] border-solid border-gainsboro-600">
          <div className="h-[3.125rem] w-[27.438rem] relative rounded-9xs bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro-600" />
          <input
            className="w-[11.025rem] [border:none] [outline:none] font-inter text-[0.919rem] bg-[transparent] h-[1.506rem] relative leading-[172.52%] capitalize text-darkgray-100 text-left inline-block p-0 z-[1]"
            placeholder="E-mail"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default ContactInfo;
