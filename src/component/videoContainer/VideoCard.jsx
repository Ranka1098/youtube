import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info || {};
  const { thumbnails, title } = snippet || {};
  const { maxres } = thumbnails || {};
  const imageUrl = maxres?.url;

  const { viewCount } = statistics || {};
  return (
    <div className="max-w-[500px] p-2 border my-2 mx-2 flex flex-col justify-between rounded-md shadow-md ">
      <img src={imageUrl} alt="" />
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-400">{viewCount} views</p>
    </div>
  );
};

export default VideoCard;
