import Navigation1 from "../components/Navigation1";
import FormItem from "../components/FormItem";
import FrameComponent6 from "../components/FrameComponent6";
import Testimonial from "../components/Testimonial";
import Locations from "../components/Locations";
import Questions from "../components/Questions";
import Futtersection from "../components/Futtersection";

const DrivveLandingPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[5.812rem] leading-[normal] tracking-[normal] mq450:gap-[1.438rem] mq800:gap-[2.875rem]">
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[5.937rem] box-border max-w-full text-left text-[4rem] text-white font-inter mq450:pb-[2.5rem] mq450:box-border mq1125:pb-[3.875rem] mq1125:box-border">
        <div className="flex-1 flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[14.956rem] box-border relative gap-[1.875rem] bg-[url('/public/header-sction@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pb-[6.313rem] mq450:box-border mq800:pb-[9.75rem] mq800:box-border">
          <img
            className="w-[53.625rem] relative max-h-full object-contain hidden max-w-full z-[0]"
            alt=""
            src="/car-image-header-section@2x.png"
          />
          <img
            className="w-[27.813rem] relative max-h-full object-contain hidden max-w-full z-[1]"
            alt=""
            src="/bike-image-header-section@2x.png"
          />
          <Navigation1 />
          <div className="w-[82.5rem] flex flex-row items-end justify-start py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[1.675rem] max-w-full mq1350:flex-wrap mq1350:justify-center">
            <div className="w-[49.75rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.481rem] box-border min-w-[49.75rem] max-w-full shrink-0 mq1125:min-w-full mq1350:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[3rem] shrink-0 max-w-full z-[2] mq450:gap-[1.5rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
                  <h1 className="m-0 self-stretch relative text-inherit capitalize font-semibold font-inherit mq450:text-[2.375rem] mq800:text-[3.188rem]">
                    unlock endless driving with drivee
                  </h1>
                  <div className="w-[35.125rem] relative text-[1.25rem] leading-[160%] text-silver-100 inline-block max-w-full box-border pr-[1.25rem] mq450:text-[1rem] mq450:leading-[1.625rem]">
                    To contribute to positive change and achieve our
                    sustainability goals with many extraordinary
                  </div>
                </div>
                <div className="w-[20.438rem] flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1.25rem] max-w-full text-[1.25rem]">
                  <button className="cursor-pointer py-[0.812rem] px-[1.812rem] bg-white rounded-9xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                    <div className="relative text-[1.25rem] capitalize font-semibold font-inter text-gray-2300 text-left inline-block min-w-[5.25rem]">
                      rent Car
                    </div>
                  </button>
                  <div className="flex-1 rounded-9xs flex flex-row items-center justify-center py-[0.812rem] px-[1.562rem] whitespace-nowrap border-[1px] border-solid border-white">
                    <div className="relative capitalize font-medium inline-block min-w-[5.625rem]">
                      rent bike
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[43.294rem] relative max-h-full shrink-0 max-w-full mq1350:flex-1"
              loading="lazy"
              alt=""
              src="/map-header-section.svg"
            />
          </div>
          {/* <FormItem /> */}
        </div>
      </section>
      <section className="self-stretch flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[7.187rem] box-border gap-[6.062rem] min-h-[72.375rem] max-w-full text-left text-[3.125rem] text-gray-1600 font-inter mq450:gap-[1.5rem] mq800:gap-[3rem] mq800:pb-[3.063rem] mq800:box-border mq1350:pb-[4.688rem] mq1350:box-border">
        <FrameComponent6 />
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[82.75rem] flex flex-row items-center justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[2.625rem] max-w-full mq800:gap-[1.313rem] mq1125:flex-wrap">
            <img
              className="h-[29.563rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[28.813rem] mq800:min-w-full"
              loading="lazy"
              alt=""
              src="/bike-image@2x.png"
            />
            <div className="w-[34.5rem] flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[3rem] min-w-[34.5rem] max-w-full mq800:gap-[1.5rem] mq800:min-w-full mq1125:flex-1">
              <div className="w-[35.688rem] flex flex-col items-start justify-start gap-[1.625rem] max-w-[104%] shrink-0">
                <div className="flex flex-col items-start justify-start gap-[0.312rem]">
                  <h1 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq450:text-[1.875rem] mq800:text-[2.5rem]">
                    Rent a bike
                  </h1>
                  <div className="w-[16.188rem] flex flex-row items-end justify-start gap-[0.937rem] text-[0.625rem] text-gray-200">
                    <div className="rounded-9xs bg-whitesmoke-600 flex flex-row items-center justify-center py-[0.625rem] px-[0.937rem]">
                      <div className="relative uppercase inline-block min-w-[2.5rem]">
                        luxury
                      </div>
                    </div>
                    <div className="flex-1 rounded-9xs bg-whitesmoke-600 flex flex-row items-center justify-center py-[0.625rem] px-[0.937rem]">
                      <div className="relative uppercase inline-block min-w-[3.188rem]">
                        comfort
                      </div>
                    </div>
                    <div className="flex-1 rounded-9xs bg-whitesmoke-600 flex flex-row items-center justify-center py-[0.625rem] px-[0.937rem]">
                      <div className="relative uppercase inline-block min-w-[3rem]">
                        prestige
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative text-[1rem] leading-[200.02%] text-dimgray-600">
                  Booking a self-driving car with us is simple and easy. You can
                  browse our selection of vehicles online, choose the car that
                  best fits your needs, and book it for the duration of your
                  choice. Our user-friendly platform allows you to manage your
                  bookings and view your trip history with ease.
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[0.625rem] px-[1rem] bg-black shadow-[0px_6px_20px_rgba(0,_0,_0,_0.15)] rounded-9xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray-1400">
                <div className="relative text-[0.688rem] capitalize font-semibold font-inter text-white text-left inline-block min-w-[3.125rem]">
                  rent bike
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[63.1rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[3.731rem] box-border max-w-full text-left text-[2.375rem] text-gray-2300 font-outfit mq800:pb-[2.438rem] mq800:box-border">
        <div className="w-[45.6rem] flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[29.563rem] w-[44.375rem] absolute !m-[0] top-[-5.312rem] right-[-35.65rem] object-cover"
            loading="lazy"
            alt=""
            src="/car-share-image@2x.png"
          />
          <div className="flex-1 shadow-[38px_156px_45px_rgba(201,_201,_201,_0),_24px_100px_41px_rgba(201,_201,_201,_0.01),_14px_56px_35px_rgba(201,_201,_201,_0.05),_6px_25px_26px_rgba(201,_201,_201,_0.09),_2px_6px_14px_rgba(201,_201,_201,_0.1)] rounded-2xl bg-white box-border flex flex-col items-start justify-start pt-[2.375rem] pb-[3.125rem] pr-[3.062rem] pl-[3.25rem] gap-[2.243rem] max-w-full z-[1] border-[2px] border-solid border-gainsboro-100 mq450:pt-[1.563rem] mq450:pb-[2rem] mq450:box-border mq800:gap-[1.125rem] mq800:pl-[1.625rem] mq800:pr-[1.5rem] mq800:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.312rem] max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[4.062rem] max-w-full mq450:gap-[1rem] mq800:gap-[2rem]">
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.725rem] px-[0rem] pb-[0rem] box-border min-w-[21.563rem] max-w-full mq800:min-w-full">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[124.52%] capitalize font-semibold font-inherit shrink-0 mq450:text-[1.438rem] mq450:leading-[1.75rem] mq800:text-[1.875rem] mq800:leading-[2.375rem]">
                    do yo want to share your vehicle?
                  </h1>
                </div>
                <div className="h-[1.638rem] w-[1.638rem] relative rounded-[50%] bg-gray-2400 shrink-0" />
              </div>
              <div className="self-stretch h-[9.713rem] relative text-[1rem] leading-[200%] capitalize font-inter text-dimgray-600 inline-block shrink-0">
                We'll use your car's location to calculate your Onboard Bonus.
                Each ZIP code will belong to one of five zones. Zones are based
                on guest demand for cars—more guest demand means a higher zone,
                and bigger bonuses for cars. Zone 1 gets the highest bonus,
                while Zones 4 and 5 aren't eligible for the Onboard Bonus.
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[1rem] px-[1.437rem] bg-gray-2300 rounded-9xs flex flex-row items-start justify-start gap-[0.625rem]">
              <a className="[text-decoration:none] relative text-[0.938rem] capitalize font-semibold font-inter text-white text-left inline-block min-w-[5.188rem] whitespace-nowrap">
                learn more
              </a>
              <div className="flex flex-col items-start justify-start pt-[0.225rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[0.688rem] h-[0.681rem] relative object-contain"
                  alt=""
                  src="/group-1000004072@2x.png"
                />
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[5rem] box-border max-w-full text-left text-[3.125rem] text-gray-1600 font-inter">
        <div className="w-[72.231rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1125:flex-wrap mq1125:justify-center">
          <div className="w-[35.625rem] flex flex-col items-start justify-start gap-[1.562rem] min-w-[35.625rem] shrink-0 max-w-full mq800:min-w-full mq1125:flex-1">
            <h1 className="m-0 h-[2.25rem] relative text-inherit capitalize font-semibold font-inherit inline-block max-w-full mq450:text-[1.875rem] mq800:text-[2.5rem]">
              why choose us
            </h1>
            <div className="self-stretch relative text-[1rem] leading-[200.02%] text-dimgray-400">{`Booking a self-driving car with us is simple and easy. You can browse our selection of vehicles online, choose the car that best fits your needs, and book it for the duration of your choice. `}</div>
          </div>
          <div className="w-[30.481rem] flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] box-border min-w-[30.481rem] max-w-full text-center text-[2.188rem] text-black mq800:min-w-full mq1125:flex-1">
            <div className="self-stretch shadow-[0px_4px_14px_rgba(0,_0,_0,_0.1)] rounded-[21px] bg-white flex flex-row items-start justify-start p-[1.875rem] gap-[1.25rem] shrink-0 mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                <div className="relative">
                  <p className="m-0 leading-[107.5%] capitalize font-semibold">
                    45k+
                  </p>
                  <p className="m-0 text-[1rem] leading-[129%] text-gray-700">
                    SuccessTour
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border min-w-[6.625rem]">
                <div className="self-stretch relative">
                  <p className="m-0 leading-[107.5%] capitalize font-semibold">
                    1M+
                  </p>
                  <p className="m-0 text-[1rem] leading-[129%] text-gray-700">
                    Happy Customer
                  </p>
                </div>
              </div>
              <div className="w-[8rem] relative inline-block text-[2.688rem]">
                <p className="m-0 leading-[107.5%] capitalize font-semibold">
                  3+
                </p>
                <p className="m-0 text-[1rem] text-gray-700">
                  <span className="leading-[129%]">
                    <span className="uppercase"> y</span>ear Experience
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Locations />
      <img
        className="w-full h-[40.688rem] absolute !m-[0] right-[0rem] bottom-[61.375rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/local-service-we-provide@2x.png"
      />
      <Questions />
      <Futtersection />
    </div>
  );
};

export default DrivveLandingPage;
