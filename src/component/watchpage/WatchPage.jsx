import { useParams } from "react-router-dom";
import VideoDetail from "./VideoDetail";
import Comments from "../Comment.s/Comments";
import RecammandedVideo from "../recomanded/RecammandedVideo";
const WatchPage = () => {
  const { id } = useParams();

  return (
    <div className="flex  justify-between gap-5 ">
      {/* overlay */}
      <div className="m-5  ">
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
          <Comments id={id} />
        </div>
      </div>
      <div className="mt-5">
        <RecammandedVideo />
      </div>
    </div>
  );
};

export default WatchPage;
