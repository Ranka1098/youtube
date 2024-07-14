import React from "react";

const VideoMainPage = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="w-[350px] h-[200px] rounded-md bg-gray-300 mb-2 p-1">
          </div>
        ))}
    </div>
  );
};

export default VideoMainPage;
