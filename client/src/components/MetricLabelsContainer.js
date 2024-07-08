import { useMemo } from "react";
import PropTypes from "prop-types";

const MetricLabelsContainer = ({
  className = "",
  ionwallet,
  prop,
  yourWallet,
  propPadding,
}) => {
  const metricLabelsContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex-[0.9263] shadow-[0px_4px_8px_rgba(158,_158,_158,_0.15)] rounded-[6.82px] bg-white box-border overflow-hidden flex flex-row items-start justify-start pt-[2.312rem] px-[1.375rem] pb-[2.375rem] min-w-[11.688rem] text-left text-[2.844rem] text-gray-2000 font-inter border-[2px] border-solid border-aliceblue mq450:flex-1 ${className}`}
      style={metricLabelsContainerStyle}
    >
      <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.006rem] gap-[1.418rem]">
        <img
          className="w-[2.25rem] h-[2.25rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={ionwallet}
        />
        <div className="flex flex-col items-start justify-start gap-[0.212rem]">
          <div className="relative capitalize font-semibold whitespace-nowrap mq450:text-[1.688rem] mq750:text-[2.25rem]">
            {prop}
          </div>
          <h2 className="m-0 relative text-[1.375rem] capitalize font-medium font-inherit text-gray-400 inline-block min-w-[7.438rem] mq450:text-[1.125rem]">
            {yourWallet}
          </h2>
        </div>
      </div>
    </div>
  );
};

MetricLabelsContainer.propTypes = {
  className: PropTypes.string,
  ionwallet: PropTypes.string,
  prop: PropTypes.string,
  yourWallet: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default MetricLabelsContainer;
