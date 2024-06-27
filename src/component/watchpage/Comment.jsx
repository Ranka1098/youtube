import React, { useEffect, useState } from "react";
// import { video_key } from "../../utils/Apidata";

const Comment = ({ id }) => {
  const [data, setData] = useState([]);

  // const getdata = async () => {
  //   const resp = await fetch(
  //     `https://www.googleapis.com/youtube/v3/commentThreads?key=${video_key}&textFormat=plainText&part=snippet&videoId=${id}&maxResults=50`
  //   );
  //   const result = await resp.json();
  //   setData(result?.items);
  // };
 
  return (
    <div>
   <p  className="py-2 font-bold text-lg">comment :</p>
    
    
    </div>
  );
};

export default Comment;
