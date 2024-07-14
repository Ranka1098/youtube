import React, { useEffect, useState } from "react";
import { Video_Api_Key } from "../../utils/Apidata";
import { MdOutlineThumbDownAlt, MdOutlineThumbUpAlt } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { BsSave } from "react-icons/bs";
import Description from "./Description";

const VideoDetail = ({ id }) => {
  const [videoDataById, setVideoDataById] = useState([]);
  const [issubscribe, setIsSubscribe] = useState(false);
  const link = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${Video_Api_Key}`;

  const valueConverter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else {
      if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
      } else {
        return value;
      }
    }
  };
  const getvideo = async () => {
    const resp = await fetch(link);
    const result = await resp.json();
    setVideoDataById(result?.items[0]);
  };
  useEffect(() => {
    getvideo();
  }, [id]);
  // extract data from video details
  const { snippet, statistics } = videoDataById || {};
  const { channelTitle, description, publishedAt, localized } = snippet || {};
  const { likeCount, viewCount } = statistics || {};
  const { title } = localized || {};
  return (
    <div className=" w-[28rem]  md:w-[45rem] lg:w-[50rem] ">
      <p className="text-xl font-bold mt-2">{title}</p>
      {/* ---------------------------------------------------------- */}
      {/* views and time stamp */}
      <div className="flex justify-between items-center  border-b py-2">
        {/* views  */}
        <div className="flex gap-2">
          <p className="text-gray-500 text-lg">
            {valueConverter(viewCount)} views<span> {publishedAt}</span>
          </p>
        </div>
        {/* logo */}
        <div className="flex gap-2">
          <p className="text-gray-500 text-lg flex items-center gap-1">
            <span>
              <MdOutlineThumbUpAlt />
            </span>{" "}
            {likeCount}
          </p>
          <p className="text-gray-500 text-lg flex items-center gap-1">
            <span>
              <MdOutlineThumbDownAlt />
            </span>{" "}
            100
          </p>
          <p className="text-gray-500 text-lg flex items-center gap-1">
            <span>
              <RiShareForwardLine />
            </span>{" "}
            share{" "}
          </p>
          <p className="text-gray-500 text-lg flex items-center gap-1">
            <span>
              <BsSave />
            </span>
            save
          </p>
        </div>
      </div>
      {/* ---------------------------------------------------------- */}
      <div className="flex justify-between items-center ">
        {/* img */}
        <div className="flex gap-2 py-2">
          <img
            src="data:image/jpeg;base64,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"
            alt="channel img..."
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-md font-medium"> {channelTitle}</p>
            <p>1M subsciber</p>
          </div>
        </div>
        {/* subscribe button */}
        <button
          onClick={() => {
            setIsSubscribe(!issubscribe);
          }}
          className={`px-2 py-1 border-[1px] rounded-full ${
            issubscribe ? "bg-[#ff0000] text-white" : "bg-gray-300 text-black "
          }`}
        >
          {issubscribe ? <span>Subscribe</span> : <span>Subscribed</span>}
        </button>
      </div>
      <Description description={description} />
    </div>
  );
};

export default VideoDetail;
