import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent from "../components/GroupComponent";
import FrameComponent5 from "../components/FrameComponent5";

const CarHsotingAndRefer = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[5.062rem] leading-[normal] tracking-[normal] mq450:gap-[1.25rem] mq750:gap-[2.5rem]">
      <img
        className="w-full h-[32.875rem] absolute !m-[0] top-[6.938rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/hosting-banner@2x.png"
      />
      <FrameComponent4 frameDivPadding="0rem 0rem 3.375rem" />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[10.468rem] box-border max-w-full text-left text-[3.375rem] text-white font-inter mq450:pb-[6.813rem] mq450:box-border">
        <div className="flex flex-col items-center justify-start gap-[2.5rem] max-w-full z-[1] mq450:gap-[1.25rem]">
          <div className="flex flex-col items-center justify-start gap-[1.25rem] max-w-full">
            <h1 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq1050:text-[2.688rem] mq450:text-[2rem]">{`Turn your car into Extra money `}</h1>
            <div className="w-[48.813rem] relative text-[1.25rem] leading-[179.52%] font-roboto text-center inline-block max-w-full mq450:text-[1rem] mq450:leading-[1.813rem]">
              When you list your car, you're earning money while helping others
              navigate your city. It's a win-win, and your next big opportunity.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-[1rem] text-gray-2300">
            <div className="rounded-9xs bg-white flex flex-row items-center justify-center py-[1rem] px-[1.625rem] whitespace-nowrap border-[1px] border-solid border-white">
              <b className="relative capitalize inline-block min-w-[6.938rem]">
                share you car
              </b>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[63.1rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[0.45rem] box-border max-w-full text-left text-[3.125rem] text-gray-1600 font-inter">
        <div className="w-[45.6rem] flex flex-col items-start justify-start gap-[6.25rem] max-w-full mq450:gap-[1.563rem] mq750:gap-[3.125rem]">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq1050:text-[2.5rem] mq450:text-[1.875rem]">
            Earn Extra With Bonuses
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-[2.375rem] text-gray-2300">
            <img
              className="h-[29.563rem] w-[44.375rem] absolute !m-[0] top-[-5.312rem] right-[-35.65rem] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-8211@2x.png"
            />
            <div className="flex-1 shadow-[38px_156px_45px_rgba(201,_201,_201,_0),_24px_100px_41px_rgba(201,_201,_201,_0.01),_14px_56px_35px_rgba(201,_201,_201,_0.05),_6px_25px_26px_rgba(201,_201,_201,_0.09),_2px_6px_14px_rgba(201,_201,_201,_0.1)] rounded-2xl bg-white box-border flex flex-col items-start justify-start pt-[2.375rem] pb-[3.125rem] pr-[3.062rem] pl-[3.25rem] gap-[2.243rem] max-w-full z-[1] border-[2px] border-solid border-gainsboro-100 mq450:pt-[1.563rem] mq450:pb-[2rem] mq450:box-border mq750:gap-[1.125rem] mq750:pl-[1.625rem] mq750:pr-[1.5rem] mq750:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.312rem] max-w-full">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[4.062rem] max-w-full mq450:gap-[1rem] mq750:gap-[2rem]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[0.725rem] px-[0rem] pb-[0rem] box-border min-w-[21.563rem] max-w-full mq750:min-w-full">
                    <h2 className="m-0 self-stretch relative text-inherit leading-[124.52%] capitalize font-semibold font-inherit shrink-0 mq1050:text-[1.875rem] mq1050:leading-[2.375rem] mq450:text-[1.438rem] mq450:leading-[1.75rem]">
                      Earn uo to $1000 for adding a new car
                    </h2>
                  </div>
                  <div className="h-[1.638rem] w-[1.638rem] relative rounded-[50%] bg-gray-2400 shrink-0" />
                </div>
                <div className="self-stretch h-[9.713rem] relative text-[1rem] leading-[200%] capitalize text-dimgray-600 inline-block shrink-0">
                  We'll use your car's location to calculate your Onboard Bonus.
                  Each ZIP code will belong to one of five zones. Zones are
                  based on guest demand for cars—more guest demand means a
                  higher zone, and bigger bonuses for cars. Zone 1 gets the
                  highest bonus, while Zones 4 and 5 aren't eligible for the
                  Onboard Bonus.
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[1rem] px-[1.437rem] bg-gray-1600 rounded-9xs flex flex-row items-start justify-start gap-[0.625rem]">
                <a className="[text-decoration:none] relative text-[1rem] capitalize font-semibold font-inter text-white text-left inline-block min-w-[5.5rem] whitespace-nowrap">
                  learn more
                </a>
                <div className="flex flex-col items-start justify-start pt-[0.268rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[0.656rem] h-[0.656rem] relative object-contain"
                    alt=""
                    src="/group-1000004072@2x.png"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <GroupComponent />
      <FrameComponent5 />
      <footer className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[4.75rem] px-[7.687rem] pb-[2.875rem] box-border gap-[5.85rem] bg-[url('/public/demo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[2rem] text-white font-inter lg:flex-wrap lg:justify-center lg:pl-[3.813rem] lg:pr-[3.813rem] lg:box-border mq450:gap-[1.438rem] mq450:pt-[3.063rem] mq450:pb-[1.875rem] mq450:box-border mq750:gap-[2.938rem] mq750:pl-[1.875rem] mq750:pr-[1.875rem] mq750:box-border">
        <div className="w-[22.963rem] flex flex-col items-start justify-start gap-[0.656rem] min-w-[22.963rem] max-w-full lg:flex-1 mq750:min-w-full">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[6.25rem] mq1050:text-[1.625rem] mq450:text-[1.188rem]">
            Drivee
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.281rem] text-[1.181rem] text-darkgray-400 mq450:gap-[1.125rem]">
            <div className="self-stretch relative leading-[185.02%] capitalize">
              is just a drivee ride away.take control of you journey today
            </div>
            <div className="flex flex-row items-start justify-start gap-[1.612rem]">
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/frame-138.svg"
              />
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/frame-139.svg"
              />
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/frame-140.svg"
              />
              <img
                className="h-[2.231rem] w-[2.306rem] relative overflow-hidden shrink-0 min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/frame-141.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[34rem] flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border min-w-[34rem] max-w-full text-[1.25rem] lg:flex-1 mq1050:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq750:flex-wrap">
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
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] gap-[1rem]">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.625rem]">
                <div className="relative leading-[185.02%] capitalize font-medium inline-block min-w-[2.438rem] mq450:text-[1rem] mq450:leading-[1.875rem]">
                  city
                </div>
              </div>
              <div className="relative text-[0.875rem] leading-[185.02%] capitalize text-lightgray-100">
                <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                  <li>dhaka</li>
                  <li>chittagong</li>
                  <li>sylhet</li>
                  <li>kulna</li>
                  <li>borishal</li>
                  <li>rajshahi</li>
                  <li>rongpur</li>
                </ul>
              </div>
            </div>
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
      </footer>
    </div>
  );
};

export default CarHsotingAndRefer;
