import {React,useState} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
export default function FormItem() {
  const history = useNavigate();

  function handleForm() {
    console.log("clicked");
    history("/contact");
  }


  const [data, setData] = useState({
    location: "",
    pickupdate: "",
    pickuptime: "",
    dropoffdate: "",
    dropofftime: "",
    duration:"",
    price:""
  });

  const calculateDuration = (pickupDate, pickupTime, dropOffDate, dropOffTime) => {
    const pickupDateTime = new Date(`${pickupDate}T${pickupTime}`);
    const dropOffDateTime = new Date(`${dropOffDate}T${dropOffTime}`);
    const durationInHours = (dropOffDateTime - pickupDateTime) / (1000 * 60 * 60);
    return durationInHours > 0 ? durationInHours : 0; // Ensure non-negative duration
  };

  // Update state and calculate duration when fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => {
      const updatedData = { ...prevData, [name]: value };
      const { pickupDate, pickupTime, dropOffDate, dropOffTime } = updatedData;
      updatedData.duration = calculateDuration(pickupDate, pickupTime, dropOffDate, dropOffTime);
      return updatedData;
    });
  };

  // const price = $duration * price;
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:4000/api/auth/bikeBooking",data)
      
  
      console.log(" successful:", response);
      if (response && response.data && response.data) {
        history("/contact");
      } else {
        console.error(" failed: Invalid response format");
      }
    } catch (error) {
      console.error(" failed:", error.message);
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    }
  };


  return (
    <div className="max-w-md p-4 mx-auto bg-[#f8f8f8] rounded-lg shadow-md">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <MapPinIcon className="w-5 h-5" />
          <span>Location</span>
        </div>
        <button type="button" className="p-2 rounded-full hover:bg-gray-200">
          <HeartIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Location"
            onChange={handleInputs}
                    name="location"
                    id="location"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <CalendarIcon className="w-5 h-5" />
            <span>Pick-Up</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              onChange={handleInputs}
                    name="pickupdate"
                    id="pickupdate"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="time"
              placeholder="12.30 PM"
              onChange={handleInputs}
                    name="pickuptime"
                    id="pickuptime"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <CalendarIcon className="w-5 h-5" />
            <span>Drop-Off</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              onChange={handleInputs}
                    name="dropoffdate"
                    id="dropoffdate"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="time"
              placeholder="12.30 PM"
              onChange={handleInputs}
                    name="dropofftime"
                    id="dropofftime"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label>Duration</label>
          <div className="flex items-center justify-between">
            <span>{data.duration } Hours</span>
            <div className="px-4 py-2 bg-white rounded shadow">
              {/* <span>Rs{price}</span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleSubmit}
          type="button"
          className="w-full px-4 py-2 text-white bg-black rounded"
        >
          BOOK NOW 
        </button>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}