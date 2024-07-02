import React from "react";

const RecamandedSingleVideo = ({ video }) => {
  const { snippet } = video;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="flex flex-col  gap-4 p-2">
      {/* Thumbnail */}
      <div className="w-[320px] h-[170px]">
        <img
          src={thumbnails?.standard?.url || thumbnails?.default?.url}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Video Details */}
      <div className="flex flex-col justify-between">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{channelTitle}</p>
        <p className="text-sm text-gray-500">Views</p>
      </div>
    </div>
  );
};

export default RecamandedSingleVideo;
