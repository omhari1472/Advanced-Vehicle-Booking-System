import { useMemo } from "react";
import PropTypes from "prop-types";

const LiveCarBonus = ({
  className = "",
  liveCarIcon,
  whenCarIsLive,
  youGetA200BonusWhenYourFr,
  propFlex,
  propPadding,
  propMinWidth,
}) => {
  const liveCarBonusStyle = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propFlex, propPadding, propMinWidth]);

  return (
    <div
      className={`flex-[0.961] rounded-[17.85px] bg-whitesmoke-100 box-border flex flex-col items-start justify-center py-[2.375rem] pr-[1.25rem] pl-[3.25rem] gap-[1.05rem] min-w-[22.625rem] max-w-full text-left text-[3.15rem] text-black font-inter border-[3px] border-solid border-whitesmoke-900 mq1050:flex-1 mq450:pl-[1.25rem] mq450:box-border mq450:min-w-full ${className}`}
      style={liveCarBonusStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[0.393rem]">
        <b className="w-[9.644rem] relative leading-[3.281rem] capitalize inline-block mq1050:text-[2.5rem] mq1050:leading-[2.625rem] mq450:text-[1.875rem] mq450:leading-[1.938rem]">
          {liveCarIcon}
        </b>
        <div className="relative text-[1.838rem] leading-[3.188rem] capitalize font-medium text-darkslategray-1600 mq450:text-[1.5rem] mq450:leading-[2.563rem]">
          {whenCarIsLive}
        </div>
      </div>
      <div className="w-[21.388rem] h-[7.481rem] relative text-[1.313rem] leading-[172.52%] text-dimgray-600 inline-block shrink-0 max-w-full mq450:text-[1.063rem] mq450:leading-[1.813rem]">
        {youGetA200BonusWhenYourFr}
      </div>
    </div>
  );
};

LiveCarBonus.propTypes = {
  className: PropTypes.string,
  liveCarIcon: PropTypes.string,
  whenCarIsLive: PropTypes.string,
  youGetA200BonusWhenYourFr: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default LiveCarBonus;
