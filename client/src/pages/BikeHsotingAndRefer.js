import FrameComponent4 from "../components/FrameComponent4";
import OnboardingForm from "../components/OnboardingForm";
import StepTwo from "../components/StepTwo";
import StepFour from "../components/StepFour";
import FrameComponent3 from "../components/FrameComponent3";
import ContactInfo from "../components/ContactInfo";

const BikeHsotingAndRefer = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2.437rem] px-[0rem] pb-[0rem] box-border gap-[3.706rem] leading-[normal] tracking-[normal] text-left text-[3.125rem] text-gray-2100 font-inter mq750:gap-[1.875rem]">
      <img
        className="w-full h-[32.875rem] absolute !m-[0] top-[8.188rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/rectangle-825@2x.png"
      />
      <FrameComponent4 />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[8.456rem] pr-[1.25rem] pl-[2.375rem] box-border max-w-full text-left text-[3.375rem] text-white font-inter mq450:pb-[5.5rem] mq450:box-border">
        <div className="flex flex-col items-center justify-start gap-[2.5rem] max-w-full z-[1] mq450:gap-[1.25rem]">
          <div className="flex flex-col items-center justify-start gap-[1.25rem] max-w-full">
            <h1 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq450:text-[2rem] mq750:text-[2.688rem]">{`Turn your Bike into Extra money `}</h1>
            <div className="w-[48.813rem] relative text-[1.25rem] leading-[179.52%] font-roboto text-center inline-block max-w-full mq450:text-[1rem] mq450:leading-[1.813rem]">
              When you list your car, you're earning money while helping others
              navigate your city. It's a win-win, and your next big opportunity.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-[1.25rem] text-gray-2300">
            <div className="rounded-9xs bg-white flex flex-row items-center justify-center py-[1rem] px-[0.625rem] whitespace-nowrap border-[1px] border-solid border-white">
              <div className="relative capitalize font-medium">
                share you bike
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[63.1rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[3.125rem] text-gray-1600 font-inter">
        <div className="w-[45.6rem] flex flex-col items-start justify-start gap-[6.25rem] max-w-full mq450:gap-[1.563rem] mq750:gap-[3.125rem]">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block shrink-0 max-w-full mq450:text-[1.875rem] mq750:text-[2.5rem]">
            Earn Extra With Bonuses
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-[2.375rem] text-gray-2300">
            <img
              className="h-[29.563rem] w-[44.375rem] absolute !m-[0] top-[-5.312rem] right-[-35.65rem] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-821@2x.png"
            />
            <div className="flex-1 shadow-[38px_156px_45px_rgba(201,_201,_201,_0),_24px_100px_41px_rgba(201,_201,_201,_0.01),_14px_56px_35px_rgba(201,_201,_201,_0.05),_6px_25px_26px_rgba(201,_201,_201,_0.09),_2px_6px_14px_rgba(201,_201,_201,_0.1)] rounded-2xl bg-white box-border flex flex-col items-start justify-start py-[3.125rem] pr-[3.062rem] pl-[3.25rem] gap-[1.312rem] shrink-0 max-w-full z-[1] border-[2px] border-solid border-gainsboro-100 mq750:py-[2rem] mq750:pr-[1.5rem] mq750:pl-[1.625rem] mq750:box-border">
              <h2 className="m-0 w-[33.2rem] relative text-inherit leading-[124.52%] capitalize font-semibold font-inherit inline-block max-w-full mq450:text-[1.438rem] mq450:leading-[1.75rem] mq750:text-[1.875rem] mq750:leading-[2.375rem]">
                Earn uo to $1000 for adding a new bike
              </h2>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.937rem] box-border max-w-full text-[1rem] text-dimgray-600">
                <div className="h-[9.713rem] flex-1 relative leading-[200%] capitalize inline-block max-w-full">
                  We'll use your car's location to calculate your Onboard Bonus.
                  Each ZIP code will belong to one of five zones. Zones are
                  based on guest demand for cars—more guest demand means a
                  higher zone, and bigger bonuses for cars. Zone 1 gets the
                  highest bonus, while Zones 4 and 5 aren't eligible for the
                  Onboard Bonus.
                </div>
              </div>
              <div className="w-[20.338rem] flex flex-col items-end justify-start gap-[1.968rem] max-w-full mq450:gap-[1rem]">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <button className="cursor-pointer [border:none] py-[1rem] px-[1.437rem] bg-gray-1600 rounded-9xs flex flex-row items-start justify-start gap-[0.625rem] shrink-0">
                    <a className="[text-decoration:none] relative text-[1rem] capitalize font-semibold font-inter text-white text-left inline-block min-w-[5.5rem] whitespace-nowrap">
                      learn more
                    </a>
                    <div className="flex flex-col items-start justify-start pt-[0.262rem] px-[0rem] pb-[0rem]">
                      <img
                        className="w-[0.656rem] h-[0.656rem] relative object-contain"
                        alt=""
                        src="/group-1000004072@2x.png"
                      />
                    </div>
                  </button>
                </div>
                <div className="w-[1.638rem] h-[1.638rem] relative rounded-[50%] bg-gray-2400 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.356rem] box-border max-w-full text-left text-[3.15rem] text-gray-2300 font-inter">
        <div className="flex-1 flex flex-row items-start justify-center pt-[7.187rem] pb-[5.062rem] pr-[5.437rem] pl-[8.312rem] box-border gap-[7.306rem] bg-[url('/public/rectangle-730@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq1050:pt-[4.688rem] mq1050:pb-[3.313rem] mq1050:box-border mq1225:flex-wrap mq1225:gap-[3.625rem] mq1225:pl-[4.125rem] mq1225:pr-[2.688rem] mq1225:box-border mq750:gap-[1.813rem] mq750:pt-[3.063rem] mq750:pb-[2.125rem] mq750:pr-[1.313rem] mq750:pl-[2.063rem] mq750:box-border">
          <img
            className="h-[60rem] w-[90rem] relative object-cover hidden max-w-full"
            alt=""
            src="/rectangle-730@2x.png"
          />
          <OnboardingForm />
          <img
            className="h-[0rem] w-[0rem] relative hidden"
            alt=""
            src="/shape.svg"
          />
          <div className="w-[33.8rem] flex flex-col items-start justify-start gap-[3.068rem] min-w-[33.8rem] max-w-full mq1050:min-w-full mq1225:flex-1 mq750:gap-[1.563rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.875rem] max-w-full">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full">
                <div className="relative font-semibold z-[1] mq450:text-[1.875rem] mq750:text-[2.5rem]">
                  Easy Onboarding
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.587rem] max-w-full text-[1.575rem]">
                <div className="w-[27.106rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.456rem] box-border gap-[0.718rem] max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[1.981rem] max-w-full mq450:flex-wrap mq450:gap-[1rem]">
                    <img
                      className="h-[2.294rem] w-[2.294rem] relative object-cover z-[3]"
                      loading="lazy"
                      alt=""
                      src="/mask-group@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start pt-[0.768rem] px-[0rem] pb-[0rem] box-border max-w-full shrink-0">
                      <div className="relative leading-[1.063rem] font-medium z-[1] mq450:text-[1.25rem] mq450:leading-[0.813rem]">
                        Sign up and name your car.
                      </div>
                    </div>
                  </div>
                  <StepTwo uploadIcon="/vector-15.svg" />
                </div>
                <div className="flex flex-row items-start justify-start pt-[0rem] px-[0.125rem] pb-[0.4rem] box-border max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[2.218rem] max-w-full mq750:flex-wrap mq750:gap-[1.125rem]">
                    <img
                      className="h-[1.575rem] w-[1.969rem] relative min-h-[1.563rem] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/group-1000004055.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[0.331rem] px-[0rem] pb-[0rem] box-border max-w-full shrink-0">
                      <div className="relative leading-[1.063rem] font-medium z-[1] mq450:text-[1.25rem] mq450:leading-[0.813rem]">
                        Create a profile and upload photos.
                      </div>
                    </div>
                  </div>
                </div>
                <StepFour
                  connectIcon="/vector-16.svg"
                  ifYouHaveMultipleVehicles="If you have multiple vehicles, use the car manager to create a profile for each one. Listing each car costs $100 for initial setup and $20 per month—but you won't be charged until your car is ready for bookings."
                />
                <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[2.231rem] max-w-full mq450:flex-wrap mq450:gap-[1.125rem]">
                    <img
                      className="h-[1.969rem] w-[1.969rem] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/notetext.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[0.462rem] px-[0rem] pb-[0rem]">
                      <div className="relative leading-[1.063rem] font-medium z-[1] mq450:text-[1.25rem] mq450:leading-[0.813rem]">
                        Install Drivee Connect®
                      </div>
                    </div>
                  </div>
                </div>
                <StepFour
                  connectIcon="/vector-17.svg"
                  ifYouHaveMultipleVehicles="We'll reach out to have our proprietary hardware, Getaround Connect®, installed in your car. Connect® lets guests unlock the car with their phone, and gives you insights about the car, trips, and vehicle security. Once Connect® is installed, you're ready for bookings!"
                  propPadding="0rem 0rem 0rem 1.125rem"
                />
              </div>
            </div>
            <FrameComponent3 />
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[1.393rem] box-border max-w-full">
        <div className="w-[59.113rem] flex flex-col items-start justify-start gap-[2.625rem] max-w-full mq750:gap-[1.313rem]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[3.15rem] shrink-0 max-w-full mq750:gap-[1.563rem]">
            <h1 className="m-0 relative text-inherit leading-[172.52%] capitalize font-semibold font-inherit inline-block max-w-full mq450:text-[1.875rem] mq450:leading-[3.25rem] mq750:text-[2.5rem] mq750:leading-[4.313rem]">
              When you refer a friend
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center gap-[2.625rem] max-w-full text-black mq1050:flex-wrap mq750:gap-[1.313rem]">
              <div className="flex-[0.961] rounded-[17.85px] bg-whitesmoke-100 box-border flex flex-col items-start justify-center py-[2.375rem] pr-[1.25rem] pl-[3.25rem] gap-[1.05rem] min-w-[22.625rem] max-w-full border-[3px] border-solid border-whitesmoke-900 mq1050:flex-1 mq450:pl-[1.25rem] mq450:box-border mq450:min-w-full">
                <div className="flex flex-col items-start justify-start gap-[0.393rem]">
                  <b className="w-[9.644rem] relative leading-[3.281rem] capitalize inline-block mq450:text-[1.875rem] mq450:leading-[1.938rem] mq750:text-[2.5rem] mq750:leading-[2.625rem]">
                    +10%
                  </b>
                  <h3 className="m-0 relative text-[1.875rem] leading-[3.25rem] capitalize font-medium font-inherit text-darkslategray-1600 mq450:text-[1.125rem] mq450:leading-[1.938rem] mq750:text-[1.5rem] mq750:leading-[2.563rem]">
                    When bike is live
                  </h3>
                </div>
                <div className="w-[21.388rem] h-[7.481rem] relative text-[1.25rem] leading-[172.52%] text-dimgray-600 inline-block shrink-0 max-w-full mq450:text-[1rem] mq450:leading-[1.75rem]">
                  You get a $200 bonus when your friend becomes a host and list
                  their first car.
                </div>
              </div>
              <div className="flex-1 rounded-[17.85px] bg-whitesmoke-100 box-border flex flex-col items-start justify-center py-[2.062rem] pr-[1.25rem] pl-[2.312rem] gap-[1.05rem] max-w-full border-[3px] border-solid border-whitesmoke-900 mq1050:flex-1">
                <div className="flex flex-col items-start justify-start gap-[0.393rem] max-w-full">
                  <b className="w-[10.431rem] relative leading-[3.281rem] capitalize inline-block mq450:text-[1.875rem] mq450:leading-[1.938rem] mq750:text-[2.5rem] mq750:leading-[2.625rem]">
                    +25%
                  </b>
                  <h3 className="m-0 relative text-[1.875rem] leading-[3.25rem] capitalize font-medium font-inherit text-darkslategray-1600 mq450:text-[1.125rem] mq450:leading-[1.938rem] mq750:text-[1.5rem] mq750:leading-[2.563rem]">
                    referred host earnings
                  </h3>
                </div>
                <div className="w-[23.813rem] h-[8.069rem] relative text-[1.25rem] leading-[172.52%] text-dimgray-600 inline-block shrink-0 max-w-full mq450:text-[1rem] mq450:leading-[1.75rem]">
                  You’ll also get the equivalent of 25% of your friend’s
                  earnings for their first 60 days after listing a car.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-mini-7 bg-whitesmoke-100 box-border overflow-hidden flex flex-col items-center justify-start pt-[3.062rem] px-[1.25rem] pb-[4.25rem] gap-[4.431rem] shrink-0 max-w-full text-[3.15rem] text-gray-2300 border-[3px] border-solid border-whitesmoke-900 mq450:gap-[1.125rem] mq750:gap-[2.188rem] mq750:pt-[2rem] mq750:pb-[2.75rem] mq750:box-border">
            <div className="w-[38.563rem] flex flex-col items-start justify-start gap-[1.781rem] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.525rem]">
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] shrink-0">
                  <div className="relative capitalize font-semibold mq450:text-[1.875rem] mq750:text-[2.5rem]">
                    Refer a friend
                  </div>
                </div>
                <div className="relative text-[1.181rem] leading-[172.52%] capitalize text-dimgray-600">
                  Input your information to get your referral link or submit a
                  referee.
                </div>
              </div>
              <ContactInfo />
            </div>
            <div className="w-[38.738rem] flex flex-row items-start justify-center py-[0rem] pr-[0.187rem] pl-[0rem] box-border max-w-full">
              <button className="cursor-pointer [border:none] pt-[0.987rem] px-[1.937rem] pb-[0.981rem] bg-gray-1600 shadow-[16.8px_36.7px_11.55px_rgba(97,_0,_0,_0),_10.5px_23.1px_10.5px_rgba(97,_0,_0,_0.01),_6.3px_12.6px_8.4px_rgba(97,_0,_0,_0.05),_3.1px_6.3px_6.3px_rgba(97,_0,_0,_0.09),_1px_1px_3.15px_rgba(97,_0,_0,_0.1),_0px_0px_0px_rgba(97,_0,_0,_0.1)] rounded-2xs-5 flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray-500">
                <div className="relative text-[1.181rem] leading-[2.063rem] capitalize font-semibold font-inter text-white text-left">
                  refer a friend
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-[4.75rem] px-[8.625rem] pb-[2.875rem] box-border gap-[4.5rem] bg-[url('/public/demo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[1.25rem] text-white font-inter mq1225:flex-wrap mq1225:justify-center mq1225:pl-[4.313rem] mq1225:pr-[4.313rem] mq1225:box-border mq450:gap-[1.125rem] mq450:pt-[3.063rem] mq450:pb-[1.875rem] mq450:box-border mq750:gap-[2.25rem] mq750:pl-[2.125rem] mq750:pr-[2.125rem] mq750:box-border">
        <div className="w-[24.313rem] flex flex-col items-start justify-start pt-[0rem] pb-[3.125rem] pr-[1.312rem] pl-[0rem] box-border min-h-[15.125rem] max-w-full text-[2rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.656rem]">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[6.25rem] mq450:text-[1.188rem] mq750:text-[1.625rem]">
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
        <div className="w-[19.125rem] flex flex-row items-start justify-between gap-[1.25rem]">
          <div className="flex flex-col items-start justify-start gap-[1rem]">
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
      </footer>
    </div>
  );
};

export default BikeHsotingAndRefer;
