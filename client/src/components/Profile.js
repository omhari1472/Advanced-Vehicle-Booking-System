import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({ iconamoonprofileFill }) {
  const history = useNavigate();
  const handleMyProfileClick = () => {
    console.log("clicked");
    history("/my-profile");
  };

  return (
    <div>
      <button type="button" onClick={handleMyProfileClick}>
        <div className="self-stretch rounded-[4.55px] flex flex-row items-center justify-start pt-[0.643rem] pb-[0.637rem] pr-[9.937rem] pl-[0.937rem] gap-[0.568rem] mq450:pr-[1.25rem] mq450:box-border">
          <img
            className="h-[1.706rem] w-[1.706rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={iconamoonprofileFill}
          />
          <div className="relative capitalize font-medium inline-block min-w-[4.813rem]">
            my profile
          </div>
        </div>
      </button>
    </div>
  );
}

export default Profile;
