//in components MyOrder.js
import React from "react";
import { useNavigate } from "react-router-dom";

function MyOrder() {
  const history = useNavigate();
  function handleMyOrderClick() {
    console.log("clicked");
    history("/my-order");
  }

  return (
    <div>
      <button type="button" onClick={handleMyOrderClick}>
        <div className="self-stretch rounded-[4.55px] bg-white flex flex-row items-center justify-start pt-[0.637rem] pb-[0.643rem] pr-[10.187rem] pl-[1rem] gap-[0.568rem] whitespace-nowrap mq450:pr-[1.25rem] mq450:box-border">
          <img
            className="h-[1.706rem] w-[1.706rem] relative overflow-hidden shrink-0"
            alt=""
            src="/uiscalender1.svg"
          />
          <div className="relative capitalize font-semibold inline-block min-w-[4.5rem]">
            my order
          </div>
        </div>
      </button>
    </div>
  );
}

export default MyOrder;