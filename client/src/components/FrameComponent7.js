import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div
      className={`w-[27.125rem] rounded-4xs bg-white box-border flex flex-col items-start justify-start pt-[3.687rem] px-[1.437rem] pb-[4.125rem] gap-[1.5rem] min-w-[27.125rem] max-w-full text-left text-[0.75rem] text-darkslategray-300 font-inter border-[0.5px] border-solid border-silver-400 mq450:pt-[2.375rem] mq450:pb-[2.688rem] mq450:box-border mq1050:min-w-full mq1125:flex-1 ${className}`}
    >
      <div className="self-stretch rounded-6xs bg-white flex flex-row items-center justify-start py-[0.875rem] px-[0.937rem] whitespace-nowrap border-[1px] border-solid border-silver-200">
        <div className="relative leading-[68.5%] capitalize font-medium">
          how many vehicle do you want to share
        </div>
      </div>
      <div className="self-stretch rounded-6xs bg-white flex flex-row items-center justify-start py-[0.875rem] px-[0.937rem] border-[1px] border-solid border-silver-200">
        <input
          className="w-[14.75rem] [border:none] [outline:none] font-medium font-inter text-[0.75rem] bg-[transparent] h-[0.5rem] relative leading-[68.5%] capitalize text-darkslategray-300 text-left inline-block p-0"
          placeholder="vehicle name"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.625rem] mq450:flex-wrap">
        <div className="flex-1 rounded-6xs bg-white box-border flex flex-row items-center justify-start py-[0.875rem] pr-[0rem] pl-[0.812rem] min-w-[7.625rem] border-[1px] border-solid border-silver-200">
          <input
            className="w-full [border:none] [outline:none] font-medium font-inter text-[0.75rem] bg-[transparent] h-[0.5rem] flex-1 relative leading-[68.5%] capitalize text-darkslategray-300 text-left inline-block min-w-[6.5rem] p-0"
            placeholder="vehicle model"
            type="text"
          />
        </div>
        <div className="flex-1 rounded-6xs bg-white box-border flex flex-row items-center justify-start py-[0.875rem] pr-[0rem] pl-[0.812rem] min-w-[7.625rem] border-[1px] border-solid border-silver-200">
          <input
            className="w-full [border:none] [outline:none] font-medium font-inter text-[0.75rem] bg-[transparent] h-[0.5rem] flex-1 relative leading-[68.5%] capitalize text-darkslategray-300 text-left inline-block min-w-[6.5rem] p-0"
            placeholder="vehicle number"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.625rem] mq450:flex-wrap">
        <div className="flex-1 rounded-6xs bg-white box-border flex flex-row items-center justify-start py-[0.875rem] pr-[0rem] pl-[0.812rem] min-w-[7.625rem] border-[1px] border-solid border-silver-200">
          <input
            className="w-full [border:none] [outline:none] font-medium font-inter text-[0.75rem] bg-[transparent] h-[0.5rem] flex-1 relative leading-[68.5%] capitalize text-darkslategray-300 text-left inline-block min-w-[6.5rem] p-0"
            placeholder="set your own price"
            type="text"
          />
        </div>
        <div className="flex-1 rounded-6xs bg-white box-border flex flex-row items-center justify-start py-[0.875rem] pr-[0rem] pl-[0.812rem] min-w-[7.625rem] border-[1px] border-solid border-silver-200">
          <input
            className="w-full [border:none] [outline:none] font-medium font-inter text-[0.75rem] bg-[transparent] h-[0.5rem] flex-1 relative leading-[68.5%] capitalize text-darkslategray-300 text-left inline-block min-w-[6.5rem] p-0"
            placeholder="your zip code"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch rounded-md bg-gray-1400 flex flex-row items-center justify-center py-[1.062rem] px-[1.25rem] text-center text-[0.875rem] text-white">
        <div className="relative leading-[0.625rem] capitalize font-semibold inline-block min-w-[2.25rem]">
          Done
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
