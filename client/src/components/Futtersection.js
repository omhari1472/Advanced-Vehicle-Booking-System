import Options from "./Options";
import PropTypes from "prop-types";

const Futtersection = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch overflow-hidden flex flex-row items-start justify-start pt-[4.75rem] px-[7.687rem] pb-[2.875rem] box-border gap-[5.85rem] bg-[url('/public/demo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[2rem] text-white font-inter mq450:gap-[1.438rem] mq450:pt-[3.063rem] mq450:pb-[1.875rem] mq450:box-border mq800:gap-[2.938rem] mq800:pl-[1.875rem] mq800:pr-[1.875rem] mq800:box-border mq1350:flex-wrap mq1350:justify-center mq1350:pl-[3.813rem] mq1350:pr-[3.813rem] mq1350:box-border ${className}`}
    >
      <div className="w-[22.963rem] flex flex-col items-start justify-start gap-[0.656rem] min-w-[22.963rem] max-w-full mq800:min-w-full mq1350:flex-1">
        <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[6.25rem] mq450:text-[1.188rem] mq800:text-[1.625rem]">
          Drivee
        </h1>
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
              alt=""
              src="/frame-141.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[34rem] flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border min-w-[34rem] max-w-full text-[1.25rem] mq1125:min-w-full mq1350:flex-1">
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq800:flex-wrap">
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
          <Options propPadding="0rem 0.375rem 0rem 0rem" />
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
    </footer>
  );
};

Futtersection.propTypes = {
  className: PropTypes.string,
};

export default Futtersection;
