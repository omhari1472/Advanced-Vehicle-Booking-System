import { useMemo } from "react";
import PropTypes from "prop-types";

const Demo = ({ className = "", propPadding }) => {
  const demoStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <footer
      className={`self-stretch overflow-hidden flex flex-row items-end justify-start pt-[4.75rem] px-[8.625rem] pb-[2.875rem] box-border gap-[4.5rem] bg-[url('/public/demo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 text-left text-[1.25rem] text-white font-inter mq750:gap-[2.25rem] mq750:pl-[2.125rem] mq750:pr-[2.125rem] mq750:box-border mq450:gap-[1.125rem] mq450:pt-[3.063rem] mq450:pb-[1.875rem] mq450:box-border mq1225:flex-wrap mq1225:justify-center mq1225:pl-[4.313rem] mq1225:pr-[4.313rem] mq1225:box-border ${className}`}
      style={demoStyle}
    >
      <div className="w-[24.313rem] flex flex-col items-start justify-start pt-[0rem] pb-[3.125rem] pr-[1.312rem] pl-[0rem] box-border min-h-[15.125rem] max-w-full text-[2rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.656rem]">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[6.25rem] mq750:text-[1.625rem] mq450:text-[1.188rem]">
            Drivee
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.281rem] text-[1.181rem] text-darkgray-400 mq450:gap-[1.125rem]">
            <div className="self-stretch relative leading-[185.02%] capitalize">
              is just a drivee ride away.take control of you journey today
            </div>
            <div className="flex flex-row items-start justify-start gap-[1.612rem]">
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/frame-138.svg"
              />
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/frame-139.svg"
              />
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/frame-140.svg"
              />
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/frame-141.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[1rem]">
        <div className="relative leading-[185.02%] capitalize font-medium mq450:text-[1rem] mq450:leading-[1.875rem]">
          About comapany
        </div>
        <div className="relative text-[0.875rem] leading-[185.02%] capitalize text-lightgray-100">
          <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
            <li>About us</li>
            <li>Careers</li>
            <li>help</li>
            <li>contact us</li>
            <li>fee policy</li>
            <li>privacy policy</li>
            <li>term and conditions</li>
          </ul>
        </div>
      </div>
      <div className="w-[19.125rem] flex flex-row items-start justify-between gap-[1.25rem]">
        <div className="flex flex-col items-start justify-start gap-[1rem]">
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
        <div className="flex flex-col items-start justify-start gap-[1rem]">
          <div className="relative leading-[185.02%] capitalize font-medium mq450:text-[1rem] mq450:leading-[1.875rem]">
            vehicle types
          </div>
          <div className="relative text-[0.875rem] leading-[185.02%] capitalize text-lightgray-100">
            <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
              <li>car</li>
              <li>bike</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

Demo.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default Demo;
