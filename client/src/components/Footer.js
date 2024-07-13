import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import MyOrder from "./MyOrder";
import Insurance from "./Insurance";
import DashBoard from "./DashBoard";
const Footer = ({ className = "" }) => {
  const history = useNavigate();

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[1.275rem] max-w-full text-left text-[1.419rem] text-gray-1800 font-inter mq1050:flex-wrap ${className}`}
    >
      <div className="w-[21.538rem] rounded-[6.82px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[2.437rem] pr-[1.437rem] pl-[1.75rem] min-w-[21.538rem] max-w-full z-[1] border-[3px] border-solid border-lavender mq1050:flex-1 mq450:min-w-full mq750:pt-[1.563rem] mq750:pb-[1.563rem] mq750:box-border">
        <div className="flex-1 flex flex-col items-center justify-start gap-[1.137rem]">
          <img
            className="w-[7.106rem] h-[7.106rem] relative rounded-[50%] object-contain"
            loading="lazy"
            alt=""
            src="/ellipse-241@2x.png"
          />
          <div className="flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.006rem] gap-[0.356rem]">
            <div className="relative capitalize font-semibold mq450:text-[1.125rem]">
              Rovan Reels
            </div>
            <div className="relative text-[0.994rem] lowercase text-dimgray-700 whitespace-nowrap">
              RovanReels@gmail.com
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.281rem] text-[0.994rem] text-gray-1200">
            <DashBoard />

            <div className="self-stretch rounded-[4.55px] bg-gray-1600 flex flex-row items-center justify-start pt-[0.643rem] pb-[0.637rem] pr-[9.812rem] pl-[1rem] gap-[0.568rem] whitespace-nowrap text-white mq450:pr-[1.25rem] mq450:box-border">
              <img
                className="h-[1.706rem] w-[1.706rem] relative overflow-hidden shrink-0"
                alt=""
                src="/iconamoonprofilefill1.svg"
              />
              <div className="relative capitalize font-semibold inline-block min-w-[4.875rem]">
                my profile
              </div>
            </div>

            <MyOrder />
            <Insurance />

            <div className="self-stretch rounded-[4.55px] flex flex-row items-center justify-start pt-[0.637rem] pb-[0.643rem] pr-[10.812rem] pl-[1rem] gap-[0.568rem] mq450:pr-[1.25rem] mq450:box-border">
              <img
                className="h-[1.419rem] w-[1.419rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/entypologout.svg"
              />
              <div className="relative capitalize font-medium inline-block min-w-[4.125rem]">
                sign out
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="m-0 flex-1 rounded-[6.82px] bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-[1.937rem] pb-[3.187rem] pr-[3.187rem] pl-[3.437rem] gap-[1.875rem] min-w-[32.188rem] shrink-0 max-w-full z-[1] border-[3px] border-solid border-lavender mq1050:pl-[1.688rem] mq1050:pr-[1.563rem] mq1050:box-border mq450:gap-[0.938rem] mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.437rem] max-w-full mq750:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[13.375rem] max-w-full">
              <a className="[text-decoration:none] relative text-[0.875rem] capitalize font-semibold font-inter text-gray-1800 text-left inline-block min-w-[4.375rem]">
                username
              </a>
              <div className="self-stretch rounded-9xs flex flex-row items-center justify-start p-[0.625rem] border-[1px] border-solid border-whitesmoke-1100">
                <input
                  className="w-[4.75rem] [border:none] [outline:none] font-inter text-[0.625rem] bg-[transparent] h-[0.438rem] relative capitalize text-gray-300 text-left inline-block p-0"
                  placeholder="enter username"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[13.375rem] max-w-full">
              <div className="relative text-[0.875rem] capitalize font-semibold font-inter text-gray-1800 text-left inline-block min-w-[5.5rem]">
                email adress
              </div>
              <div className="self-stretch rounded-9xs flex flex-row items-center justify-start p-[0.625rem] border-[1px] border-solid border-whitesmoke-1100">
                <input
                  className="w-[3.313rem] [border:none] [outline:none] font-inter text-[0.625rem] bg-[transparent] h-[0.438rem] relative capitalize text-gray-300 text-left inline-block p-0"
                  placeholder="Entre email"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.437rem] max-w-full mq750:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-center gap-[0.5rem] min-w-[13.375rem] max-w-full">
              <a className="[text-decoration:none] relative text-[0.875rem] capitalize font-semibold font-inter text-gray-1800 text-left inline-block min-w-[6.313rem]">
                new password
              </a>
              <div className="self-stretch rounded-9xs flex flex-row items-center justify-start p-[0.625rem] border-[1px] border-solid border-whitesmoke-1100">
                <input
                  className="w-[5.313rem] [border:none] [outline:none] font-inter text-[0.625rem] bg-[transparent] h-[0.438rem] relative capitalize text-gray-300 text-left inline-block p-0"
                  placeholder="*****************"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 rounded-9xs flex flex-col items-start justify-start gap-[0.5rem] min-w-[13.375rem] max-w-full">
              <div className="relative text-[0.875rem] capitalize font-semibold font-inter text-gray-1800 text-left">
                re-entre password
              </div>
              <div className="self-stretch rounded-9xs flex flex-row items-center justify-start p-[0.625rem] border-[1px] border-solid border-whitesmoke-1100">
                <input
                  className="w-[5.313rem] [border:none] [outline:none] font-inter text-[0.625rem] bg-[transparent] h-[0.438rem] relative capitalize text-gray-300 text-left inline-block p-0"
                  placeholder="*****************"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-[0.75rem] bg-gray-1800 rounded-[2.45px] flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray-600">
          <div className="relative text-[1rem] capitalize font-semibold font-inter text-white text-left inline-block min-w-[6.938rem]">
            update profile
          </div>
        </button>
      </form>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
