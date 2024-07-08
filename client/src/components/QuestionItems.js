import PropTypes from "prop-types";

const QuestionItems = ({
  className = "",
  howDoExtandMyTrip,
  amIResponsibleForFuel,
  chevronDown,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-[1.25rem] max-w-full text-left text-[1.125rem] text-gray-1000 font-inter mq1125:flex-wrap ${className}`}
    >
      <div className="flex-[0.9792] rounded-6xs-3 box-border flex flex-row items-center justify-start py-[1rem] pr-[1.625rem] pl-[1.562rem] relative gap-[3.675rem] min-w-[23.188rem] max-w-full border-[1px] border-solid border-gray-400 mq450:gap-[1.813rem] mq450:min-w-full mq1125:flex-1">
        <div className="relative leading-[145.52%] capitalize font-medium">
          {howDoExtandMyTrip}
        </div>
        <img
          className="h-[0.331rem] w-[0.663rem] absolute !m-[0] top-[1.813rem] left-[33.313rem]"
          alt=""
          src="/vector-23.svg"
        />
      </div>
      <div className="flex-1 rounded-6xs-3 box-border flex flex-row items-center justify-start py-[1rem] pr-[0.937rem] pl-[1.562rem] gap-[0.562rem] min-w-[23.188rem] max-w-full border-[1px] border-solid border-gray-400 mq450:min-w-full mq1125:flex-1">
        <div className="flex-1 relative capitalize font-medium inline-block max-w-[calc(100%_-_34px)]">
          {amIResponsibleForFuel}
        </div>
        <img
          className="h-[1.575rem] w-[1.575rem] relative overflow-hidden shrink-0"
          alt=""
          src={chevronDown}
        />
      </div>
    </div>
  );
};

QuestionItems.propTypes = {
  className: PropTypes.string,
  howDoExtandMyTrip: PropTypes.string,
  amIResponsibleForFuel: PropTypes.string,
  chevronDown: PropTypes.string,
};

export default QuestionItems;
