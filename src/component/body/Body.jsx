import React from "react";
import SideBar from "../Sidebar/SideBar";
import Categorypills from "../categorypills/Categorypills";
import VideoContainer from "../videoContainer/VideoContainer";

const Body = () => {
  return (
    <div>
      <div className=" flex gap-1 overflow-hidden ">
        <div>
          <SideBar />
        </div>
        {/* -------------------- */}
        <div className="overflow-x-scroll ml-2 mr-3">
          <div>
            <Categorypills />
          </div>
          <div>
            <VideoContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
