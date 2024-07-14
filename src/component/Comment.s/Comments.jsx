import React, { useEffect, useState } from "react";
import { Video_Api_Key } from "../../utils/Apidata";
import { BiDislike, BiLike } from "react-icons/bi";

const Comments = ({ id }) => {
  const [data, setData] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [loading, setLoading] = useState(false);

  const getdata = async () => {
    setLoading(true);
    const resp = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${Video_Api_Key}`
    );
    const result = await resp.json();
    setData(result.items);
    setLoading(false);
  };

  useEffect(() => {
    getdata();
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("comments-container");
      if (
        container.scrollHeight - container.scrollTop <= container.clientHeight &&
        !loading &&
        pageToken
      ) {
        getdata(pageToken);
      }
    };
    const container = document.getElementById("comments-container");
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [pageToken, loading]);

  return (
    <div  id="comments-container"className=" w-[28rem]  md:w-[45rem]  lg:w-[50rem]   ">
      <p className="text-xl font-bold py-2">Comments:</p>
      {data.map((item) => {
        const { snippet, replies } = item;
        const { topLevelComment } = snippet;
        const {
          authorProfileImageUrl,
          authorDisplayName,
          textOriginal,
          likeCount,
        } = topLevelComment.snippet;

        return (
          <div key={item.id} className=" w-[28rem]  md:w-[45rem]  lg:w-[50rem]   ">
            <div className="flex items-start space-x-4">
              <img
                src={authorProfileImageUrl}
                className="w-10 h-10 rounded-full"
                alt="Author"
              />
              <div>
                <p className="font-semibold">{authorDisplayName}</p>
                <p>{textOriginal}</p>
                <div className="flex items-center  gap-5">
                 <div className="flex items-center gap-1">
                 <BiLike />
                  {likeCount > 0 && (
                    <p>
                      <span>{likeCount}</span>
                    </p>
                  )}
                 </div>
                  <p>
                    <BiDislike />
                  </p>
                  <p className="text-sm font-medium">Reply</p>
                </div>
                <button className="px-2 py-1 bg-gray-300 my-1 rounded-full">
                  Replies
                </button>
              </div>
              {/* {replies.map((rep) => {
                return;
              })} */}
            </div>
          </div>
        );
      })}
       {loading && <p>Loading more comments...</p>}
    </div>
  );
};

export default Comments;
