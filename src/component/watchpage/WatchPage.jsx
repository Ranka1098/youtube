import { useParams } from "react-router-dom";
import VideoDetail from "./VideoDetail";
import Comments from "../Comment.s/Comments";
import RecammandedVideo from "../recomanded/RecammandedVideo";
const WatchPage = () => {
  const { id } = useParams();

  return (
    <div className="flex gap-5 flex-col lg:flex-row justify-between  ">
      {/* overlay */}
      <div className="m-5  ">
        <iframe
          className=" w-[28rem] h-[16rem] md:w-[45rem] md:h-[30rem] lg:w-[50rem] lg:h-[29rem] "
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div>
          <VideoDetail id={id} />
          <Comments id={id} />
        </div>
      </div>
      <div className="mt-3">
        <RecammandedVideo />
      </div>
    </div>
  );
};

export default WatchPage;
