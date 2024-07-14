import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const FrameComponent2 = ({ className = "" }) => {
  const navigate =useNavigate();
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[5.487rem] pr-[1.375rem] pl-[1.25rem] box-border max-w-full text-left text-[1.638rem] text-gray-2200 font-inter ${className}`}
    >
      <div  className="w-[72.625rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq450:w-[51.813rem]">
        <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
          <button onClick={()=>navigate("/")} className="cursor-pointer [text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[5.188rem] whitespace-nowrap">
            Drivee
          </button>
        </div>
        <nav className="m-0 w-[20.813rem] flex flex-col items-start justify-start pt-[0.812rem] px-[0rem] pb-[0rem] box-border max-w-full mq450:hidden">
          <nav className="m-0 w-[17.938rem] flex flex-row items-start justify-between gap-[1.25rem] text-left text-[1.063rem] text-gray-2200 font-inter">
            <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4rem]">
              hosting
            </a>
            <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[5.75rem] whitespace-nowrap">
              Contact us
            </a>
            <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4.25rem]">
              Account
            </a>
          </nav>
        </nav>
        <img
          className="h-[2.125rem] w-[2.125rem] relative rounded-[50%] object-cover min-h-[2.125rem]"
          loading="lazy"
          alt=""
          src="/ellipse-11@2x.png"
        />
      </div>
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
