import { useMemo } from "react";
import PropTypes from "prop-types";

const ActionsContainer = ({
  className = "",
  ellipse24,
  iconamoonprofileFill,
  uiscalender,
  myWallet,
  uiscalender1,
  entypologOut,
  propBorder,
}) => {
  const actionsContainerStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div
      className={`w-[21.538rem] rounded-[6.82px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[2.437rem] pr-[1.437rem] pl-[1.75rem] min-w-[21.538rem] max-w-full text-left text-[1.419rem] text-gray-1800 font-inter border-[3px] border-solid border-aliceblue mq450:min-w-full mq750:pt-[1.563rem] mq750:pb-[1.563rem] mq750:box-border mq1100:flex-1 ${className}`}
      style={actionsContainerStyle}
    >
      <div className="flex-1 flex flex-col items-center justify-start gap-[1.137rem]">
        <img
          className="w-[7.106rem] h-[7.106rem] relative rounded-[50%] object-contain"
          loading="lazy"
          alt=""
          src={ellipse24}
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
          <div className="self-stretch rounded-[4.55px] bg-gray-2300 flex flex-row items-center justify-start pt-[0.643rem] pb-[0.637rem] pr-[9.375rem] pl-[0.937rem] gap-[0.568rem] text-white mq450:pr-[1.25rem] mq450:box-border">
            <img
              className="h-[1.706rem] w-[1.706rem] relative overflow-hidden shrink-0"
              alt=""
              src="/antdesignhomefilled1.svg"
            />
            <div className="relative capitalize font-semibold inline-block min-w-[5.313rem]">
              Dashboard
            </div>
          </div>
          <div className="self-stretch rounded-[4.55px] flex flex-row items-center justify-start pt-[0.643rem] pb-[0.637rem] pr-[9.937rem] pl-[0.937rem] gap-[0.568rem] mq450:pr-[1.25rem] mq450:box-border">
            <img
              className="h-[1.706rem] w-[1.706rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={iconamoonprofileFill}
            />
            <div className="relative capitalize font-medium inline-block min-w-[4.813rem]">
              my profile
            </div>
          </div>
          <div className="self-stretch rounded-[4.55px] flex flex-row items-center justify-start pt-[0.637rem] pb-[0.643rem] pr-[10.062rem] pl-[0.937rem] gap-[0.568rem] mq450:pr-[1.25rem] mq450:box-border">
            <img
              className="h-[1.706rem] w-[1.706rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={uiscalender}
            />
            <div className="relative capitalize font-medium inline-block min-w-[4.688rem]">
              {myWallet}
            </div>
          </div>
          <div className="self-stretch rounded-[4.55px] flex flex-row items-center justify-start pt-[0.637rem] pb-[0.643rem] pr-[6rem] pl-[0.937rem] gap-[0.568rem] mq450:pr-[1.25rem] mq450:box-border">
            <img
              className="h-[1.706rem] w-[1.706rem] relative overflow-hidden shrink-0"
              alt=""
              src={uiscalender1}
            />
            <div className="relative capitalize font-medium">{`insurance & policy`}</div>
          </div>
          <div className="self-stretch rounded-[4.55px] flex flex-row items-center justify-start pt-[0.637rem] pb-[0.643rem] pr-[10.875rem] pl-[0.937rem] gap-[0.568rem] mq450:pr-[1.25rem] mq450:box-border">
            <img
              className="h-[1.419rem] w-[1.419rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={entypologOut}
            />
            <div className="relative capitalize font-medium inline-block min-w-[4.125rem]">
              sign out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ActionsContainer.propTypes = {
  className: PropTypes.string,
  ellipse24: PropTypes.string,
  iconamoonprofileFill: PropTypes.string,
  uiscalender: PropTypes.string,
  myWallet: PropTypes.string,
  uiscalender1: PropTypes.string,
  entypologOut: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
};

export default ActionsContainer;
