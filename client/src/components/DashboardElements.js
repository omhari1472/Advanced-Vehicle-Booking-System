import ActionsContainer from "./ActionsContainer";
import MetricLabelsContainer from "./MetricLabelsContainer";
import PropTypes from "prop-types";

const DashboardElements = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[4.375rem] max-w-full text-left text-[1.419rem] text-gray-1800 font-inter mq750:gap-[1.063rem] mq1275:gap-[2.188rem] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.337rem] shrink-0 max-w-full mq1100:flex-wrap">
        <ActionsContainer
          ellipse24="/ellipse-242@2x.png"
          iconamoonprofileFill="/iconamoonprofilefill.svg"
          uiscalender="/uiscalender.svg"
          myWallet="my Wallet"
          uiscalender1="/uiscalender.svg"
          entypologOut="/entypologout.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.356rem] min-w-[32.188rem] max-w-full text-[2.844rem] text-gray-2000 mq750:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.418rem] mq750:flex-wrap">
            <div className="flex-1 shadow-[0px_4px_8px_rgba(145,_145,_145,_0.15)] rounded-[6.82px] bg-white box-border overflow-hidden flex flex-row items-start justify-start py-[2.25rem] pr-[0.562rem] pl-[1.187rem] min-w-[11.688rem] border-[2px] border-solid border-aliceblue">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.418rem]">
                <img
                  className="w-[2.25rem] h-[2.25rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/entypobackintime.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.356rem] shrink-0">
                  <div className="relative capitalize mq450:text-[1.688rem] mq750:text-[2.25rem]">
                    <span className="font-semibold">{`$122 `}</span>
                    <span className="text-[0.75rem] font-medium">
                      from last month
                    </span>
                    <span className="font-semibold">{` `}</span>
                  </div>
                  <h2 className="m-0 relative text-[1.375rem] capitalize font-medium font-inherit text-gray-400 inline-block min-w-[6.5rem] mq450:text-[1.125rem]">
                    Turn Over
                  </h2>
                </div>
              </div>
            </div>
            <MetricLabelsContainer
              ionwallet="/ionwallet.svg"
              prop="$2342"
              yourWallet="Your Wallet"
            />
            <MetricLabelsContainer
              ionwallet="/fluentmoneyoff24filled.svg"
              prop="$345"
              yourWallet="drivee Returns"
              propPadding="2.5rem 1.375rem"
            />
          </div>
          <div className="self-stretch rounded-[6.82px] bg-white box-border overflow-hidden flex flex-col items-start justify-start py-[1.437rem] px-[1.562rem] gap-[1.687rem] max-w-full text-[1.419rem] text-gray-1300 border-[3px] border-solid border-aliceblue">
            <div className="relative capitalize font-semibold mq450:text-[1.125rem]">
              my vehicle Status
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.181rem] max-w-full text-[0.875rem] text-dimgray-300">
              <div className="w-[45.375rem] flex flex-row items-start justify-start py-[0rem] px-[0.562rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between py-[0rem] pr-[0.062rem] pl-[0rem] box-border max-w-full gap-[1.25rem] mq750:flex-wrap">
                  <div className="relative capitalize font-medium inline-block min-w-[2.5rem]">
                    car id
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem]">
                    <div className="relative capitalize font-medium inline-block min-w-[3.938rem]">
                      total Trip
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.937rem] pl-[0rem]">
                    <div className="relative capitalize font-medium inline-block min-w-[2.563rem]">
                      Driver
                    </div>
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[2rem]">
                    date
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.312rem] pl-[0rem]">
                    <div className="relative capitalize font-medium inline-block min-w-[5.375rem]">
                      total income
                    </div>
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[2.75rem]">
                    status
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] text-[0.75rem] text-gray-900 mq750:flex-wrap">
                <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.437rem] pl-[0rem] gap-[1.118rem]">
                  <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem]">
                    <div className="relative capitalize font-medium inline-block min-w-[2.875rem]">
                      #02345
                    </div>
                  </div>
                  <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem]">
                    <div className="relative capitalize font-medium inline-block min-w-[2.875rem]">
                      #02345
                    </div>
                  </div>
                  <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem]">
                    <div className="relative capitalize font-medium inline-block min-w-[2.875rem]">
                      #02345
                    </div>
                  </div>
                  <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem]">
                    <div className="relative capitalize font-medium inline-block min-w-[2.875rem]">
                      #02345
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-[0rem] pb-[0.256rem] pr-[1.437rem] pl-[0rem]">
                  <div className="flex flex-col items-start justify-start gap-[1.706rem]">
                    <div className="relative capitalize inline-block min-w-[0.938rem]">
                      23
                    </div>
                    <div className="relative capitalize inline-block min-w-[1rem]">
                      43
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0.062rem]">
                      <div className="relative capitalize inline-block min-w-[0.813rem]">
                        12
                      </div>
                    </div>
                    <div className="relative capitalize inline-block min-w-[1rem]">{`34 `}</div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.256rem]">
                  <div className="flex flex-col items-start justify-start gap-[1.706rem]">
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.437rem] pl-[0.5rem] text-[0.713rem]">
                      <div className="relative capitalize inline-block min-w-[3.563rem]">
                        Mac Robin
                      </div>
                    </div>
                    <div className="relative capitalize inline-block min-w-[4.5rem]">
                      Alen shopon
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.437rem] pl-[0.5rem]">
                      <div className="relative capitalize inline-block min-w-[3.563rem]">
                        Wax brain
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[0.312rem]">
                      <div className="relative capitalize inline-block min-w-[3.875rem]">
                        Jami Moon
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-[0rem] pb-[0.256rem] pr-[1.687rem] pl-[0rem]">
                  <div className="flex flex-col items-start justify-start gap-[1.706rem]">
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
                      <div className="relative capitalize inline-block min-w-[3.563rem]">
                        22/1/2019
                      </div>
                    </div>
                    <div className="relative capitalize inline-block min-w-[3.688rem]">
                      29/4/2019
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
                      <div className="relative capitalize inline-block min-w-[3.563rem]">
                        12/6/2019
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem]">
                      <div className="relative capitalize inline-block min-w-[3.625rem]">
                        22/7/2019
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-[0rem] pb-[0.256rem] pr-[1.687rem] pl-[0rem]">
                  <div className="flex flex-col items-start justify-start gap-[1.731rem]">
                    <div className="relative capitalize inline-block min-w-[1.875rem] whitespace-nowrap">
                      $500
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem] text-[0.713rem]">
                      <div className="relative capitalize inline-block min-w-[1.813rem] whitespace-nowrap">
                        $500
                      </div>
                    </div>
                    <div className="relative capitalize inline-block min-w-[1.938rem] whitespace-nowrap">
                      $300
                    </div>
                    <div className="relative capitalize inline-block min-w-[1.938rem] whitespace-nowrap">
                      $900
                    </div>
                  </div>
                </div>
                <div className="w-[5.138rem] flex flex-col items-start justify-start gap-[1.187rem] text-white">
                  <div className="rounded-[72.78px] bg-forestgreen flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem]">
                    <div className="relative capitalize font-semibold inline-block min-w-[4rem]">
                      completed
                    </div>
                  </div>
                  <div className="rounded-[72.78px] bg-crimson flex flex-row items-start justify-start py-[0.25rem] px-[0.687rem]">
                    <div className="relative capitalize font-semibold inline-block min-w-[3.688rem]">
                      cancelled
                    </div>
                  </div>
                  <div className="rounded-[72.78px] bg-forestgreen flex flex-row items-start justify-start py-[0.25rem] px-[0.5rem]">
                    <div className="relative capitalize font-semibold inline-block min-w-[4rem]">
                      completed
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0.062rem]">
                    <div className="flex-1 rounded-[72.78px] bg-forestgreen flex flex-row items-start justify-start pt-[0.243rem] px-[0.937rem] pb-[0.237rem]">
                      <div className="relative capitalize font-semibold inline-block min-w-[3rem]">
                        Booking
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative rounded-9xs max-w-full overflow-hidden max-h-full object-cover shrink-0"
        loading="lazy"
        alt=""
        src="/image-49@2x.png"
      />
    </div>
  );
};

DashboardElements.propTypes = {
  className: PropTypes.string,
};

export default DashboardElements;
