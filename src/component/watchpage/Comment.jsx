import React, { useEffect } from "react";
import { video_key } from "../../utils/Apidata";

const Comment = ({id}) => {
  const getdata = async () => {
    const resp = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=${video_key}&textFormat=plainText&part=snippet&videoId=${id}&maxResults=50`
    );
    const result = await resp.json();
    console.log(result);
  };

  useEffect(() => {
    getdata();
  }, []);
  return <div className="py-2 font-bold">Comment</div>;
};

export default Comment;
