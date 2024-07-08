import LiveCarBonus from "./LiveCarBonus";
import ContactInfo from "./ContactInfo";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[3.15rem] text-gray-2100 font-inter ${className}`}
    >
      <div className="w-[59.113rem] flex flex-col items-start justify-start gap-[2.625rem] max-w-full mq750:gap-[1.313rem]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[3.15rem] shrink-0 max-w-full mq750:gap-[1.563rem]">
          <div className="relative leading-[172.52%] capitalize font-semibold inline-block max-w-full mq1050:text-[2.5rem] mq1050:leading-[4.375rem] mq450:text-[1.875rem] mq450:leading-[3.25rem]">
            When you refer a friend
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[2.625rem] max-w-full text-black mq1050:flex-wrap mq750:gap-[1.313rem]">
            <LiveCarBonus
              liveCarIcon="+10%"
              whenCarIsLive="When car is live"
              youGetA200BonusWhenYourFr="You get a $200 bonus when your friend becomes a host and list their first car."
            />
            <LiveCarBonus
              liveCarIcon="+25%"
              whenCarIsLive="referred host earnings"
              youGetA200BonusWhenYourFr="You’ll also get the equivalent of 25% of your friend’s earnings for their first 60 days after listing a car."
              propFlex="1"
              propPadding="2.062rem 1.25rem 2.062rem 2.312rem"
              propMinWidth="unset"
            />
          </div>
        </div>
        <div className="self-stretch rounded-mini-7 bg-whitesmoke-100 box-border overflow-hidden flex flex-col items-center justify-start pt-[3.062rem] pb-[4.25rem] pr-[1.375rem] pl-[1.25rem] gap-[3.106rem] shrink-0 max-w-full text-gray-2300 border-[3px] border-solid border-whitesmoke-900 mq750:gap-[1.563rem] mq750:pt-[2rem] mq750:pb-[2.75rem] mq750:box-border">
          <div className="w-[38.563rem] flex flex-col items-start justify-start gap-[0.525rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] shrink-0">
              <div className="relative capitalize font-semibold mq1050:text-[2.5rem] mq450:text-[1.875rem]">
                Refer a friend
              </div>
            </div>
            <div className="relative text-[1.181rem] leading-[172.52%] capitalize text-dimgray-600">
              Input your information to get your referral link or submit a
              referee.
            </div>
          </div>
          <ContactInfo
            propAlignSelf="unset"
            propPadding="0rem 0rem 0rem 0.125rem"
            propWidth="38.613rem"
          />
          <div className="w-[38.613rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full">
            <button className="cursor-pointer [border:none] pt-[0.987rem] px-[1.937rem] pb-[0.981rem] bg-gray-1600 shadow-[16.8px_36.7px_11.55px_rgba(97,_0,_0,_0),_10.5px_23.1px_10.5px_rgba(97,_0,_0,_0.01),_6.3px_12.6px_8.4px_rgba(97,_0,_0,_0.05),_3.1px_6.3px_6.3px_rgba(97,_0,_0,_0.09),_1px_1px_3.15px_rgba(97,_0,_0,_0.1),_0px_0px_0px_rgba(97,_0,_0,_0.1)] rounded-2xs-5 flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray-500">
              <div className="relative text-[1.181rem] leading-[2.063rem] capitalize font-semibold font-inter text-white text-left">
                refer a friend
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
