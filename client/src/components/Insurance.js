import React from "react";
import { useNavigate } from "react-router-dom";

function Insurance() {
    const history = useNavigate();
  function handleInsuranceClick() {
    console.log("clicked");
    history("/insurance");
  }
  return (
    <div>
      <button type="button" onClick={handleInsuranceClick}>
        <div className="self-stretch rounded-[4.55px] bg-white flex flex-row items-center justify-start pt-[0.643rem] pb-[0.637rem] pr-[5.937rem] pl-[0.937rem] gap-[0.568rem] whitespace-nowrap mq450:pr-[1.25rem] mq450:box-border">
          <img
            className="h-[1.706rem] w-[1.706rem] relative overflow-hidden shrink-0"
            alt=""
            src="/iconamoonprofilefill.svg"
          />
          <div className="relative font-medium capitalize">{`insurance & policy`}</div>
        </div>
      </button>
    </div>
  );
}

export default Insurance;
