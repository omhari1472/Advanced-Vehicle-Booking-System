import React, { useState } from "react";
import NameInput from "../components/NameInput";
import { register } from "../services/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreateAccount = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // const [error, setError] = useState(null);
  // State to hold registration error
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("dsadsa")
    e.preventDefault(); // Prevent the form from submitting
    // Log only the extracted form data, not entire DOM elements
    console.log("Form Data:", data);

    try {
      // Call the register API function with extracted data
      const response =  await axios.post('http://localhost:4000/api/auth/register',{data});
      console.log("Registration successful:", response);
      if(response)
      {
        navigate("/");
      }
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error("Registration failed:", error.message);
      // setError(error.message); // Set registration error message for display
    }
  };

  return (
    <div className="w-full relative overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] text-center text-[2.625rem] text-white font-inter lg:flex-wrap">
      <div className="flex-1 flex flex-row items-start justify-center pt-[23.812rem] px-[1.25rem] pb-[23.893rem] box-border relative min-w-[30.688rem] max-w-full lg:flex-1 mq750:pt-[10.063rem] mq750:pb-[10.063rem] mq750:box-border mq750:min-w-full mq1050:pt-[15.5rem] mq1050:pb-[15.5rem] mq1050:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
          <img
            className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-731@2x.png"
          />
          <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] opacity-[0.8] mix-blend-hard-light z-[1]" />
        </div>
        <div className="w-[34.969rem] flex flex-col items-center justify-start gap-[2.362rem] max-w-full z-[2] mq750:gap-[1.188rem]">
          <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border max-w-full">
            <div className="self-stretch h-[6.494rem] relative leading-[150.52%] inline-block shrink-0 mq750:text-[2.125rem] mq750:leading-[3.188rem] mq450:text-[1.563rem] mq450:leading-[2.375rem]">
              <p className="m-0 font-extrabold">Welcome to Drivee®</p>
              <p className="m-0 text-[1.575rem] font-medium">
                {" "}
                the best global carsharing marketplace
              </p>
            </div>
            <div className="w-[26.506rem] h-[3.281rem] relative text-[0.925rem] font-roboto flex items-center justify-center shrink-0 max-w-full">
              Have a car? Earn money as a Host. Rent your dream car as a Guest.
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[1.05rem] px-[1.75rem] bg-white shadow-[11.5px_13.6px_31.49px_rgba(235,_25,_51,_0.1)] rounded-4xs-4 flex flex-row items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[0.656rem]">
              <b className="relative text-[1.313rem] capitalize font-inter text-gray-2300 text-left mq450:text-[1.063rem]">
                Play Video Intro
              </b>
              <img
                className="h-[1.181rem] w-[0.919rem] relative"
                alt=""
                src="/video-icon.svg"
              />
            </div>
          </button>
        </div>
      </div>
      <form
        className="m-0 flex-[0.5977] bg-white flex flex-col items-start justify-start pt-[4.625rem] px-[10.25rem] pb-[4.612rem] box-border gap-[1.956rem] min-w-[30.688rem] max-w-full lg:flex-1 mq750:gap-[1rem] mq750:py-[1.938rem] mq750:px-[5.125rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1050:pt-[3rem] mq1050:pb-[3rem] mq1050:box-border"
        onSubmit={handleSubmit} // Handle form submission
      >
        <div className="w-[47.238rem] h-[63.506rem] relative bg-white hidden max-w-full" />
        <a className="[text-decoration:none] relative text-[3.15rem] font-bold font-inter text-gray-1600 text-left z-[1] mq750:text-[2.5rem] mq450:text-[1.875rem]">
          Drivee
        </a>
        <div className="flex flex-col items-start justify-start gap-[0.393rem]">
          <div className="relative text-[1.838rem] leading-[150%] capitalize font-semibold font-inter text-gray-1600 text-left z-[1] mq450:text-[1.5rem] mq450:leading-[2.188rem]">
            Create an account.
          </div>
          <div className="relative text-[1.05rem] leading-[150%] font-inter text-lightslategray-100 text-left z-[1]">
            <p className="m-0">{`We’d love to have you on board. Join over 500+ `}</p>
            <p className="m-0">
              customers around the globe and enhance productivity.
            </p>
          </div>
        </div>
        <div className="w-[24.731rem] flex flex-col items-start justify-start gap-[0.981rem] max-w-full">
          {/* Social login buttons */}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.575rem] z-[1]">
          <NameInput
            value={data.username}
            onChange={handleInputs}
            name="username"
            id="username"
            nameEntryPlaceholder="Enter your name"
          />
          <NameInput
            value={data.email}
            onChange={handleInputs}
            name="email"
            id="email"
            nameEntryPlaceholder="Enter your email"
          />
          <NameInput
            value={data.password}
            id="password"
            onChange={handleInputs}
            name="password"
            nameEntryPlaceholder="Create a password"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[0.537rem]">
          <input
            className="m-0 h-[1.444rem] w-[1.375rem] relative rounded-[3.15px] box-border z-[1] border-[1px] border-solid border-gainsboro-700"
            type="checkbox"
          />
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <div className="relative text-[0.788rem] tracking-[0.03em] font-inter text-left z-[1]">
              <span className="text-darkslategray-1300">{`I agree to the `}</span>
              <span className="text-darkslategray-1200">Terms and Privacy</span>
              <span className="text-darkslategray-1300"> Policy</span>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.575rem] z-[1]">
          <button
            type="submit"
            className="cursor-pointer self-stretch flex flex-col items-center justify-center"
          >
            <div className="self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-4 bg-gray-1600 flex flex-row items-center justify-center py-[0.875rem] px-[1.25rem] border-[1px] border-solid border-lightslategray-200">
              <div className="flex flex-row items-center justify-start">
                <div className="relative text-[1rem] leading-[150%] font-semibold font-inter text-white text-left inline-block min-w-[3.688rem] whitespace-nowrap">
                  Sign up
                </div>
              </div>
            </div>
          </button>
          <div className="relative text-[0.919rem] leading-[150%] font-inter text-gray-1500 text-left">
            {`Already have an account? `}
            <span className="[text-decoration:underline]">Login here</span>.
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
