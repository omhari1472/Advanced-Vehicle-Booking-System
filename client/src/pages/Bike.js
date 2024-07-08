import Bike1 from "../components/Bike1";
import Options from "../components/Options";

const Bike = () => {
  return (
    <div className="w-full relative bg-whitesmoke-800 overflow-hidden flex flex-col items-start justify-start pt-[2.437rem] px-[0rem] pb-[0rem] box-border gap-[2.556rem] leading-[normal] tracking-[normal] text-left text-[1.063rem] text-gray-2200 font-inter mq750:gap-[1.25rem]">
      <div className="self-stretch flex flex-col items-end justify-start gap-[1.812rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.625rem] box-border max-w-full">
          <div className="w-[72.844rem] flex flex-row items-start justify-start gap-[0.25rem] max-w-full mq1050:flex-wrap">
            <div className="flex-[0.9506] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[16.438rem] max-w-full text-[1.638rem] mq1050:flex-1">
              <div className="relative font-semibold inline-block min-w-[5.188rem] mq450:text-[1.313rem]">
                Drivee
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
              <div className="relative capitalize font-medium inline-block min-w-[4rem]">
                hosting
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[1.687rem] pl-[0rem]">
              <img
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
              <div className="flex flex-row items-start justify-start gap-[1.968rem]">
                <div className="flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem]">
                  <div className="relative capitalize font-medium inline-block min-w-[5.75rem]">
                    Contact us
                  </div>
                </div>
                <div className="relative capitalize font-medium inline-block min-w-[4.25rem]">
                  Account
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border min-w-[16.25rem] max-w-full mq1050:flex-1">
              <img
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[2.125rem] h-[2.125rem] relative rounded-[50%] object-cover"
                alt=""
                src="/ellipse-11@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full text-[2.5rem] text-white mq750:gap-[1.25rem]">
          <div className="self-stretch h-[26.125rem] relative max-w-full">
            <div className="absolute top-[0rem] left-[0rem] bg-gray-1700 w-[90rem] h-[22.5rem] overflow-hidden">
              <img
                className="absolute top-[0.563rem] left-[-9.25rem] w-[43.294rem] h-[24.919rem]"
                alt=""
                src="/map.svg"
              />
              <div className="absolute top-[7.5rem] left-[calc(50%_-_300px)] capitalize font-semibold z-[1] mq1050:text-[2rem] mq450:text-[1.5rem]">
                Rent a bike Rent Your Freedom
              </div>
            </div>
            <div className="absolute top-[18.938rem] left-[18.875rem] shadow-[0px_20px_45px_rgba(179,_179,_179,_0.15)] rounded-3xs bg-white box-border w-[52.281rem] flex flex-row items-end justify-center py-[2.375rem] px-[1.25rem] max-w-full z-[3] text-[0.75rem] text-dimgray-800 border-[1.2px] border-solid border-lightgray-300">
              <div className="overflow-x-auto flex flex-row items-end justify-start gap-[1.968rem] max-w-full">
                <div className="w-[9.188rem] shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-between py-[0.5rem] px-[0.875rem] gap-[1.25rem] border-[1px] border-solid border-gainsboro-900">
                  <div className="relative font-medium inline-block min-w-[2.563rem] whitespace-nowrap">
                    Search
                  </div>
                  <img
                    className="h-[0.75rem] w-[0.75rem] relative"
                    alt=""
                    src="/group-1000004123.svg"
                  />
                </div>
                <div className="w-[4.8rem] shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-4xs-4 bg-white box-border shrink-0 flex flex-row items-center justify-start py-[0.5rem] pr-[0.812rem] pl-[0.875rem] gap-[0.656rem] border-[1px] border-solid border-gainsboro-900">
                  <div className="relative font-medium inline-block min-w-[1.875rem] whitespace-nowrap">
                    Price
                  </div>
                  <img
                    className="h-[0.219rem] w-[0.438rem] relative"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-4xs-4 bg-white overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.5rem] pr-[0.812rem] pl-[0.875rem] gap-[0.656rem] whitespace-nowrap border-[1px] border-solid border-gainsboro-900">
                  <div className="relative font-medium inline-block min-w-[5.063rem] whitespace-nowrap">
                    Time Duration
                  </div>
                  <img
                    className="h-[0.219rem] w-[0.438rem] relative"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="w-[5.05rem] shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-4xs-4 bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.5rem] pr-[0.812rem] pl-[0.875rem] gap-[0.656rem] border-[1px] border-solid border-gainsboro-900">
                  <div className="relative capitalize font-medium inline-block min-w-[2.125rem] whitespace-nowrap">
                    brand
                  </div>
                  <img
                    className="h-[0.219rem] w-[0.438rem] relative"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="w-[4.875rem] shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.5rem] px-[0.812rem] gap-[0.312rem] border-[1px] border-solid border-gainsboro-900">
                  <div className="relative font-medium inline-block min-w-[1.875rem] whitespace-nowrap">
                    Filter
                  </div>
                  <img
                    className="h-[0.938rem] w-[0.938rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                    alt=""
                    src="/mifilter.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[1rem] text-black">
            <div className="w-[72.5rem] flex flex-col items-start justify-start gap-[1rem] max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start relative">
                <div className="w-[17.188rem] rounded-xl bg-white box-border flex flex-col items-center justify-start py-[1.375rem] px-[0.812rem] gap-[1rem] border-[1px] border-solid border-lightgray-200 mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
                  <img
                    className="w-[14.094rem] h-[8.569rem] relative object-contain"
                    alt=""
                    src="/rectangle-826@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
                    <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.456rem] gap-[0.625rem]">
                      <div className="relative capitalize font-semibold inline-block min-w-[2.063rem]">
                        CBR
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.006rem] gap-[0.312rem] text-[0.625rem] text-dimgray-100">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                          <div className="flex flex-col items-start justify-start gap-[0.55rem]">
                            <div className="relative capitalize inline-block min-w-[2.25rem]">
                              seats:2
                            </div>
                            <div className="relative capitalize inline-block min-w-[3.125rem]">
                              fuel:petrol
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-start gap-[0.55rem]">
                            <div className="relative capitalize inline-block min-w-[5.125rem]">
                              horsepower: 500
                            </div>
                            <div className="relative capitalize inline-block min-w-[3.75rem]">
                              engine:3000
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                          <div className="flex flex-col items-start justify-start gap-[0.55rem]">
                            <div className="relative capitalize inline-block min-w-[4.875rem]">
                              Front Brake:Disc
                            </div>
                            <div className="relative capitalize inline-block min-w-[5.438rem]">
                              Gear Box:6-Speed
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-start gap-[0.55rem]">
                            <div className="relative capitalize inline-block min-w-[4.688rem]">
                              Stroke:58.7 mm
                            </div>
                            <div className="relative capitalize inline-block min-w-[7.188rem]">
                              Overall Mileage:40 kmpl
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-end justify-between gap-[1.25rem] text-[0.75rem] text-gray-800">
                      <div className="flex flex-col items-center justify-start gap-[0.331rem]">
                        <div className="relative capitalize inline-block min-w-[3.563rem]">
                          per hours
                        </div>
                        <b className="relative text-[1.125rem] capitalize inline-block text-black min-w-[2.25rem] whitespace-nowrap">
                          $56
                        </b>
                      </div>
                      <div className="shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] bg-black flex flex-row items-center justify-center pt-[0.55rem] px-[0.875rem] pb-[0.556rem] whitespace-nowrap text-[0.606rem] text-white">
                        <div className="relative capitalize font-semibold inline-block min-w-[2.813rem]">
                          rent bike
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Bike1 cBR="honda 140" />
                <Bike1
                  cBR="KPR 150"
                  propPadding="1.375rem 0.812rem"
                  propMarginLeft="-7.075rem"
                />
                <Bike1
                  cBR="kawasaki 360"
                  propPadding="1.375rem 0.812rem"
                  propMarginLeft="-7.075rem"
                />
                <img
                  className="h-[calc(100%_-_226.4px)] w-[15.813rem] absolute !m-[0] top-[1.063rem] bottom-[13.088rem] left-[calc(50%_-_271px)] max-h-full object-contain z-[1]"
                  alt=""
                  src="/image-placeholder@2x.png"
                />
                <img
                  className="h-[calc(100%_-_231.4px)] w-[15.313rem] absolute !m-[0] top-[1.063rem] bottom-[13.4rem] left-[calc(50%_+_21px)] max-h-full object-contain z-[1]"
                  alt=""
                  src="/image-placeholder@2x.png"
                />
                <img
                  className="h-[calc(100%_-_226.4px)] w-[14.813rem] absolute !m-[0] top-[1.063rem] bottom-[13.088rem] left-[calc(50%_+_324px)] max-h-full object-contain z-[1]"
                  alt=""
                  src="/image-placeholder@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start relative">
                <Bike1
                  cBR="Gixser"
                  propPadding="1.375rem 0.812rem 1.437rem"
                  propMarginLeft="unset"
                />
                <Bike1
                  cBR="MT15"
                  propPadding="1.375rem 0.812rem 1.437rem"
                  propMarginLeft="-7.669rem"
                />
                <Bike1
                  cBR="CVR"
                  propPadding="1.375rem 0.812rem 1.437rem"
                  propMarginLeft="-7.669rem"
                />
                <Bike1
                  cBR="R1 5"
                  propPadding="1.375rem 0.812rem 1.437rem"
                  propMarginLeft="-7.669rem"
                />
                <img
                  className="h-[calc(100%_-_233.3px)] w-[14.094rem] absolute !m-[0] top-[1.475rem] bottom-[13.106rem] left-[calc(50%_-_550px)] max-h-full object-contain z-[1]"
                  alt=""
                  src="/rectangle-826@2x.png"
                />
                <img
                  className="h-[calc(100%_-_233.3px)] w-[calc(100%_-_934.5px)] absolute !m-[0] top-[0.788rem] right-[38.406rem] bottom-[13.794rem] left-[20rem] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                  alt=""
                  src="/rectangle-826@2x.png"
                />
                <img
                  className="h-[calc(100%_-_236.4px)] w-[14.938rem] absolute !m-[0] top-[0.975rem] bottom-[13.8rem] left-[calc(50%_+_323px)] max-h-full object-cover z-[1]"
                  alt=""
                  src="/rectangle-826@2x.png"
                />
                <img
                  className="h-[calc(100%_-_241.4px)] w-[14.063rem] absolute !m-[0] top-[1.288rem] bottom-[13.8rem] left-[calc(50%_+_36px)] max-h-full object-cover z-[1]"
                  alt=""
                  src="/image-placeholder@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start relative">
                <Bike1
                  cBR="kawasaki !40"
                  propPadding="1.375rem 0.812rem"
                  propMarginLeft="unset"
                />
                <Bike1
                  cBR="MT15"
                  propPadding="1.375rem 0.812rem"
                  propMarginLeft="-7.838rem"
                />
                <Bike1
                  cBR="Filder 350"
                  propPadding="1.375rem 0.812rem"
                  propMarginLeft="-7.838rem"
                />
                <Bike1
                  cBR="Scookiti"
                  propPadding="1.375rem 0.812rem"
                  propMarginLeft="-7.838rem"
                />
                <img
                  className="h-[calc(100%_-_223.4px)] w-[15.125rem] absolute !m-[0] top-[1.519rem] bottom-[12.444rem] left-[calc(50%_-_564px)] max-h-full object-cover z-[1]"
                  alt=""
                  src="/rectangle-826@2x.png"
                />
                <img
                  className="h-[calc(100%_-_245.4px)] w-[12.875rem] absolute !m-[0] top-[1.456rem] bottom-[13.881rem] left-[calc(50%_+_330px)] max-h-full object-cover z-[1]"
                  alt=""
                  src="/rectangle-827@2x.png"
                />
                <img
                  className="h-[calc(100%_-_220.3px)] w-[15.438rem] absolute !m-[0] top-[0.581rem] bottom-[13.188rem] left-[calc(50%_+_24px)] max-h-full object-contain z-[1]"
                  alt=""
                  src="/rectangle-826@2x.png"
                />
                <img
                  className="h-[calc(100%_-_235.4px)] w-[14.938rem] absolute !m-[0] top-[1.144rem] bottom-[13.569rem] left-[calc(50%_-_267px)] max-h-full object-cover z-[1]"
                  alt=""
                  src="/rectangle-826@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[26rem] h-[22.063rem] absolute !m-[0] top-[7.75rem] right-[-0.062rem] object-contain z-[2]"
        alt=""
        src="/rockersrafiki-1@2x.png"
      />
      <div className="w-[90rem] overflow-x-auto flex flex-row items-end justify-start pt-[4.75rem] px-[7.687rem] pb-[2.875rem] box-border gap-[4.5rem] bg-[url('/public/demo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-[1.25rem] text-white lg:pl-[3.813rem] lg:pr-[3.813rem] lg:box-border mq450:gap-[1.125rem] mq450:pt-[3.063rem] mq450:pb-[1.875rem] mq450:box-border mq750:gap-[2.25rem] mq750:pl-[1.875rem] mq750:pr-[1.875rem] mq750:box-border">
        <div className="w-[24.313rem] shrink-0 flex flex-col items-start justify-start pt-[0rem] pb-[3.125rem] pr-[1.312rem] pl-[0rem] box-border min-h-[15.125rem] text-[2rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.656rem]">
            <div className="relative font-semibold inline-block min-w-[6.25rem] mq1050:text-[1.625rem] mq450:text-[1.188rem]">
              Drivee
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.281rem] text-[1.181rem] text-darkgray-400 mq450:gap-[1.125rem]">
              <div className="self-stretch relative leading-[185.02%] capitalize">
                is just a drivee ride away.take control of you journey today
              </div>
              <div className="flex flex-row items-start justify-start gap-[1.612rem]">
                <img
                  className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                  alt=""
                  src="/frame-138.svg"
                />
                <img
                  className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                  alt=""
                  src="/frame-139.svg"
                />
                <img
                  className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                  alt=""
                  src="/frame-140.svg"
                />
                <img
                  className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
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
        <Options />
        <div className="h-[14.688rem] flex flex-col items-start justify-start">
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
      </div>
    </div>
  );
};

export default Bike;
