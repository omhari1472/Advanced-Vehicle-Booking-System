import PropTypes from "prop-types";
import DashBoard from "./DashBoard";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
const ContentArea = ({ className = "" }) => {


  const history = useNavigate();

  function handleInsuranceClick() {
    console.log("clicked");
    history("/insurance");
  }
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[3.5rem] pr-[1.437rem] pl-[1.25rem] box-border max-w-full text-left text-[3rem] text-darkslategray-300 font-inter mq1050:pb-[2.25rem] mq1050:box-border mq450:pb-[1.438rem] mq450:box-border ${className}`}
    >
      <div className="w-[72.313rem] flex flex-col items-start justify-start gap-[4rem] max-w-full lg:gap-[2rem] mq750:gap-[1rem]">
        <h1 className="m-0 w-[14.313rem] relative text-inherit capitalize font-semibold font-inherit inline-block mq1050:text-[2.375rem] mq450:text-[1.813rem]">
          {" "}
          My Order
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.187rem] max-w-full text-[1.419rem] text-gray-1800 mq1050:flex-wrap">
          <div className="w-[21.563rem] rounded-[6.82px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[4.125rem] pb-[1.312rem] pr-[1.375rem] pl-[1.812rem] min-w-[21.563rem] max-w-full z-[1] border-[3px] border-solid border-whitesmoke-1000 mq1050:flex-1 mq450:min-w-full mq750:pt-[2.688rem] mq750:pb-[1.25rem] mq750:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10.437rem] mq450:gap-[5.188rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.137rem]">
                <img
                  className="w-[7.106rem] h-[7.106rem] relative rounded-[50%] object-contain"
                  loading="lazy"
                  alt=""
                  src="/ellipse-24@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.356rem]">
                  <div className="relative capitalize font-semibold mq450:text-[1.125rem]">
                    Rovan Reels
                  </div>
                  <div className="relative text-[0.994rem] lowercase text-dimgray-700 whitespace-nowrap">
                    RovanReels@gmail.com
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.281rem] text-[0.994rem] text-gray-1200">
                  <DashBoard />
                 <Profile/> 
                  <div className="self-stretch rounded-[4.55px] bg-gray-1600 flex flex-row items-center justify-start pt-[0.637rem] pb-[0.643rem] pr-[10.187rem] pl-[0.937rem] gap-[0.568rem] whitespace-nowrap text-white mq450:pr-[1.25rem] mq450:box-border">
                    <img
                      className="h-[1.706rem] w-[1.706rem] relative overflow-hidden shrink-0"
                      alt=""
                      src="/uiscalender.svg"
                    />
                    
                    <div className="relative capitalize font-semibold inline-block min-w-[4.5rem]">
                      my order
                    </div>
                  </div>
                  <button type="button" onClick={handleInsuranceClick}>
                    <div className="self-stretch rounded-[4.55px] bg-white flex flex-row items-center justify-start pt-[0.643rem] pb-[0.637rem] pr-[5.937rem] pl-[0.937rem] gap-[0.568rem] whitespace-nowrap mq450:pr-[1.25rem] mq450:box-border">
                      <img
                        className="h-[1.706rem] w-[1.706rem] relative overflow-hidden shrink-0"
                        alt=""
                        src="/iconamoonprofilefill.svg"
                      />
                      <div className="relative font-medium capitalize">{`insurance & policy`}</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="rounded-[4.55px] flex flex-row items-center justify-start py-[0.562rem] pr-[10.812rem] pl-[0.937rem] gap-[0.568rem] text-[0.994rem] text-gray-1200 border-[0.5px] border-solid border-gainsboro-600 mq450:pr-[1.25rem] mq450:box-border">
                <img
                  className="h-[1.419rem] w-[1.419rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/entypologout.svg"
                />
                <div className="relative capitalize font-medium inline-block min-w-[4.125rem]">
                  sign out
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.268rem] min-w-[32.188rem] max-w-full text-gray-1600 mq750:min-w-full">
            <div className="self-stretch rounded-[6.82px] bg-white box-border overflow-hidden flex flex-col items-start justify-start py-[1.812rem] pr-[1.25rem] pl-[1.562rem] gap-[1.687rem] max-w-full z-[1] border-[3px] border-solid border-whitesmoke-1000">
              <div className="relative capitalize font-semibold mq450:text-[1.125rem]">
                Booking order
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem] max-w-full text-[0.875rem] text-dimgray-300">
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
                  <div className="flex-1 flex flex-row items-start justify-start gap-[2.093rem] max-w-full mq750:flex-wrap mq750:gap-[1.063rem]">
                    <div className="flex flex-col items-start justify-start gap-[1.118rem]">
                      <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem] shrink-0">
                        <div className="relative capitalize font-medium inline-block min-w-[2.875rem]">
                          #02345
                        </div>
                      </div>
                      <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem] shrink-0">
                        <div className="relative capitalize font-medium inline-block min-w-[2.875rem]">
                          #02345
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] pb-[0rem] pr-[1.187rem] pl-[0rem] box-border min-w-[18.375rem] max-w-full">
                      <div className="self-stretch flex flex-row items-end justify-start gap-[1.75rem] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[1.687rem]">
                          <div className="relative capitalize inline-block min-w-[5.563rem]">
                            jeep renegade
                          </div>
                          <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.375rem] pl-[1.187rem]">
                            <div className="relative capitalize inline-block min-w-[3rem]">
                              R15 bike
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[1.75rem] text-[0.713rem]">
                          <div className="relative capitalize">
                            Amborkhana point,sylhet
                          </div>
                          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0.562rem] text-[0.75rem]">
                            <div className="relative capitalize inline-block min-w-[7.813rem]">
                              housing estate,sylhet
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-end justify-between min-w-[6.188rem] gap-[1.25rem]">
                          <div className="flex flex-col items-start justify-start gap-[1.937rem]">
                            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
                              <div className="relative capitalize inline-block min-w-[3.563rem]">
                                22/1/2019
                              </div>
                            </div>
                            <div className="relative capitalize inline-block min-w-[3.688rem]">
                              29/4/2019
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[1.687rem]">
                            <div className="relative capitalize inline-block min-w-[3.563rem]">
                              24/1/2019
                            </div>
                            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                              <div className="relative capitalize inline-block min-w-[3.25rem]">
                                6/5/2019
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.312rem] pb-[0rem] pr-[0.25rem] pl-[0rem]">
                      <div className="flex flex-col items-start justify-start gap-[1.687rem]">
                        <div className="relative capitalize inline-block min-w-[1.875rem] whitespace-nowrap">
                          $500
                        </div>
                        <div className="relative text-[0.713rem] capitalize inline-block min-w-[1.813rem] whitespace-nowrap">
                          $500
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[1.181rem]">
                      <button className="cursor-pointer [border:none] pt-[0.281rem] px-[1.062rem] pb-[0.287rem] bg-orange rounded-[72.78px] flex flex-row items-start justify-start shrink-0 hover:bg-chocolate">
                        <div className="relative text-[0.75rem] capitalize font-semibold font-inter text-white text-left inline-block min-w-[3rem]">
                          booking
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-[0.25rem] px-[1rem] bg-orange rounded-[72.78px] flex flex-row items-start justify-start shrink-0 hover:bg-chocolate">
                        <div className="relative text-[0.75rem] capitalize font-semibold font-inter text-white text-left inline-block min-w-[3rem]">
                          booking
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-[6.82px] bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-[1.437rem] pb-[1.5rem] pr-[1.25rem] pl-[1.562rem] gap-[1.687rem] max-w-full border-[3px] border-solid border-whitesmoke-1000">
              <div className="relative capitalize font-semibold mq450:text-[1.125rem]">
                completed order
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem] max-w-full text-[0.875rem] text-dimgray-300">
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
                        <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem]">
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
                        <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem]">
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
                        <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem]">
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
                        <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem]">
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
                        <div className="rounded-[72.78px] bg-forestgreen flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem] text-white">
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
                          <div className="rounded-[72.78px] bg-forestgreen flex flex-row items-start justify-start py-[0.25rem] px-[0.5rem] text-white">
                            <div className="relative capitalize font-semibold inline-block min-w-[4rem]">
                              completed
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
                          <div className="w-[4.975rem] rounded-[72.78px] bg-forestgreen flex flex-row items-start justify-start pt-[0.237rem] px-[0.437rem] pb-[0.243rem] box-border text-white">
                            <div className="relative capitalize font-semibold inline-block min-w-[4rem]">
                              completed
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-[6.82px] bg-white overflow-hidden flex flex-col items-start justify-start pt-[1rem] pb-[1.062rem] pr-[1.187rem] pl-[1.625rem] gap-[1.687rem] border-[3px] border-solid border-whitesmoke-1000">
              <div className="relative capitalize font-semibold mq450:text-[1.125rem]">
                order cancelled
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[1.625rem] text-[0.875rem] text-dimgray-300 mq750:flex-wrap">
                <div className="w-[12.1rem] flex flex-col items-start justify-start gap-[1.125rem]">
                  <div className="w-[10.819rem] flex flex-row items-start justify-between gap-[1.25rem]">
                    <div className="relative capitalize font-medium inline-block min-w-[4.813rem]">
                      Booking No
                    </div>
                    <div className="relative capitalize font-medium inline-block min-w-[3.063rem]">
                      vehicle
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.375rem] text-[0.75rem] text-gray-900">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                      <div className="rounded-20xl-8 bg-whitesmoke-900 flex flex-row items-start justify-start pt-[0.281rem] px-[0.562rem] pb-[0.287rem]">
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
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[1.881rem] min-w-[9.063rem]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.437rem]">
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0.687rem]">
                      <div className="relative capitalize font-medium inline-block min-w-[7.063rem]">
                        pick up location
                      </div>
                    </div>
                    <div className="relative text-[0.713rem] capitalize text-gray-900">
                      Amborkhana point,sylhet
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[1.187rem]">
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                      <div className="relative capitalize font-medium inline-block min-w-[2rem]">
                        date
                      </div>
                    </div>
                    <div className="relative text-[0.75rem] capitalize text-gray-900 inline-block min-w-[3.563rem]">
                      22/1/2019
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[1.437rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[5rem]">
                    Return date
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.687rem] pl-[0.75rem] text-[0.75rem] text-gray-900">
                    <div className="relative capitalize inline-block min-w-[3.563rem]">
                      24/1/2019
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[1.437rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[3.688rem]">
                    Payment
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0.937rem] text-[0.75rem] text-gray-900">
                    <div className="relative capitalize inline-block min-w-[1.875rem] whitespace-nowrap">
                      $500
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[1.125rem]">
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[1.187rem]">
                    <div className="relative capitalize font-medium inline-block min-w-[2.75rem] shrink-0">
                      status
                    </div>
                  </div>
                  <div className="rounded-[72.78px] bg-crimson flex flex-row items-start justify-start pt-[0.281rem] px-[0.687rem] pb-[0.287rem] shrink-0 text-[0.75rem] text-white">
                    <div className="relative capitalize font-semibold inline-block min-w-[3.688rem]">
                      cancelled
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContentArea.propTypes = {
  className: PropTypes.string,
};

export default ContentArea;
