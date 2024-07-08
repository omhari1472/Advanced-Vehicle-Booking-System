import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Demo from "../components/Demo";

const ContactUs = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0rem] box-border gap-[6.95rem] leading-[normal] tracking-[normal] mq450:gap-[1.75rem] mq750:gap-[3.5rem]">
      <FrameComponent2 />
      <img
        className="w-full h-[32.875rem] absolute !m-[0] top-[8.188rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/rectangle-825@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[12.3rem] box-border max-w-full text-left text-[3.375rem] text-white font-inter mq450:pb-[8rem] mq450:box-border">
        <div className="w-[57rem] flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
          <h1 className="m-0 relative text-inherit capitalize font-semibold font-inherit z-[1] mq1050:text-[2.688rem] mq450:text-[2rem]">{`Turn your vehicle into Extra money `}</h1>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[2.687rem] box-border max-w-full text-center text-[1.313rem] text-gainsboro-800 mq1050:pl-[1.313rem] mq1050:pr-[1.313rem] mq1050:box-border">
            <h3 className="m-0 flex-1 relative text-inherit leading-[2.296rem] font-normal font-inherit whitespace-pre-wrap inline-block max-w-full z-[1] mq450:text-[1.063rem] mq450:leading-[1.813rem]">{`Our peer-to-peer marketplace helps solve some of the most pressing challenges facing the world today, including environmental sustainability and access to economic opportunity.     `}</h3>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <img
        className="w-full h-[60.031rem] absolute !m-[0] right-[0rem] bottom-[22.719rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        alt=""
        src="/group-1000004060@2x.png"
      />
      <Demo propPadding="4.75rem 7.687rem 2.875rem" />
    </div>
  );
};

export default ContactUs;
