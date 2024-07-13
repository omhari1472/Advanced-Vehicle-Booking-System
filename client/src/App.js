import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DrivveLandingPage from "./pages/DrivveLandingPage";
import BikeBookingConfirm from "./pages/BikeBookingConfirm";
import CarBookingConfirm from "./pages/CarBookingConfirm";
import ContactUs from "./pages/ContactUs";
import InsuranceAndPolicy from "./pages/InsuranceAndPolicy";
import CustomerOrder from "./pages/CustomerOrder";
import CustomerProfile from "./pages/CustomerProfile";
import VehiclOwnerDashbord from "./pages/VehiclOwnerDashbord";
import DashboardOfCustomer from "./pages/DashboardOfCustomer";
import BikeHsotingAndRefer from "./pages/BikeHsotingAndRefer";
import CarHsotingAndRefer from "./pages/CarHsotingAndRefer";
import Bike from "./pages/Bike";
import Car from "./pages/Car";
import CreateAccount from "./pages/CreateAccount";
import Contact from "./pages/Contact";
import EasyOnboarding from "./pages/EasyOnboarding";
import LocalServiceProvide from "./pages/LocalServiceProvide";
import AvailabilityCalendar from "./pages/AvailabilityCalender";
import LoginUser from "./pages/LoginUser";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/-bike-booking-confirm":
        title = "";
        metaDescription = "";
        break;
      case "/car-booking-confirm":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/insurance-and-policy":
        title = "";
        metaDescription = "";
        break;
      case "/customer-order":
        title = "";
        metaDescription = "";
        break;
      case "/customer-profile":
        title = "";
        metaDescription = "";
        break;
      case "/vehicl-owner-dashbord":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-of-customer":
        title = "";
        metaDescription = "";
        break;
      case "/bike-hsoting-and-refer":
        title = "";
        metaDescription = "";
        break;
      case "/car-hsoting-and-refer":
        title = "";
        metaDescription = "";
        break;
      case "/bike":
        title = "";
        metaDescription = "";
        break;
      case "/car":
        title = "";
        metaDescription = "";
        break;
      case "/create-account":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/easy-onboarding":
        title = "";
        metaDescription = "";
        break;
      case "/local-service-provide":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DrivveLandingPage />} />
      <Route path="/bike-booking-confirm" element={<BikeBookingConfirm />} />
      <Route path="/car-booking-confirm" element={<CarBookingConfirm />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/insurance-and-policy" element={<InsuranceAndPolicy />} />
      <Route path="/customer-order" element={<CustomerOrder />} />
      <Route path="/customer-profile" element={<CustomerProfile />} />
      <Route path="/vehicle-owner-dashbord" element={<VehiclOwnerDashbord />} />
      <Route path="/dashboard-of-customer" element={<DashboardOfCustomer />} />
      <Route path="/bike-hsoting-and-refer" element={<BikeHsotingAndRefer />} />
      <Route path="/car-hsoting-and-refer" element={<CarHsotingAndRefer />} />
      <Route path="/bike" element={<Bike />} />
      <Route path="/car" element={<Car />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/easy-onboarding" element={<EasyOnboarding />} />
      <Route path="/local-service-provide" element={<LocalServiceProvide />} />
      <Route path="/availability-calender" element={<AvailabilityCalendar />} />
      <Route path="/insurance" element={<InsuranceAndPolicy />} />
        <Route path="/my-profile" element={<CustomerProfile />} />
        <Route path="/my-order" element={<CustomerOrder />} />
        <Route path="/login" element={<LoginUser />} />
    </Routes>
  );
}
export default App;
