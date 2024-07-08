import ActionsContainer from "./ActionsContainer";
import StatItems from "./StatItems";
import PropTypes from "prop-types";

const RecentOrders = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[2.844rem] text-gray-2000 font-inter ${className}`}
    >
      <div className="w-[72.5rem] flex flex-row items-start justify-start gap-[1.212rem] max-w-full mq1050:flex-wrap">
        <ActionsContainer
          ellipse24="/ellipse-241@2x.png"
          iconamoonprofileFill="/iconamoonprofilefill.svg"
          uiscalender="/uiscalender1.svg"
          myWallet="my order"
          uiscalender1="/uiscalender1.svg"
          entypologOut="/entypologout.svg"
          propBorder="3px solid #efefef"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.606rem] min-w-[32.313rem] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.187rem] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[1.418rem] max-w-full mq1050:flex-1 mq750:flex-wrap">
              <StatItems
                statIcons="/vector-22.svg"
                statsNumbers="03"
                totalOrder="total order"
              />
              <StatItems
                statIcons="/vector-3.svg"
                statsNumbers="12"
                totalOrder="coupons"
                propFlex="1"
                propPadding="2.25rem 1.375rem 2.312rem"
              />
              <div className="flex-1 rounded-[6.82px] bg-white box-border overflow-hidden flex flex-row items-start justify-start py-[2.25rem] px-[1.375rem] min-w-[8.688rem] border-[3px] border-solid border-whitesmoke-1000">
                <div className="h-[9.031rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[6.756rem] box-border gap-[1.425rem]">
                  <img
                    className="w-[2.275rem] h-[2.275rem] relative shrink-0"
                    loading="lazy"
                    alt=""
                    src="/vector-4.svg"
                  />
                  <div className="flex flex-col items-start justify-start gap-[0.212rem] shrink-0">
                    <div className="relative capitalize font-semibold inline-block min-w-[3.625rem] mq1050:text-[2.25rem] mq450:text-[1.688rem]">
                      24
                    </div>
                    <h2 className="m-0 relative text-[1.375rem] capitalize font-medium font-inherit text-gray-400 mq450:text-[1.125rem]">
                      cancel order
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-[6.82px] bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-[1.437rem] pb-[1.5rem] pr-[1.25rem] pl-[1.562rem] gap-[1.687rem] max-w-full text-[1.419rem] text-gray-1300 border-[3px] border-solid border-whitesmoke-1000">
            <div className="relative capitalize font-semibold mq450:text-[1.125rem]">
              my recent order
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.118rem] max-w-full text-[0.875rem] text-dimgray-300">
              <div className="w-[45.169rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
                <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[4.813rem]">
                    Booking No
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[3.063rem]">
                    vehicle
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-[0rem] pr-[1rem] pl-[0rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[7.063rem]">
                    pick up location
                  </div>
                </div>
                <div className="relative capitalize font-medium inline-block min-w-[2rem]">
                  date
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem] gap-[1.681rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[5rem]">
                    Return date
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[3.688rem]">
                    Payment
                  </div>
                </div>
                <div className="relative capitalize font-medium inline-block min-w-[2.75rem]">
                  status
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.375rem] box-border max-w-full text-[0.75rem] text-gray-900">
                <div className="flex-1 flex flex-row items-start justify-start gap-[1.55rem] max-w-full mq750:flex-wrap">
                  <div className="w-[11.675rem] flex flex-col items-start justify-start gap-[1.118rem] min-w-[11.675rem] mq750:flex-1">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                      <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.287rem] px-[0.562rem] pb-[0.281rem]">
                        <div className="relative capitalize font-medium inline-block min-w-[2.875rem]">
                          #02345
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                        <div className="relative capitalize inline-block min-w-[5.563rem]">
                          jeep renegade
                        </div>
                      </div>
                    </div>
                    <div className="w-[10.325rem] flex flex-row items-start justify-between gap-[1.25rem]">
                      <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.287rem] px-[0.562rem] pb-[0.281rem]">
                        <div className="relative capitalize font-medium inline-block min-w-[2.875rem]">
                          #02345
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                        <div className="relative capitalize inline-block min-w-[3rem]">
                          R15 bike
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                      <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.287rem] px-[0.562rem] pb-[0.281rem]">
                        <div className="relative capitalize font-medium inline-block min-w-[2.875rem]">
                          #02345
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                        <div className="relative capitalize inline-block min-w-[5.563rem]">
                          jeep renegade
                        </div>
                      </div>
                    </div>
                    <div className="w-[9.713rem] flex flex-row items-start justify-between gap-[1.25rem]">
                      <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.287rem] px-[0.562rem] pb-[0.281rem]">
                        <div className="relative capitalize font-medium inline-block min-w-[2.875rem]">
                          #02345
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                        <div className="relative capitalize inline-block min-w-[1.75rem]">{`jeep `}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-start gap-[1.187rem] min-w-[21.25rem] max-w-full mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq750:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] text-[0.713rem]">
                        <div className="relative capitalize">
                          Amborkhana point,sylhet
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.062rem] pb-[0rem] pr-[0.437rem] pl-[0rem]">
                        <div className="relative capitalize inline-block min-w-[3.563rem]">
                          22/1/2019
                        </div>
                      </div>
                      <div className="w-[4.988rem] flex flex-col items-start justify-start pt-[0.312rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border">
                        <div className="relative capitalize inline-block min-w-[3.563rem]">
                          24/1/2019
                        </div>
                      </div>
                      <div className="w-[2.369rem] flex flex-col items-start justify-start pt-[0.312rem] pb-[0rem] pr-[0.437rem] pl-[0rem] box-border">
                        <div className="relative capitalize inline-block min-w-[1.875rem] whitespace-nowrap">
                          $500
                        </div>
                      </div>
                      <div className="rounded-[72.78px] bg-forestgreen flex flex-row items-start justify-start pt-[0.287rem] px-[0.562rem] pb-[0.281rem] text-white">
                        <div className="relative capitalize font-semibold inline-block min-w-[4rem]">
                          completed
                        </div>
                      </div>
                    </div>
                    <div className="w-[32.069rem] flex flex-row items-start justify-end py-[0rem] px-[0.062rem] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                          <div className="relative capitalize inline-block min-w-[7.813rem]">
                            housing estate,sylhet
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[0.562rem] pl-[0rem]">
                          <div className="relative capitalize inline-block min-w-[3.688rem]">
                            29/4/2019
                          </div>
                        </div>
                        <div className="w-[4.756rem] flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border">
                          <div className="relative capitalize inline-block min-w-[3.25rem]">
                            6/5/2019
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[0.5rem] pl-[0rem] text-[0.713rem]">
                          <div className="relative capitalize inline-block min-w-[1.813rem] whitespace-nowrap">
                            $500
                          </div>
                        </div>
                        <div className="rounded-[72.78px] bg-crimson flex flex-row items-start justify-start py-[0.25rem] px-[0.687rem] text-white">
                          <div className="relative capitalize font-semibold inline-block min-w-[3.688rem]">
                            cancelled
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.062rem] pl-[0rem] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[1.331rem] max-w-full mq750:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                          <div className="relative capitalize">
                            shubid bazar point,sylhet
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-between py-[0rem] pr-[0.062rem] pl-[0rem] box-border min-w-[14.375rem] max-w-full gap-[1.25rem] mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                            <div className="relative capitalize inline-block min-w-[3.563rem]">
                              12/6/2019
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[0.875rem] pl-[0rem]">
                            <div className="relative capitalize inline-block min-w-[3.563rem]">
                              12/6/2019
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                            <div className="relative capitalize inline-block min-w-[1.938rem] whitespace-nowrap">
                              $300
                            </div>
                          </div>
                          <div className="rounded-[72.78px] bg-forestgreen flex flex-row items-start justify-start py-[0.25rem] px-[0.5rem] text-white">
                            <div className="relative capitalize font-semibold inline-block min-w-[4rem]">
                              completed
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.062rem] pl-[0.25rem] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[1.612rem] max-w-full mq750:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                          <div className="relative capitalize">
                            lama bazar point,sylhet
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[0.687rem] pl-[0rem]">
                          <div className="relative capitalize inline-block min-w-[3.625rem]">
                            22/7/2019
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[0.75rem] pl-[0rem] box-border min-w-[6.188rem]">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                            <div className="relative capitalize inline-block min-w-[3.688rem]">
                              24/7/2019
                            </div>
                            <div className="relative capitalize inline-block min-w-[1.938rem] whitespace-nowrap">
                              $900
                            </div>
                          </div>
                        </div>
                        <div className="w-[4.975rem] rounded-[72.78px] bg-forestgreen flex flex-row items-start justify-start pt-[0.243rem] px-[0.937rem] pb-[0.237rem] box-border text-white">
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
        </div>
      </div>
    </div>
  );
};

RecentOrders.propTypes = {
  className: PropTypes.string,
};

export default RecentOrders;
