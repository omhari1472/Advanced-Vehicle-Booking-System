import Layout from "../components/Layout";
import DhakaServiceDetails from "../components/DhakaServiceDetails";
import Testimonials from "../components/Testimonials";

const LocalServiceProvide = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0rem] box-border gap-[7.856rem] leading-[normal] tracking-[normal] mq450:gap-[1.938rem] mq750:gap-[3.938rem]">
      <Layout />
      <img
        className="w-full h-[21rem] absolute !m-[0] top-[8.25rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/background-shape@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[2.081rem] box-border max-w-full text-center text-[3.375rem] text-white font-inter">
        <h1 className="m-0 w-[41.375rem] relative text-inherit capitalize font-semibold font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-[2rem] mq1050:text-[2.688rem]">
          cities where we provide our service
        </h1>
      </section>
      <img
        className="w-[0.819rem] h-[1.638rem] absolute !m-[0] top-[45.119rem] right-[2.344rem]"
        loading="lazy"
        alt=""
        src="/vector-24.svg"
      />
      <section className="w-[86.5rem] flex flex-row items-start justify-start py-[0rem] px-[2.312rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[6.256rem] max-w-full mq450:gap-[1.563rem] mq750:gap-[3.125rem]">
          <DhakaServiceDetails />
          <Testimonials />
        </div>
      </section>
      <footer className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-[4.75rem] px-[7.687rem] pb-[2.875rem] box-border gap-[4.5rem] bg-[url('/public/demo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[1.25rem] text-white font-inter lg:flex-wrap lg:pl-[3.813rem] lg:pr-[3.813rem] lg:box-border mq450:gap-[1.125rem] mq450:pt-[3.063rem] mq450:pb-[1.875rem] mq450:box-border mq750:gap-[2.25rem] mq750:pl-[1.875rem] mq750:pr-[1.875rem] mq750:box-border">
        <div className="w-[24.313rem] flex flex-col items-start justify-start pt-[0rem] pb-[3.125rem] pr-[1.312rem] pl-[0rem] box-border min-h-[15.125rem] max-w-full text-[2rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.656rem]">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[6.25rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
              Drivee
            </h3>
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
        </div>
        <div className="flex flex-col items-start justify-start gap-[1rem]">
          <div className="relative leading-[185.02%] capitalize font-medium mq450:text-[1rem] mq450:leading-[1.875rem]">
            About comapany
          </div>
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
        <div className="w-[19.125rem] flex flex-row items-start justify-between gap-[1.25rem]">
          <div className="flex flex-col items-start justify-start gap-[1rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.625rem]">
              <div className="relative leading-[185.02%] capitalize font-medium inline-block min-w-[2.438rem] mq450:text-[1rem] mq450:leading-[1.875rem]">
                city
              </div>
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
            <div className="relative leading-[185.02%] capitalize font-medium mq450:text-[1rem] mq450:leading-[1.875rem]">
              vehicle types
            </div>
            <div className="relative text-[0.875rem] leading-[185.02%] capitalize text-lightgray-100">
              <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                <li>car</li>
                <li>bike</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LocalServiceProvide;
