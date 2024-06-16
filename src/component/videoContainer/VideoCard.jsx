import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info || {};
  const { thumbnails, title } = snippet || {};
  const { maxres } = thumbnails || {};
  const imageUrl = maxres?.url;

  const { viewCount } = statistics || {};
  return (
    <div className="max-w-[500px] p-2 border my-2 mx-2 ">
      <img src={imageUrl} alt="" />
      <p>{title}</p>
      <p>{viewCount} views</p>
    </div>
  );
};

export default VideoCard;
