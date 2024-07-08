import MainContainer from "../components/MainContainer";
import DashboardElements from "../components/DashboardElements";

const VehiclOwnerDashbord = () => {
  return (
    <div className="w-full h-[112.625rem] relative bg-whitesmoke-500 overflow-hidden flex flex-col items-end justify-start pt-[2rem] px-[0rem] pb-[27.125rem] box-border gap-[4.381rem] leading-[normal] tracking-[normal] mq450:gap-[1.125rem] mq750:gap-[2.188rem] mq1100:h-auto">
      <MainContainer />
      <section className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[3rem] text-darkslategray-300 font-inter">
        <div className="w-[72.469rem] flex flex-col items-start justify-start gap-[3.937rem] max-w-full mq750:gap-[1rem] mq1275:gap-[1.938rem]">
          <h1 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq450:text-[1.813rem] mq750:text-[2.375rem]">
            Dashboard
          </h1>
          <DashboardElements />
        </div>
      </section>
      <footer className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[4.75rem] px-[8.687rem] pb-[2.875rem] box-border gap-[9.225rem] bg-[url('/public/demo1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 text-left text-[2rem] text-white font-inter mq450:gap-[1.125rem] mq450:pt-[3.063rem] mq450:pb-[1.875rem] mq450:box-border mq750:gap-[2.313rem] mq750:pl-[2.125rem] mq750:pr-[2.125rem] mq750:box-border mq1275:flex-wrap mq1275:gap-[4.625rem] mq1275:justify-center mq1275:pl-[4.313rem] mq1275:pr-[4.313rem] mq1275:box-border">
        <div className="w-[22.963rem] flex flex-col items-start justify-start gap-[0.656rem] min-w-[22.963rem] max-w-full mq750:min-w-full mq1275:flex-1">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[6.25rem] mq450:text-[1.188rem] mq750:text-[1.625rem]">
            Drivee
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.281rem] text-[1.181rem] text-darkgray-400 mq450:gap-[1.125rem]">
            <div className="self-stretch relative leading-[185.02%] capitalize">
              is just a drivee ride away.take control of you journey today
            </div>
            <div className="flex flex-row items-start justify-start gap-[1.612rem]">
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/frame-138.svg"
              />
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/frame-139.svg"
              />
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/frame-140.svg"
              />
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/frame-141.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[34rem] flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border min-w-[34rem] max-w-full text-[1.25rem] mq1100:min-w-full mq1275:flex-1">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <h2 className="m-0 relative text-inherit leading-[185.02%] capitalize font-medium font-inherit mq450:text-[1rem] mq450:leading-[1.875rem]">
                About comapany
              </h2>
              <div className="relative text-[0.875rem] leading-[185.02%] capitalize text-lightgray-100">
                <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                  <li>About us</li>
                  <li>Careers</li>
                  <li>help</li>
                  <li>contact us</li>
                  <li>fee policy</li>
                  <li>privacy policy</li>
                  <li>term and conditions</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] gap-[1rem]">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.625rem]">
                <h2 className="m-0 relative text-inherit leading-[185.02%] capitalize font-medium font-inherit inline-block min-w-[2.438rem] mq450:text-[1rem] mq450:leading-[1.875rem]">
                  city
                </h2>
              </div>
              <div className="relative text-[0.875rem] leading-[185.02%] capitalize text-lightgray-100">
                <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                  <li>dhaka</li>
                  <li>chittagong</li>
                  <li>sylhet</li>
                  <li>kulna</li>
                  <li>borishal</li>
                  <li>rajshahi</li>
                  <li>rongpur</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <h2 className="m-0 relative text-inherit leading-[185.02%] capitalize font-medium font-inherit mq450:text-[1rem] mq450:leading-[1.875rem]">
                vehicle types
              </h2>
              <div className="relative text-[0.875rem] leading-[185.02%] capitalize text-lightgray-100">
                <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                  <li>car</li>
                  <li>bike</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VehiclOwnerDashbord;
