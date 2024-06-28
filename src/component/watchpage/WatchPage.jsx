import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import VideoDetail from "./VideoDetail";
import Comment from "./Comment"
const WatchPage = () => {
  const { id } = useParams();

  return (
    <>
      {/* overlay */}
      <div className="mx-10 my-5  ">
        <iframe
          className=" rounded-md"
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div>
          <VideoDetail id={id} />
          <Comment id={id}/>
        </div>

      </div>
    </>
  );
};

export default WatchPage;
