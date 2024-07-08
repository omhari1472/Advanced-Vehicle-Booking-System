import FrameComponent7 from "../components/FrameComponent7";

const EasyOnboarding = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-row items-start justify-start pt-[6.056rem] px-[9.5rem] pb-[6.006rem] box-border gap-[1.456rem] bg-[url('/public/easy-onboarding@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] text-left text-[0.875rem] text-dimgray-1000 font-inter mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[4.75rem] mq750:pr-[4.75rem] mq750:box-border mq1125:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] max-w-full mq1050:min-w-full">
        <div className="self-stretch rounded-smi bg-white box-border flex flex-col items-center justify-start pt-[11.5rem] pb-[11.687rem] pr-[1.25rem] pl-[1.312rem] gap-[0.812rem] max-w-full border-[0.5px] border-solid border-silver-400 mq450:pt-[7.5rem] mq450:pb-[7.625rem] mq450:box-border">
          <div className="w-[42.375rem] h-[26.688rem] relative rounded-smi bg-white box-border hidden max-w-full border-[0.5px] border-solid border-silver-400" />
          <div className="flex flex-row items-start justify-start py-[0rem] px-[4.75rem]">
            <img
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/oouiupload.svg"
            />
          </div>
          <div className="relative font-medium z-[1]">
            Upload your vehicle image
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.893rem] mq750:flex-wrap mq750:gap-[0.938rem]">
          <div className="h-[9rem] flex-1 relative rounded-[9.06px] bg-white min-w-[9.625rem]" />
          <div className="h-[9rem] flex-1 relative rounded-[9.06px] bg-white min-w-[9.625rem]" />
          <div className="h-[9rem] flex-1 relative rounded-[9.06px] bg-white min-w-[9.625rem]" />
        </div>
      </div>
      <FrameComponent7 />
    </div>
  );
};

export default EasyOnboarding;
