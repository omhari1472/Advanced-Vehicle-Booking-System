import Options from "./Options";
import PropTypes from "prop-types";

const Demo1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex flex-row items-end justify-start pt-[4.75rem] px-[7.687rem] pb-[2.875rem] box-border gap-[4.5rem] bg-[url('/public/demo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[1.25rem] text-white font-inter lg:flex-wrap lg:justify-center lg:pl-[3.813rem] lg:pr-[3.813rem] lg:box-border mq450:gap-[1.125rem] mq450:pt-[3.063rem] mq450:pb-[1.875rem] mq450:box-border mq750:gap-[2.25rem] mq750:pl-[1.875rem] mq750:pr-[1.875rem] mq750:box-border ${className}`}
    >
      <div className="w-[24.313rem] flex flex-col items-start justify-start pt-[0rem] pb-[3.125rem] pr-[1.312rem] pl-[0rem] box-border min-h-[15.125rem] max-w-full text-[2rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.656rem]">
          <div className="relative font-semibold inline-block min-w-[6.25rem] mq1050:text-[1.625rem] mq450:text-[1.188rem]">
            Drivee
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.281rem] text-[1.181rem] text-darkgray-400 mq450:gap-[1.125rem]">
            <div className="self-stretch relative leading-[185.02%] capitalize">
              is just a drivee ride away.take control of you journey today
            </div>
            <div className="flex flex-row items-start justify-start gap-[1.612rem]">
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                alt=""
                src="/frame-138.svg"
              />
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                alt=""
                src="/frame-139.svg"
              />
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                alt=""
                src="/frame-140.svg"
              />
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
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
        <Options propPadding="unset" />
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
    </div>
  );
};

Demo1.propTypes = {
  className: PropTypes.string,
};

export default Demo1;
