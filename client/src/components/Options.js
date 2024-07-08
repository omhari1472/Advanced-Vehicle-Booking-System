import { useMemo } from "react";
import PropTypes from "prop-types";

const Options = ({ className = "", propPadding }) => {
  const optionsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] gap-[1rem] text-left text-[1.25rem] text-white font-inter ${className}`}
      style={optionsStyle}
    >
      <div className="flex flex-row items-start justify-start py-[0rem] px-[0.625rem]">
        <div className="relative leading-[185.02%] capitalize font-medium inline-block min-w-[2.438rem] mq450:text-[1rem] mq450:leading-[1.875rem]">
          city
        </div>
      </div>
      <div className="relative text-[0.875rem] leading-[185.02%] capitalize text-lightgray-100">
        <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
          <li>dhaka</li>
          <li>chittagong</li>
          <li>sylhet</li>
          <li>kulna</li>
          <li>borishal</li>
          <li>rajshahi</li>
          <li>rongpur</li>
        </ul>
      </div>
    </div>
  );
};

Options.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default Options;
