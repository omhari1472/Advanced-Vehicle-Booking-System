import { useMemo } from "react";
import PropTypes from "prop-types";

const StatItems = ({
  className = "",
  statIcons,
  statsNumbers,
  totalOrder,
  propFlex,
  propPadding,
}) => {
  const statItemsStyle = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  return (
    <div
      className={`flex-[0.9699] rounded-[6.82px] bg-white box-border overflow-hidden flex flex-row items-start justify-start pt-[2.187rem] px-[1.562rem] pb-[2.25rem] min-w-[8.688rem] text-left text-[2.844rem] text-gray-2000 font-inter border-[3px] border-solid border-whitesmoke-1000 mq450:flex-1 ${className}`}
      style={statItemsStyle}
    >
      <div className="h-[9.106rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[6.9rem] box-border gap-[1.418rem]">
        <img
          className="w-[2.206rem] h-[2.206rem] relative shrink-0"
          loading="lazy"
          alt=""
          src={statIcons}
        />
        <div className="flex flex-col items-start justify-start gap-[0.356rem] shrink-0">
          <div className="relative capitalize font-semibold inline-block min-w-[3.813rem] mq1050:text-[2.25rem] mq450:text-[1.688rem]">
            {statsNumbers}
          </div>
          <h2 className="m-0 relative text-[1.375rem] capitalize font-medium font-inherit text-gray-400 inline-block min-w-[7.375rem] mq450:text-[1.125rem]">
            {totalOrder}
          </h2>
        </div>
      </div>
    </div>
  );
};

StatItems.propTypes = {
  className: PropTypes.string,
  statIcons: PropTypes.string,
  statsNumbers: PropTypes.string,
  totalOrder: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
};

export default StatItems;
