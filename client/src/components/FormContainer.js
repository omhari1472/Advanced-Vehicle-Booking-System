import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);
    // data.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:4000/api/auth/documents', data)
      console.log('Document uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading document:', error.message);
    }
  };

  return (
    <FormContainer
      className=""
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

const FormContainer = ({
  className = "",
  formData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={`self-stretch flex flex-col items-start justify-start gap-[1.968rem] text-left text-[1.05rem] text-gray-1600 font-inter mq800:gap-[1rem] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.575rem] z-[1]">
        <div
          className={`self-stretch flex flex-col items-start justify-start gap-[0.393rem] text-left text-[1.05rem] text-gray-1600 font-inter ${className}`}
        >
          <div className="relative leading-[150%] font-medium inline-block min-w-[3.5rem]">
            Name
          </div>
          <div className="self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-3 bg-white flex flex-row items-center justify-start py-[0.812rem] px-[1rem] border-[0.5px] border-solid border-lightslategray-200">
            <input
              className="w-[7.375rem] [border:none] [outline:none] bg-[transparent] h-[1.188rem] flex flex-row items-center justify-start font-inter text-[0.788rem] text-lightslategray-100"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div
          className={`self-stretch flex flex-col items-start justify-start gap-[0.393rem] text-left text-[1.05rem] text-gray-1600 font-inter ${className}`}
        >
          <div className="relative leading-[150%] font-medium inline-block min-w-[3.5rem]">
            Email
          </div>
          <div className="self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-3 bg-white flex flex-row items-center justify-start py-[0.812rem] px-[1rem] border-[0.5px] border-solid border-lightslategray-200">
            <input
              className="w-[7.375rem] [border:none] [outline:none] bg-[transparent] h-[1.188rem] flex flex-row items-center justify-start font-inter text-[0.788rem] text-lightslategray-100"
              placeholder="Enter your email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.393rem]">
          <div className="relative leading-[150%] font-medium inline-block min-w-[4.563rem]">
            Message
          </div>
          <textarea
            className="bg-white h-[11.681rem] w-auto [outline:none] self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-3 box-border flex flex-row items-center justify-start pt-[1.243rem] px-[1.062rem] pb-[1.25rem] font-inter text-[0.788rem] text-lightslategray-100 border-[0.5px] border-solid border-lightslategray-200"
            placeholder="Hello Drivee. My name is moon."
            rows={9}
            cols={24}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.393rem] z-[1] text-gray-2300">
        <div className="relative leading-[150%] font-medium">
          Driving license File Attachment*
        </div>
        <div className="self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-3 bg-white flex flex-row items-center justify-start py-[0.562rem] pr-[15.125rem] pl-[1rem] gap-[1.312rem] text-[0.788rem] text-darkgray-300 border-[1px] border-solid border-lightslategray-200 mq800:pr-[7.563rem] mq800:box-border mq450:flex-wrap">
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="cursor-pointer [border:none] py-[0.787rem] px-[0.687rem] bg-gray-1600 rounded-6xs-3 flex flex-row items-center justify-center gap-[0.325rem] whitespace-nowrap hover:bg-darkslategray-500"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0.537rem] text-[0.788rem] text-darkslategray-1300">
        <input
          className="m-0 h-[1.444rem] w-[1.375rem] relative rounded-[3.15px] box-border z-[1] border-[1px] border-solid border-gainsboro-700"
          type="checkbox"
        />
        <div className="flex flex-col items-start justify-start pt-[0.256rem] px-[0rem] pb-[0rem]">
          <div className="relative tracking-[0.03em] z-[1]">
            I agree to the Terms and Privacy Policy
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-center justify-start z-[1]"
      >
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-3 bg-gray-1600 flex flex-row items-center justify-center py-[0.875rem] px-[1.25rem] border-[1px] border-solid border-lightslategray-200">
            <div className="flex flex-row items-center justify-start">
              <div className="relative text-[1rem] leading-[150%] font-semibold font-inter text-white text-left inline-block min-w-[3.438rem]">
                Submit
              </div>
            </div>
          </div>
        </div>
      </button>
    </form>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Contact;
