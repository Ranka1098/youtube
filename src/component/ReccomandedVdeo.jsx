import React, { useEffect } from "react";
import { YTB_Video_URL } from "../utils/Apidata";

const ReccomandedVdeo = () => {
  const fetchYoutubeVideos = async () => {
    const resp = await fetch(YTB_Video_URL);
    const result = await resp.json();
    console.log(result.items);
  };

  useEffect(() => {
    fetchYoutubeVideos();
  },[]);
  return <div></div>;
};

export default ReccomandedVdeo;
