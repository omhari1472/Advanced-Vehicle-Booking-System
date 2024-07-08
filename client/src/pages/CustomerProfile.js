import Footer from "../components/Footer";

const CustomerProfile = () => {
  return (
    <div className="w-full relative rounded-9xs bg-white overflow-hidden flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0rem] box-border gap-[8.793rem] leading-[normal] tracking-[normal] text-left text-[3.375rem] text-white font-inter mq450:gap-[2.188rem] mq750:gap-[4.375rem]">
      <div className="w-[17.25rem] relative capitalize font-semibold hidden mq1050:text-[2.688rem] mq450:text-[2rem]">
        {" "}
        my profile
      </div>
      <div className="w-[10.375rem] hidden" />
      <section className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.375rem] pl-[1.25rem] box-border max-w-full text-left text-[1.638rem] text-gray-2200 font-inter">
        <div className="w-[72.356rem] flex flex-col items-start justify-start gap-[7.312rem] max-w-full lg:gap-[3.625rem] mq750:gap-[1.813rem]">
          <div className="w-[71.625rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[5.188rem] mq450:text-[1.313rem]">
              Drivee
            </a>
            <div className="w-[19.188rem] flex flex-row items-center justify-start mq450:gap-[1rem]">
              <div className="flex-1 flex flex-row items-center justify-start mq450:gap-[1rem]">
                <div className="flex-1 flex flex-row items-center justify-start mq450:gap-[1rem]">
                  <div className="flex-1 flex flex-row items-center justify-start mq450:gap-[1rem]">
                    <nav className="m-0 flex-1 flex flex-row items-center justify-start gap-[1.968rem] text-left text-[1.063rem] text-gray-2200 font-inter mq450:gap-[1rem]">
                      <div className="flex flex-row items-center justify-center gap-[0.25rem]">
                        <div className="flex flex-row items-center justify-start">
                          <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4rem]">
                            hosting
                          </a>
                        </div>
                        <img
                          className="h-[0.188rem] w-[0.375rem] relative"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[5.75rem]">
                        Contact us
                      </a>
                      <div className="flex flex-row items-center justify-center gap-[0.25rem]">
                        <div className="flex flex-row items-center justify-start">
                          <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4.25rem]">
                            account
                          </a>
                        </div>
                        <img
                          className="h-[0.188rem] w-[0.375rem] relative"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="h-[2.125rem] w-[2.125rem] relative rounded-[50%] object-cover min-h-[2.125rem]"
              loading="lazy"
              alt=""
              src="/ellipse-1@2x.png"
            />
          </div>
          <Footer />
        </div>
      </section>
      <footer className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-[4.75rem] px-[7.687rem] pb-[2.875rem] box-border gap-[4.5rem] bg-[url('/public/demo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[1.25rem] text-white font-inter lg:flex-wrap lg:justify-center lg:pl-[3.813rem] lg:pr-[3.813rem] lg:box-border mq450:gap-[1.125rem] mq450:pt-[3.063rem] mq450:pb-[1.875rem] mq450:box-border mq750:gap-[2.25rem] mq750:pl-[1.875rem] mq750:pr-[1.875rem] mq750:box-border">
        <div className="w-[24.313rem] flex flex-col items-start justify-start pt-[0rem] pb-[3.125rem] pr-[1.312rem] pl-[0rem] box-border min-h-[15.125rem] max-w-full text-[2rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.656rem]">
            <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[6.25rem] mq1050:text-[1.625rem] mq450:text-[1.188rem]">
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
        </div>
        <div className="flex flex-col items-start justify-start gap-[1rem]">
          <h3 className="m-0 relative text-inherit leading-[185.02%] capitalize font-medium font-inherit mq450:text-[1rem] mq450:leading-[1.875rem]">
            About comapany
          </h3>
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
              <h3 className="m-0 relative text-inherit leading-[185.02%] capitalize font-medium font-inherit inline-block min-w-[2.438rem] mq450:text-[1rem] mq450:leading-[1.875rem]">
                city
              </h3>
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
            <h3 className="m-0 relative text-inherit leading-[185.02%] capitalize font-medium font-inherit mq450:text-[1rem] mq450:leading-[1.875rem]">
              vehicle types
            </h3>
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

export default CustomerProfile;
