import React, { useEffect, useState } from "react";
import { YTB_Video_URL } from "../../utils/Apidata";
import VideoCard from "./VideoCard";
import "./videocontainer.css";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(YTB_Video_URL);
        const result = await resp.json();
        setVideos(result.items);
      } catch (err) {
        setError(err);
      }
    };
    getData();
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 h-[calc(100vh-128px)] overflow-y-scroll hide-scroll">
      {videos.map((video) => (
        <Link to={"/watch/" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
