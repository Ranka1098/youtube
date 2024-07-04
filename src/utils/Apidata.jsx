export const Video_Api_Key = "AIzaSyDJ2mV2jKmk14ic-IoV2hIjR8FRVJT0Dp0";
export const YTB_Video_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${Video_Api_Key}`;
export const Goggle_Search_Api =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const Video_Comment_Api = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=${Video_Api_Key}`;

const Youtube_Search_Api =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=YOURAPIKEY";
