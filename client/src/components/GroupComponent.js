import OnboardingForm from "./OnboardingForm";
import StepTwo from "./StepTwo";
import StepFour from "./StepFour";
import FrameComponent3 from "./FrameComponent3";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[7.087rem] pb-[5.062rem] pr-[5.437rem] pl-[8.312rem] box-border gap-[7.45rem] bg-[url('/public/rectangle-730@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[3.15rem] text-gray-2300 font-inter lg:flex-wrap lg:gap-[3.75rem] lg:pl-[4.125rem] lg:pr-[2.688rem] lg:box-border mq1050:pt-[4.625rem] mq1050:pb-[3.313rem] mq1050:box-border mq750:gap-[1.875rem] mq750:pt-[3rem] mq750:pb-[2.125rem] mq750:pr-[1.313rem] mq750:pl-[2.063rem] mq750:box-border ${className}`}
    >
      <img
        className="h-[60rem] w-[90rem] relative object-cover hidden max-w-full"
        alt=""
        src="/rectangle-730@2x.png"
      />
      <OnboardingForm propPadding="0.525rem 0rem 0rem" />
      <div className="w-[33.656rem] flex flex-col items-start justify-start gap-[3.068rem] min-w-[33.656rem] max-w-full lg:flex-1 mq1050:min-w-full mq750:gap-[1.563rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.481rem] max-w-full mq750:gap-[1.25rem]">
          <div className="relative font-semibold inline-block max-w-full z-[1] mq1050:text-[2.5rem] mq450:text-[1.875rem]">
            Easy Onboarding
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.993rem] max-w-full text-[1.575rem]">
            <div className="flex flex-row items-start justify-start gap-[2.087rem] max-w-full mq450:flex-wrap mq450:gap-[1.063rem]">
              <img
                className="h-[1.625rem] w-[2.031rem] relative z-[1]"
                loading="lazy"
                alt=""
                src="/shape.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[0.262rem] px-[0rem] pb-[0rem] box-border max-w-full">
                <div className="relative leading-[1.063rem] font-medium z-[1] mq450:text-[1.25rem] mq450:leading-[0.813rem]">
                  Sign up and name your car.
                </div>
              </div>
            </div>
            <StepTwo
              uploadIcon="/vector-151.svg"
              propAlignSelf="unset"
              propPadding="0rem 0.937rem"
              propWidth="27.9rem"
            />
            <div className="flex flex-row items-start justify-start gap-[2.218rem] max-w-full mq750:flex-wrap mq750:gap-[1.125rem]">
              <img
                className="h-[1.575rem] w-[1.969rem] relative min-h-[1.563rem] z-[1]"
                loading="lazy"
                alt=""
                src="/group-10000040551.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[0.331rem] px-[0rem] pb-[0rem] box-border max-w-full shrink-0">
                <div className="relative leading-[1.063rem] font-medium z-[1] mq450:text-[1.25rem] mq450:leading-[0.813rem]">
                  Create a profile and upload photos.
                </div>
              </div>
            </div>
            <StepFour
              connectIcon="/vector-161.svg"
              ifYouHaveMultipleVehicles="If you have multiple vehicles, use the car manager to create a profile for each one. Listing each car costs $100 for initial setup and $20 per month—but you won't be charged until your car is ready for bookings."
              propPadding="0rem 0.937rem"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.587rem] max-w-full">
              <div className="flex flex-row items-start justify-start gap-[2.231rem] max-w-full mq450:flex-wrap mq450:gap-[1.125rem]">
                <img
                  className="h-[1.969rem] w-[1.969rem] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/notetext1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.462rem] px-[0rem] pb-[0rem]">
                  <div className="relative leading-[1.063rem] font-medium z-[1] mq450:text-[1.25rem] mq450:leading-[0.813rem]">
                    Install Drivee Connect®
                  </div>
                </div>
              </div>
              <StepFour
                connectIcon="/vector-171.svg"
                ifYouHaveMultipleVehicles="We'll reach out to have our proprietary hardware, Getaround Connect®, installed in your car. Connect® lets guests unlock the car with their phone, and gives you insights about the car, trips, and vehicle security. Once Connect® is installed, you're ready for bookings!"
                propPadding="0rem 0rem 0rem 0.937rem"
              />
            </div>
          </div>
        </div>
        <FrameComponent3 propWidth="31.419rem" propPadding="0rem 0.687rem" />
      </div>
    </section>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
