import BikeImage from "../components/BikeImage";
import Demo from "../components/Demo";

const BikeBookingConfirm = () => {
  return (
    <div className="w-full h-[127.375rem] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[31.687rem] box-border gap-[6.875rem] leading-[normal] tracking-[normal] mq750:gap-[3.438rem] mq450:gap-[1.688rem] mq1050:h-auto">
      <header className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.638rem] text-gray-2200 font-inter">
        <div className="w-[72.5rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[5.188rem] whitespace-nowrap">
            Drivee
          </a>
          <div className="w-[19.938rem] flex flex-row items-center justify-start text-[1.063rem] mq450:gap-[1rem]">
            <div className="flex-1 flex flex-row items-center justify-start mq450:gap-[1rem]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[1.968rem] mq450:gap-[1rem]">
                <div className="flex flex-row items-center justify-center gap-[0.25rem]">
                  <div className="flex flex-row items-center justify-start">
                    <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4rem]">
                      hosting
                    </a>
                  </div>
                  <img
                    className="h-[0.375rem] w-[0.75rem] relative"
                    alt=""
                    src="/banner-icon.svg"
                  />
                </div>
                <a className="[text-decoration:none] flex-1 relative capitalize font-medium text-[inherit] inline-block min-w-[5.75rem] whitespace-nowrap">
                  Contact us
                </a>
                <div className="flex-1 flex flex-row items-center justify-center gap-[0.25rem]">
                  <div className="flex flex-row items-center justify-start">
                    <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4.25rem]">
                      account
                    </a>
                  </div>
                  <img
                    className="h-[0.375rem] w-[0.75rem] relative"
                    alt=""
                    src="/banner-icon.svg"
                  />
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
      </header>
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[2.125rem] box-border max-w-full shrink-0">
        <BikeImage />
      </section>
      <Demo />
    </div>
  );
};

export default BikeBookingConfirm;
