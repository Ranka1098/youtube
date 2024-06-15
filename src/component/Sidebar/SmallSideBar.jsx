import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";

const SmallSideBar = () => {
  return (
    <div className=" flex flex-col gap-5">
      <button className="flex items-center justify-center flex-col">
        <IoMdHome size={22} />
        <p className="text-xs">Home</p>
      </button>
      <button className="flex items-center justify-center flex-col">
        <SiYoutubeshorts size={22} />
        <p className="text-xs">Shorts</p>
      </button>
      <button className="flex items-center justify-center flex-col">
        <MdSubscriptions size={22} />
        <p className="text-xs">Subscription</p>
      </button>
      <button className="flex items-center justify-center flex-col">
        <CiYoutube size={22} />
        <p className="text-xs">You</p>
      </button>
    </div>
  );
};

export default SmallSideBar;
