import CarCard from "../components/CarCard";
import Demo1 from "../components/Demo1";

const Car = () => {
  return (
    <div className="w-full relative bg-whitesmoke-800 overflow-hidden flex flex-col items-start justify-start gap-[19.375rem] leading-[normal] tracking-[normal] text-left text-[2.5rem] text-white font-inter mq450:gap-[4.813rem] mq750:gap-[9.688rem]">
      <div className="w-full h-[22.5rem] absolute !m-[0] top-[6.75rem] right-[0rem] left-[0rem] bg-gray-1700 overflow-hidden shrink-0">
        <img
          className="absolute top-[0.563rem] left-[-9.25rem] w-[43.294rem] h-[24.919rem]"
          alt=""
          src="/map.svg"
        />
        <div className="absolute top-[7.5rem] left-[calc(50%_-_300px)] capitalize font-semibold z-[1] mq1050:text-[2rem] mq450:text-[1.5rem]">
          Rent a car Rent Your Freedom
        </div>
      </div>
      <div className="self-stretch bg-whitesmoke-800 overflow-x-auto flex flex-row items-start justify-center pt-[2.437rem] pb-[1.812rem] pr-[1.25rem] pl-[1.625rem] gap-[0.25rem] z-[2] text-[1.063rem] text-gray-2200">
        <div className="w-[25.281rem] shrink-0 flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border text-[1.638rem]">
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
        <div className="w-[25rem] shrink-0 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
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
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.518rem] max-w-full text-[0.75rem] text-dimgray-800 mq750:gap-[1.25rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[72.5rem] flex flex-col items-end justify-start gap-[3.125rem] max-w-full mq750:gap-[1.563rem]">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full">
              <div className="w-[52.281rem] flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-[16.938rem] w-[30.813rem] absolute !m-[0] top-[-13.437rem] right-[-18.156rem] object-contain z-[2]"
                  alt=""
                  src="/car-rentalpana-1@2x.png"
                />
                <div className="flex-1 shadow-[0px_20px_45px_rgba(179,_179,_179,_0.15)] rounded-3xs bg-white box-border flex flex-row items-end justify-center py-[2.375rem] px-[1.25rem] shrink-0 max-w-full z-[3] border-[1.2px] border-solid border-lightgray-300">
                  <div className="overflow-x-auto flex flex-row items-end justify-start gap-[1.968rem] max-w-full mq750:gap-[1rem]">
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
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] shrink-0 text-[1rem] text-black">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-[0rem] pr-[0.375rem] pl-[0rem] gap-[1.25rem_1.193rem]">
                <CarCard
                  carImage="/car-image@2x.png"
                  jeepRenegade="jeep renegade"
                />
                <CarCard
                  carImage="/car-image@2x.png"
                  jeepRenegade="car"
                  propBorder="1px solid #d2d2d2"
                />
                <CarCard
                  carImage="/car-image@2x.png"
                  jeepRenegade="corola"
                  propBorder="1px solid #d2d2d2"
                />
                <CarCard
                  carImage="/car-image@2x.png"
                  jeepRenegade="jeep dianamic"
                  propBorder="1px solid #d2d2d2"
                />
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0.062rem] pl-[0rem] relative">
                <div className="w-[17.125rem] rounded-xl bg-white box-border flex flex-col items-center justify-start pt-[1.375rem] pb-[1.437rem] pr-[0.687rem] pl-[0.875rem] gap-[1rem] border-[1px] border-solid border-lightgray-200 mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
                  <img
                    className="w-[14.094rem] h-[8.569rem] relative object-cover"
                    alt=""
                    src="/rectangle-826@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[1.25rem]">
                    <div className="self-stretch flex flex-col items-start justify-center py-[0rem] px-[0.187rem] gap-[0.625rem]">
                      <div className="relative capitalize font-semibold inline-block min-w-[1.75rem]">
                        cvr
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[0.625rem] text-dimgray-100">
                        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[2.938rem]">
                            seats: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.375rem]">
                            Luggage: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.563rem]">
                            doors: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.313rem]">
                            fuel: petrol
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[6.25rem]">
                            horsepower: 500
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.75rem]">
                            engine:3000
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.125rem]">
                            drive:4
                          </div>
                          <div className="relative capitalize inline-block min-w-[5rem]">
                            type: hatchback
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
                      <div className="shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] bg-black flex flex-row items-center justify-center pt-[0.55rem] px-[0.875rem] pb-[0.556rem] whitespace-nowrap text-[0.625rem] text-white">
                        <div className="relative capitalize font-semibold inline-block min-w-[2.625rem]">
                          rent Car
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[17.125rem] rounded-xl bg-white box-border flex flex-col items-center justify-start pt-[1.375rem] pb-[1.437rem] pr-[0.687rem] pl-[0.875rem] gap-[1rem] ml-[-2.632rem] border-[1px] border-solid border-lightgray-200 mq450:pt-[1.375rem] mq450:pb-[1.25rem] mq450:box-border">
                  <img
                    className="w-[14.094rem] h-[8.569rem] relative object-cover"
                    alt=""
                    src="/rectangle-826@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[1.25rem]">
                    <div className="self-stretch flex flex-col items-start justify-center py-[0rem] px-[0.187rem] gap-[0.625rem]">
                      <div className="relative capitalize font-semibold inline-block min-w-[3.688rem]">
                        pvr 150
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[0.625rem] text-dimgray-100">
                        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[2.938rem]">
                            seats: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.375rem]">
                            Luggage: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.563rem]">
                            doors: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.313rem]">
                            fuel: petrol
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[6.25rem]">
                            horsepower: 500
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.75rem]">
                            engine:3000
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.125rem]">
                            drive:4
                          </div>
                          <div className="relative capitalize inline-block min-w-[5rem]">
                            type: hatchback
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
                      <div className="shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] bg-black flex flex-row items-center justify-center pt-[0.55rem] px-[0.875rem] pb-[0.556rem] whitespace-nowrap text-[0.625rem] text-white">
                        <div className="relative capitalize font-semibold inline-block min-w-[2.625rem]">
                          rent Car
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[17.125rem] rounded-xl bg-white box-border flex flex-col items-center justify-start pt-[1.375rem] pb-[1.437rem] pr-[0.687rem] pl-[0.875rem] gap-[1rem] ml-[-2.632rem] border-[1px] border-solid border-lightgray-200 mq450:pt-[1.375rem] mq450:pb-[1.25rem] mq450:box-border">
                  <img
                    className="w-[14.094rem] h-[8.569rem] relative object-cover"
                    alt=""
                    src="/rectangle-826@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[1.25rem]">
                    <div className="self-stretch flex flex-col items-start justify-center py-[0rem] px-[0.187rem] gap-[0.625rem]">
                      <div className="relative capitalize font-semibold inline-block min-w-[2.75rem]">
                        filder
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[0.625rem] text-dimgray-100">
                        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[2.938rem]">
                            seats: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.375rem]">
                            Luggage: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.563rem]">
                            doors: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.313rem]">
                            fuel: petrol
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[6.25rem]">
                            horsepower: 500
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.75rem]">
                            engine:3000
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.125rem]">
                            drive:4
                          </div>
                          <div className="relative capitalize inline-block min-w-[5rem]">
                            type: hatchback
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
                      <div className="shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] bg-black flex flex-row items-center justify-center pt-[0.55rem] px-[0.875rem] pb-[0.556rem] whitespace-nowrap text-[0.625rem] text-white">
                        <div className="relative capitalize font-semibold inline-block min-w-[2.625rem]">
                          rent Car
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[17.125rem] rounded-xl bg-white box-border flex flex-col items-center justify-start pt-[1.375rem] pb-[1.437rem] pr-[0.687rem] pl-[0.875rem] gap-[1rem] ml-[-2.632rem] border-[1px] border-solid border-lightgray-200 mq450:pt-[1.375rem] mq450:pb-[1.25rem] mq450:box-border">
                  <div className="self-stretch h-[8.569rem] relative" />
                  <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[1.25rem]">
                    <div className="self-stretch flex flex-col items-start justify-center py-[0rem] px-[0.187rem] gap-[0.625rem]">
                      <div className="relative capitalize font-semibold inline-block min-w-[2.25rem]">
                        audi
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[0.625rem] text-dimgray-100">
                        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[2.938rem]">
                            seats: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.375rem]">
                            Luggage: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.563rem]">
                            doors: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.313rem]">
                            fuel: petrol
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[6.25rem]">
                            horsepower: 500
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.75rem]">
                            engine:3000
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.125rem]">
                            drive:4
                          </div>
                          <div className="relative capitalize inline-block min-w-[5rem]">
                            type: hatchback
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
                      <div className="shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] bg-black flex flex-row items-center justify-center pt-[0.55rem] px-[0.875rem] pb-[0.556rem] whitespace-nowrap text-[0.625rem] text-white">
                        <div className="relative capitalize font-semibold inline-block min-w-[2.625rem]">
                          rent Car
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="h-[calc(100%_-_232.8px)] w-[14.094rem] absolute !m-[0] top-[1.944rem] bottom-[12.606rem] left-[calc(50%_+_328.5px)] max-h-full object-cover z-[1]"
                  alt=""
                  src="/placeholder@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0.062rem] pl-[0rem] relative">
                <div className="w-[17.125rem] rounded-xl bg-white box-border flex flex-col items-center justify-start pt-[1.375rem] pb-[1.437rem] pr-[0.687rem] pl-[0.875rem] gap-[1rem] border-[1px] border-solid border-lightgray-200 mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
                  <img
                    className="w-[14.094rem] h-[8.569rem] relative object-cover"
                    alt=""
                    src="/rectangle-826@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[1.25rem]">
                    <div className="self-stretch flex flex-col items-start justify-center py-[0rem] px-[0.187rem] gap-[0.625rem]">
                      <div className="relative capitalize font-semibold inline-block min-w-[4.875rem]">
                        filder 224
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[0.625rem] text-dimgray-100">
                        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[2.938rem]">
                            seats: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.375rem]">
                            Luggage: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.563rem]">
                            doors: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.313rem]">
                            fuel: petrol
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[6.25rem]">
                            horsepower: 500
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.75rem]">
                            engine:3000
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.125rem]">
                            drive:4
                          </div>
                          <div className="relative capitalize inline-block min-w-[5rem]">
                            type: hatchback
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
                      <div className="shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] bg-black flex flex-row items-center justify-center pt-[0.55rem] px-[0.875rem] pb-[0.556rem] whitespace-nowrap text-[0.625rem] text-white">
                        <div className="relative capitalize font-semibold inline-block min-w-[2.625rem]">
                          rent Car
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[17.125rem] rounded-xl bg-white box-border flex flex-col items-center justify-start pt-[1.375rem] pb-[1.437rem] pr-[0.687rem] pl-[0.875rem] gap-[1rem] ml-[-5.169rem] border-[1px] border-solid border-lightgray-200 mq450:pt-[1.375rem] mq450:pb-[1.25rem] mq450:box-border">
                  <img
                    className="w-[14.094rem] h-[8.569rem] relative object-cover"
                    alt=""
                    src="/rectangle-826@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[1.25rem]">
                    <div className="self-stretch flex flex-col items-start justify-center py-[0rem] px-[0.187rem] gap-[0.625rem]">
                      <div className="relative capitalize font-semibold inline-block min-w-[3rem]">
                        cobra
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[0.625rem] text-dimgray-100">
                        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[2.938rem]">
                            seats: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.375rem]">
                            Luggage: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.563rem]">
                            doors: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.313rem]">
                            fuel: petrol
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[6.25rem]">
                            horsepower: 500
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.75rem]">
                            engine:3000
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.125rem]">
                            drive:4
                          </div>
                          <div className="relative capitalize inline-block min-w-[5rem]">
                            type: hatchback
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
                      <div className="shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] bg-black flex flex-row items-center justify-center pt-[0.55rem] px-[0.875rem] pb-[0.556rem] whitespace-nowrap text-[0.625rem] text-white">
                        <div className="relative capitalize font-semibold inline-block min-w-[2.625rem]">
                          rent Car
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[17.125rem] rounded-xl bg-white box-border flex flex-col items-center justify-start pt-[1.375rem] pb-[1.437rem] pr-[0.687rem] pl-[0.875rem] gap-[1rem] ml-[-5.169rem] border-[1px] border-solid border-lightgray-200 mq450:pt-[1.375rem] mq450:pb-[1.25rem] mq450:box-border">
                  <div className="self-stretch h-[8.569rem] relative" />
                  <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[1.25rem]">
                    <div className="self-stretch flex flex-col items-start justify-center py-[0rem] px-[0.187rem] gap-[0.625rem]">
                      <div className="relative capitalize font-semibold inline-block min-w-[3.875rem]">
                        audi A5
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[0.625rem] text-dimgray-100">
                        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[2.938rem]">
                            seats: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.375rem]">
                            Luggage: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.563rem]">
                            doors: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.313rem]">
                            fuel: petrol
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[6.25rem]">
                            horsepower: 500
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.75rem]">
                            engine:3000
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.125rem]">
                            drive:4
                          </div>
                          <div className="relative capitalize inline-block min-w-[5rem]">
                            type: hatchback
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
                      <div className="shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] bg-black flex flex-row items-center justify-center pt-[0.55rem] px-[0.875rem] pb-[0.556rem] whitespace-nowrap text-[0.625rem] text-white">
                        <div className="relative capitalize font-semibold inline-block min-w-[2.625rem]">
                          rent Car
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[17.125rem] rounded-xl bg-white box-border flex flex-col items-center justify-start pt-[1.375rem] pb-[1.437rem] pr-[0.687rem] pl-[0.875rem] gap-[1rem] ml-[-5.169rem] border-[1px] border-solid border-lightgray-200 mq450:pt-[1.375rem] mq450:pb-[1.25rem] mq450:box-border">
                  <div className="self-stretch h-[8.569rem] relative" />
                  <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[1.25rem]">
                    <div className="self-stretch flex flex-col items-start justify-center py-[0rem] px-[0.187rem] gap-[0.625rem]">
                      <div className="relative capitalize font-semibold inline-block min-w-[3.5rem]">
                        renger
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[0.625rem] text-dimgray-100">
                        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[2.938rem]">
                            seats: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.375rem]">
                            Luggage: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.563rem]">
                            doors: 4
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.313rem]">
                            fuel: petrol
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.55rem]">
                          <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[6.25rem]">
                            horsepower: 500
                          </div>
                          <div className="relative capitalize inline-block min-w-[3.75rem]">
                            engine:3000
                          </div>
                          <div className="relative capitalize inline-block min-w-[2.125rem]">
                            drive:4
                          </div>
                          <div className="relative capitalize inline-block min-w-[5rem]">
                            type: hatchback
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
                      <div className="shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] bg-black flex flex-row items-center justify-center pt-[0.55rem] px-[0.875rem] pb-[0.556rem] whitespace-nowrap text-[0.625rem] text-white">
                        <div className="relative capitalize font-semibold inline-block min-w-[2.625rem]">
                          rent Car
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="h-[calc(100%_-_232.8px)] w-[14.094rem] absolute !m-[0] top-[1.513rem] bottom-[13.038rem] left-[calc(50%_+_34px)] max-h-full object-contain z-[1]"
                  alt=""
                  src="/rectangle-826@2x.png"
                />
                <img
                  className="h-[calc(100%_-_220.9px)] w-[15.313rem] absolute !m-[0] top-[1.138rem] bottom-[12.669rem] left-[calc(50%_+_319px)] max-h-full object-cover z-[1]"
                  alt=""
                  src="/placeholder@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <Demo1 />
      </div>
    </div>
  );
};

export default Car;
