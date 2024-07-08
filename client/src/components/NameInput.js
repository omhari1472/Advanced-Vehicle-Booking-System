import PropTypes from "prop-types";

const NameInput = ({ className = "", name1, nameEntryPlaceholder }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.393rem] text-left text-[0.919rem] text-gray-1600 font-inter ${className}`}
    >
      <div className="relative leading-[150%] font-semibold inline-block min-w-[3.125rem]">
        {name1}
      </div>
      <div className="self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-3 bg-white flex flex-row items-center justify-start py-[0.687rem] px-[1rem] border-[1px] border-solid border-lightslategray-200">
        <input
          className="w-[6.125rem] [border:none] [outline:none] bg-[transparent] h-[1.188rem] flex flex-row items-center justify-start font-inter text-[0.788rem] text-lightslategray-100"
          placeholder={nameEntryPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

NameInput.propTypes = {
  className: PropTypes.string,
  name1: PropTypes.string,
  nameEntryPlaceholder: PropTypes.string,
};

export default NameInput;
