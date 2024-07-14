import React, { useEffect, useState } from "react";
import { YTB_Video_URL } from "../../utils/Apidata";
import { Video_Api_Key } from "../../utils/Apidata";
import { setHomeVideo } from "../../store/categorySlice";

import VideoCard from "./VideoCard";
import "./videocontainer.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideoMainPage from "../../skeleton/VideoMainPage";

const VideoContainer = () => {
  const [pageToken, setPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    video = [],
    category,
    searchResult,
  } = useSelector((store) => store?.category || {});

  const fetchYoutubeVideos = async () => {
    setLoading(true);
    const resp = await fetch(YTB_Video_URL);
    const result = await resp.json();
    dispatch(setHomeVideo(result?.items));
    setLoading(false);
  };

  const fetchByCategory = async () => {
    setLoading(true);
    const resp = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${Video_Api_Key}`
    );
    const result = await resp.json();
    dispatch(setHomeVideo(result?.items));
    setLoading(false);
  };

  useEffect(() => {
    if (category === "all") {
      fetchYoutubeVideos();
    } else {
      fetchByCategory();
    }
  }, [category]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
        !loading
      ) {
        if (category === "all") {
          fetchYoutubeVideos(pageToken);
        } else {
          fetchByCategory(pageToken);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageToken, loading, category]);

  const videosToDisplay = searchResult.length > 0 ? searchResult : video;

  return videosToDisplay.length === 0 ? (
    <VideoMainPage />
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 h-[calc(100vh-134px)] overflow-y-scroll hide-scroll">
      {videosToDisplay.map((video) => {
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
