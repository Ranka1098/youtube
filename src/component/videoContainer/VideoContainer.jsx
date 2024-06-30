import React, { useEffect, useState } from "react";
import { YTB_Video_URL } from "../../utils/Apidata";
import { Video_Api_Key } from "../../utils/Apidata";
import { setHomeVideo } from "../../store/categorySlice";

import VideoCard from "./VideoCard";
import "./videocontainer.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { video = [], category } = useSelector((store) => store?.category || {});
  const fetchYoutubeVideos = async () => {
    const resp = await fetch(YTB_Video_URL);
    const result = await resp.json();
    dispatch(setHomeVideo(result?.items));
  };
  const fetchByCategory = async () => {
    const resp = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${Video_Api_Key}`
    );
    const result = await resp.json();
    console.log(result.items);
    dispatch(setHomeVideo(result?.items));
  };

  useEffect(() => {
    if (category === "all") {
      fetchYoutubeVideos();
    } else {
      fetchByCategory();
    }
  }, [category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 h-[calc(100vh-128px)] overflow-y-scroll hide-scroll">
      {video.map((video) => {
       const videoId = video.id?.videoId || video.id;
        
        return (
        
          <Link to={"/watch/" + videoId} key={videoId}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
