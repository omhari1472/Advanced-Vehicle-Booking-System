import PropTypes from "prop-types";

const Testimonial = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[3.562rem] box-border max-w-full text-left text-[3.125rem] text-gray-1600 font-inter mq450:pb-[1.5rem] mq450:box-border mq1125:pb-[2.313rem] mq1125:box-border ${className}`}
    >
      <div className="flex-1 bg-whitesmoke-400 overflow-hidden flex flex-col items-center justify-start pt-[6.75rem] pb-[6.718rem] pr-[1.25rem] pl-[1.312rem] box-border gap-[2.125rem] max-w-full z-[1] mq450:pt-[2.813rem] mq450:pb-[2.813rem] mq450:box-border mq800:gap-[1.063rem] mq1125:pt-[4.375rem] mq1125:pb-[4.375rem] mq1125:box-border">
        <div className="w-[72.438rem] flex flex-row items-start justify-center py-[0rem] pr-[0.062rem] pl-[0rem] box-border max-w-full">
          <h1 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq450:text-[1.875rem] mq800:text-[2.5rem]">
            what our customer saying...
          </h1>
        </div>
        <div className="w-[72.438rem] grid flex-row items-end justify-start gap-[1.243rem] max-w-full grid-cols-[repeat(3,_minmax(280px,_1fr))] text-[1rem] text-white mq800:grid-cols-[minmax(280px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(280px,_485px))]">
          <div className="flex flex-row items-end justify-start relative min-h-[34.875rem] max-w-full">
            <img
              className="h-full w-full absolute !m-[0] top-[0rem] left-[0rem] rounded-smi object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-822@2x.png"
            />
            <div className="flex-1 rounded-t-none rounded-b-sm [background:linear-gradient(69.77deg,_#0f0f1f,_rgba(69,_70,_84,_0))] flex flex-col items-start justify-start pt-[1.218rem] pb-[3.156rem] pr-[1.25rem] pl-[1.312rem] box-border gap-[0.562rem] max-w-full z-[1]">
              <div className="w-[23.313rem] h-[14.438rem] relative rounded-t-none rounded-b-sm [background:linear-gradient(69.77deg,_#0f0f1f,_rgba(69,_70,_84,_0))] hidden max-w-full" />
              <div className="relative leading-[1.688rem] capitalize font-semibold z-[2]">
                Excellent Service! Car Rent Service
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[166%] capitalize text-whitesmoke-800 z-[2]">
                We have been using Rentaly for our trips needs for several years
                now and have always been happy with their service. Their
                customer support is Excellent Service! and they are always
                available to help with any issues we have. Their prices are also
                very competitive.
              </div>
              <div className="w-[11.125rem] flex flex-row items-start justify-start gap-[0.312rem]">
                <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                  <div className="w-[2.313rem] h-[0.063rem] relative box-border z-[2] border-t-[1px] border-solid border-white" />
                </div>
                <div className="flex-1 relative leading-[0.875rem] capitalize font-semibold z-[2]">
                  <p className="m-0">Rovert harvest</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.093rem] box-border max-w-full">
            <div className="self-stretch flex flex-row items-end justify-start pt-[0rem] px-[0rem] pb-[0.031rem] box-border relative min-h-[34.813rem] max-w-full">
              <img
                className="h-full w-full absolute !m-[0] top-[0rem] bottom-[0rem] left-[0rem] rounded-smi max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-823@2x.png"
              />
              <div className="flex-1 rounded-t-none rounded-br-sm rounded-bl-smi [background:linear-gradient(69.77deg,_#0f0f1f,_rgba(69,_70,_84,_0))] flex flex-col items-start justify-start pt-[1.281rem] pb-[3.093rem] pr-[1.25rem] pl-[1.375rem] box-border gap-[0.562rem] max-w-full z-[1]">
                <div className="w-[23.313rem] h-[14.438rem] relative rounded-t-none rounded-br-sm rounded-bl-smi [background:linear-gradient(69.77deg,_#0f0f1f,_rgba(69,_70,_84,_0))] hidden max-w-full" />
                <div className="relative leading-[1.688rem] capitalize font-semibold z-[2]">
                  Excellent Service! Car Rent Service
                </div>
                <div className="self-stretch relative text-[0.75rem] leading-[166%] capitalize text-whitesmoke-800 z-[2]">
                  I have been using Rentaly for my Car Rental needs for over 5
                  years now. I have never had any problems with their service.
                  Their customer support is always responsive and helpful. I
                  would recommend Rentaly to anyone looking for a reliable Car
                  Rental provider.
                </div>
                <div className="w-[11.125rem] flex flex-row items-start justify-start gap-[0.312rem]">
                  <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                    <div className="w-[2.313rem] h-[0.063rem] relative box-border z-[2] border-t-[1px] border-solid border-white" />
                  </div>
                  <div className="flex-1 relative leading-[0.875rem] capitalize font-semibold z-[2]">
                    Jovan Reels
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-end justify-start relative min-h-[34.875rem] max-w-full">
            <img
              className="h-full w-full absolute !m-[0] top-[0rem] left-[0rem] rounded-smi object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-824@2x.png"
            />
            <div className="flex-1 rounded-t-none rounded-br-sm rounded-bl-smi [background:linear-gradient(69.77deg,_#0f0f1f,_rgba(69,_70,_84,_0))] flex flex-col items-start justify-start pt-[1.156rem] px-[1.25rem] pb-[3.406rem] box-border gap-[1.937rem] max-w-full z-[1] mq450:gap-[0.938rem]">
              <div className="w-[23.313rem] h-[14.438rem] relative rounded-t-none rounded-br-sm rounded-bl-smi [background:linear-gradient(69.77deg,_#0f0f1f,_rgba(69,_70,_84,_0))] hidden max-w-full" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative leading-[1.688rem] capitalize font-semibold z-[2]">
                  Excellent Service! Car Rent Service
                </div>
                <div className="self-stretch relative text-[0.75rem] leading-[166%] capitalize text-whitesmoke-800 z-[2]">
                  Endorsed by industry experts, Rentaly is the Car Rental
                  solution you can trust. With years of experience in the field,
                  we provide fast, reliable and secure Car Rental services.
                </div>
              </div>
              <div className="w-[11.125rem] flex flex-row items-start justify-start gap-[0.312rem]">
                <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                  <div className="w-[2.313rem] h-[0.063rem] relative box-border z-[2] border-t-[1px] border-solid border-white" />
                </div>
                <div className="flex-1 relative leading-[0.875rem] capitalize font-semibold z-[2]">
                  <p className="m-0">Kanesha Keyton</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = {
  className: PropTypes.string,
};

export default Testimonial;
