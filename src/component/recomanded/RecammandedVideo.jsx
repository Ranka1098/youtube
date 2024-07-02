import React, { useEffect } from "react";
import { YTB_Video_URL } from "../../utils/Apidata";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../../store/categorySlice";
import RecamandedSingleVideo from "./RecamandedSingleVideo";
import { Link } from "react-router-dom";

const RecammandedVideo = () => {
  const dispatch = useDispatch();

  const videos = ([] = useSelector((store) => store.category.video));
  console.log(videos);
  const getVideo = async () => {
    const resp = await fetch(YTB_Video_URL);
    const result = await resp.json();
    dispatch(setHomeVideo(result.items));
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <>
      <div className="flex flex-col h-[80%] overflow-y-scroll gap-2">
        {videos?.map((video) => {
          const videoId = video.id?.videoId || video.id;
          return (
            <Link to={"/watch/" + videoId} key={videoId}>
              <RecamandedSingleVideo video={video} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default RecammandedVideo;
