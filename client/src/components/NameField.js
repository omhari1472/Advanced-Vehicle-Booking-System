import PropTypes from "prop-types";

const NameField = ({ className = "", name1, emailInputPlaceholder }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.393rem] text-left text-[1.05rem] text-gray-1600 font-inter ${className}`}
    >
      <div className="relative leading-[150%] font-medium inline-block min-w-[3.5rem]">
        {name1}
      </div>
      <div className="self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-3 bg-white flex flex-row items-center justify-start py-[0.812rem] px-[1rem] border-[0.5px] border-solid border-lightslategray-200">
        <input
          className="w-[7.375rem] [border:none] [outline:none] bg-[transparent] h-[1.188rem] flex flex-row items-center justify-start font-inter text-[0.788rem] text-lightslategray-100"
          placeholder={emailInputPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

NameField.propTypes = {
  className: PropTypes.string,
  name1: PropTypes.string,
  emailInputPlaceholder: PropTypes.string,
};

export default NameField;
