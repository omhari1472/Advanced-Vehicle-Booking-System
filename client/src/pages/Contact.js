import ProcessContainer from "../components/ProcessContainer";
import FormContainer from "../components/FormContainer";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-[63.506rem] relative bg-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1300:h-auto">
      <div className="h-[154.5rem] w-[91.25rem] relative bg-whitesmoke-300 max-w-[calc(100%_-_0px)]" />
      <div className="h-[67.444rem] w-[42.644rem] relative hidden max-w-full z-[1]" />
      <main className="w-full !m-[0] absolute h-full top-[0rem] bottom-[0rem] left-[0rem] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[8.4rem] max-w-full z-[2] mq800:gap-[2.125rem] mq450:gap-[1.063rem] mq1300:flex-wrap mq1300:gap-[4.188rem]">
        <div className="self-stretch w-[47.238rem] relative bg-white hidden max-w-full" />
        <ProcessContainer />
        <div className="w-[30.444rem] flex flex-col items-start justify-start pt-[8.462rem] px-[0rem] pb-[0rem] box-border min-w-[30.444rem] max-w-full mq800:min-w-full mq1300:flex-1">
          <FormContainer />
        </div>
      </main>
    </div>
  );
};

export default Contact;
