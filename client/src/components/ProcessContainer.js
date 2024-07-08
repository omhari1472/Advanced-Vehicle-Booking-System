import PropTypes from "prop-types";

const ProcessContainer = ({ className = "" }) => {
  return (
    <div
      className={`w-[47.238rem] flex flex-col items-end justify-start pt-[3.343rem] pb-[6.431rem] pr-[8.062rem] pl-[7.625rem] box-border relative gap-[3.012rem] min-w-[47.238rem] max-w-full text-left text-[3.15rem] text-white font-inter mq800:gap-[1.5rem] mq800:pl-[3.813rem] mq800:pr-[4rem] mq800:box-border mq1125:min-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1300:flex-1 ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/process-rect@2x.png"
      />
      <div className="w-[29.925rem] flex flex-row items-start justify-center max-w-full">
        <div className="flex flex-col items-start justify-start gap-[0.65rem]">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[4.062rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
            <a className="[text-decoration:none] relative font-bold text-[inherit] z-[1] mq800:text-[2.5rem] mq450:text-[1.875rem]">
              Drivee
            </a>
          </div>
          <div className="relative text-[2.1rem] font-medium text-gainsboro-400 z-[1] mq800:text-[1.688rem] mq450:text-[1.25rem]">
            Follow The Process
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-[1.906rem] pb-[2.193rem] pr-[0.437rem] pl-[2.25rem] box-border relative gap-[2rem] max-w-full z-[1] text-[2.625rem] font-outfit mq800:gap-[1rem]">
        <div className="w-[calc(100%_+_195.2px)] h-[calc(100%_-_195.2px)] absolute !m-[0] top-[43.694rem] right-[-12.2rem] bottom-[-31.494rem] left-[0rem] [backdrop-filter:blur(170.05px)] rounded-smi-6 bg-gray-1100 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[10.625rem] box-border max-w-full mq800:pl-[5.313rem] mq800:box-border mq450:pl-[1.25rem] mq450:box-border">
          <h1 className="m-0 w-[20.563rem] relative text-inherit font-semibold font-inherit inline-block max-w-[114%] shrink-0 z-[1] mq800:text-[2.125rem] mq450:text-[1.563rem]">
            Easy Onboarding
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[3.868rem] max-w-full text-[1.575rem] mq450:gap-[1.938rem]">
          <div className="h-[31.163rem] flex flex-col items-start justify-start pt-[0.987rem] px-[0rem] pb-[0rem] box-border">
            <div className="flex-1 flex flex-col items-end justify-start gap-[0.587rem]">
              <div className="w-[1.231rem] h-[8.4rem] flex flex-row items-start justify-end pt-[0rem] px-[0.25rem] pb-[0.393rem] box-border">
                <div className="h-[8.006rem] w-[0.7rem] relative z-[1] flex items-center justify-center">
                  <img
                    className="h-full w-full z-[1] object-contain absolute left-[0rem] top-[-0.187rem] [transform:scale(1.044)]"
                    loading="lazy"
                    alt=""
                    src="/vector-152.svg"
                  />
                </div>
              </div>
              <img
                className="w-[1.969rem] h-[1.575rem] relative z-[1]"
                loading="lazy"
                alt=""
                src="/group-10000040552.svg"
              />
              <div className="flex flex-row items-start justify-end py-[0rem] px-[1rem]">
                <img
                  className="h-[7.875rem] w-[0rem] relative object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector-162.svg"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-end py-[0rem] pr-[0.062rem] pl-[0rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                  <img
                    className="w-[1.969rem] h-[1.969rem] relative shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/notetext2.svg"
                  />
                  <div className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[1rem] pl-[0.937rem]">
                    <img
                      className="h-[8.2rem] w-[0rem] relative object-contain shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-172.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.231rem] max-w-[calc(100%_-_94px)] z-[1] mq450:gap-[1.125rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.656rem]">
              <div className="relative uppercase font-medium mq450:text-[1.25rem]">
                cash payment
              </div>
              <div className="self-stretch relative text-[0.919rem] leading-[1.509rem] font-roboto text-silver-300">
                You will provide information about you and your automobile on
                the sign-up form. Give your automobile a name, then move on to
                the following action.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.656rem]">
              <div className="relative uppercase font-medium mq450:text-[1.25rem]">
                nessary all documents
              </div>
              <div className="self-stretch h-[6.563rem] relative text-[0.919rem] leading-[1.509rem] font-roboto text-silver-300 inline-block shrink-0">
                If you have multiple vehicles, use the car manager to create a
                profile for each one. Listing each car costs $100 for initial
                setup and $20 per month—but you won't be charged until your car
                is ready for bookings.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.656rem] text-[1.313rem] font-inter">
              <div className="relative leading-[150%] uppercase font-semibold mq450:text-[1.063rem] mq450:leading-[1.563rem]">
                Contact with Us
              </div>
              <div className="self-stretch h-[10.763rem] relative text-[0.788rem] leading-[150%] text-silver-300 inline-block shrink-0">
                <p className="m-0">
                  It's very easy to get in touch with us. Just use the contact
                  form or pay us a visit for a coffee at the office. Dynamically
                  innovate competitive technology after an expanded array of
                  leadership.
                </p>
                <p className="m-0 whitespace-pre-wrap">
                  <b className="uppercase">&nbsp;</b>
                </p>
                <p className="m-0 whitespace-pre-wrap">
                  <b className="uppercase">nere by office</b>
                </p>
                <p className="m-0">
                  <span className="font-inter">
                    121 King St, Melbourne VIC 3000, Australia
                  </span>
                </p>
                <ul className="m-0 text-inherit pl-[1.349rem]">
                  <li>
                    <b className="font-inter">Phone:</b>
                    <span className="font-inter whitespace-pre-wrap">{`  `}</span>
                    <span className="font-semibold font-inter">
                      +61 2 8376 6284
                    </span>
                  </li>
                  <li>
                    <b className="font-inter whitespace-pre-wrap">
                      Email : Drivee@gmail.com
                    </b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProcessContainer.propTypes = {
  className: PropTypes.string,
};

export default ProcessContainer;
