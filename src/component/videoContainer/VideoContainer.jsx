import React, { useEffect, useState } from "react";
import { video_URL } from "../../utils/Apidata";
import VideoCard from "./VideoCard";
import "./videocontainer.css"

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(video_URL);
        const result = await resp.json();
        setVideos(result.items);
      } catch (err) {
        console.log("error", err);
      }
    };
    getData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 h-[calc(100vh-128px)] overflow-y-scroll hide-scroll">
      {videos.map((video) => (
        <VideoCard info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
