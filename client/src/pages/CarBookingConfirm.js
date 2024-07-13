import Hero from "../components/Hero";
import FrameComponent from "../components/FrameComponent";
import Demo from "../components/Demo";

const CarBookingConfirm = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0rem] box-border gap-[6.375rem] leading-[normal] tracking-[normal] text-left text-[1.5rem] text-black font-inter mq750:gap-[3.188rem] mq450:gap-[1.563rem]">
      <header className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[0.5rem] box-border max-w-full text-left text-[1.638rem] text-gray-2200 font-inter">
        <div className="w-[72.5rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[5.188rem] whitespace-nowrap">
            Drivee
          </a>
          <div className="w-[19.938rem] flex flex-row items-center justify-start mq450:w-[0rem] mq450:gap-[1rem]">
            <nav className="m-0 flex-1 flex flex-row items-center justify-start gap-[1.968rem] text-left text-[1.063rem] text-gray-2200 font-inter mq450:hidden mq450:gap-[1rem]">
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
            </nav>
          </div>
          <img
            className="h-[2.125rem] w-[2.125rem] relative rounded-[50%] object-cover min-h-[2.125rem]"
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
          />
        </div>
      </header>
      <Hero />
      <div className="w-[53.313rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
        <div className="w-[35.688rem] flex flex-col items-start justify-start gap-[1rem] max-w-full">
          <div className="relative capitalize font-semibold mq450:text-[1.188rem]">
            BMW M2 2020
          </div>
          <div className="self-stretch h-[6.125rem] relative text-[1.125rem] leading-[160%] capitalize text-darkslategray-1000 inline-block shrink-0">
            The BMW M2 is the high-performance version of the 2 Series 2-door
            coupé. The first generation of the M2 is the F87 coupé and is
            powered by turbocharged.
          </div>
        </div>
      </div>
      <FrameComponent />
      <Demo propPadding="4.75rem 8.625rem 2.875rem" />
    </div>
  );
};

export default CarBookingConfirm;
