import React from "react";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const history = useNavigate();
  const handleDashboardClick = () => {
    console.log("clicked");
    history("/dashboard-of-customer");
  };
  return (
    <div>
      <button type="button" onClick={handleDashboardClick}>
        <div className="self-stretch rounded-[4.55px] bg-gray-2300 flex flex-row items-center justify-start pt-[0.643rem] pb-[0.637rem] pr-[9.375rem] pl-[0.937rem] gap-[0.568rem] text-white mq450:pr-[1.25rem] mq450:box-border">
          <img
            className="h-[1.706rem] w-[1.706rem] relative overflow-hidden shrink-0"
            alt=""
            src="/antdesignhomefilled1.svg"
          />
          <div className="relative capitalize font-semibold inline-block min-w-[5.313rem]">
            Dashboard
          </div>
        </div>
      </button>{" "}
    </div>
  );
}

export default DashBoard;
