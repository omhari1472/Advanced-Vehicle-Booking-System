import ContentArea from "../components/ContentArea";
import Demo from "../components/Demo";

const CustomerOrder = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2.062rem] px-[0rem] pb-[0rem] box-border gap-[7.125rem] leading-[normal] tracking-[normal] mq450:gap-[1.75rem] mq750:gap-[3.563rem]">
      <header className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.375rem] pl-[1.25rem] box-border max-w-full text-left text-[1.638rem] text-gray-2200 font-inter">
        <div className="w-[72.625rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full">
          <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[5.188rem] whitespace-nowrap">
              Drivee
            </a>
          </div>
          <div className="w-[22.063rem] flex flex-col items-start justify-start pt-[0.406rem] px-[0rem] pb-[0rem] box-border max-w-full text-[1.063rem]">
            <div className="w-[19.188rem] flex flex-row items-center justify-start mq450:gap-[1rem]">
              <div className="flex-1 flex flex-row items-center justify-start mq450:gap-[1rem]">
                <div className="flex-1 flex flex-row items-center justify-start mq450:gap-[1rem]">
                  <div className="flex-1 flex flex-row items-center justify-start mq450:gap-[1rem]">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[1.968rem] mq450:gap-[1rem]">
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
                      <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[5.75rem] whitespace-nowrap">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[2.125rem] w-[2.125rem] relative rounded-[50%] object-cover min-h-[2.125rem]"
            loading="lazy"
            alt=""
            src="/ellipse-11@2x.png"
          />
        </div>
      </header>
      <div className="w-[10.375rem] hidden" />
      <ContentArea />
      <Demo propPadding="4.75rem 7.687rem 2.875rem" />
    </div>
  );
};

export default CustomerOrder;
