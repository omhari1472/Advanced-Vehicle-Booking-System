import PropTypes from "prop-types";
import { useState } from "react";
import { Contactus } from "../services/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FrameComponent1 = ({ className = "" }) => {
  const history =useNavigate();
  const [data, setData] = useState({
    email: "",
    message: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:4000/api/auth/contact",data)
      
      
      console.log("Registration successful:", response);
      if (response && response.data) {
      } else {
        console.error("Registration failed: Invalid response format");
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    }
  };
  
  
  return (
    <section
      className={`w-[89.338rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[3.544rem] text-gray-1600 font-inter ${className}`}
    >
      <div className="w-[51.963rem] flex flex-col items-center justify-start gap-[1.875rem] max-w-full z-[2]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.068rem] shrink-0">
          <b className="self-stretch relative capitalize mq1050:text-[2.813rem] mq450:text-[2.125rem]">
            Need additional information?
          </b>
          <div className="self-stretch h-[5.313rem] relative text-[1.3rem] leading-[173.52%] capitalize text-gray-600 inline-block shrink-0 mq450:text-[1.063rem] mq450:leading-[1.813rem]">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 3` years of
            experience.
          </div>
        </div>
        <div className="w-[31.688rem] rounded-2xs-5 bg-white box-border flex flex-col items-center justify-end py-[3.187rem] pr-[3.25rem] pl-[3.187rem] gap-[2.231rem] max-w-full text-left text-[1.313rem] border-[1px] border-solid border-lightgray-400 mq750:gap-[1.125rem] mq750:py-[2.063rem] mq750:pr-[1.625rem] mq750:pl-[1.563rem] mq750:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.575rem]">
            <div className="w-[18.763rem] flex flex-col items-start justify-start gap-[0.656rem]">
              <h3 className="m-0 relative text-inherit leading-[1.063rem] font-semibold font-inherit inline-block min-w-[7.375rem] whitespace-nowrap mq450:text-[1.063rem] mq450:leading-[0.813rem]">
                Get Started
              </h3>
              <div className="self-stretch relative text-[0.919rem] capitalize text-darkslategray-1100">
                Submit the form to start
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.637rem] text-[0.919rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.525rem]">
                <div className="relative leading-[1.313rem] font-semibold inline-block min-w-[2.438rem]">{`Email `}</div>
                <div className="self-stretch bg-whitesmoke-200 flex flex-col items-start justify-start py-[0.437rem] px-[0.5rem] border-[0.5px] border-solid border-lightgray-400">
                  <input
                    className="w-[16.488rem] [border:none] [outline:none] bg-[transparent] h-[2.363rem] flex flex-row items-start justify-start py-[0.525rem] px-[0.5rem] box-border font-inter text-[1.05rem] text-darkgray-500"
                    placeholder="syedtahmidahmed@gmai.com"
                    type="text"
                    onChange={handleInputs}
                    name="email"
                    id="email"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.525rem]">
                <div className="relative leading-[1.313rem] capitalize font-semibold inline-block min-w-[6.938rem]">
                  Tell me about it
                </div>
                <input
                  className="bg-whitesmoke-200 h-[8.269rem] w-auto [outline:none] self-stretch box-border border-[0.5px] border-solid border-lightgray-400"
                  rows={7}
                  cols={20}
                  type="text"
                    onChange={handleInputs}
                    name="message"
                    id="message"
                />
              </div>
            </div>
          </div>
          <button onClick={handleSubmit} className="cursor-pointer [border:none] pt-[0.981rem] px-[1.312rem] pb-[0.987rem] bg-gray-1600 shadow-[14.7px_22px_7.35px_rgba(0,_0,_0,_0),_9.4px_14.7px_7.35px_rgba(0,_0,_0,_0.01),_5.2px_8.4px_5.25px_rgba(0,_0,_0,_0.05),_2.1px_3.1px_4.2px_rgba(0,_0,_0,_0.09),_1px_1px_2.1px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] rounded-[7.35px] flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray-500">
            <div className="relative text-[1rem] leading-[1.313rem] capitalize font-semibold font-inter text-white text-left inline-block min-w-[7.125rem]">
              send message
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
