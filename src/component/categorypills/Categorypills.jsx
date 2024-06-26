import { useEffect, useRef, useState } from "react";
import { button } from "../../utils/data";
import { video_key} from "../../utils/Apidata"
import "./category.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { SiJasmine } from "react-icons/si";
const Categorypills = () => {
  const [activebtn, setActiveBtn] = useState("");
  const scrollRef = useRef(null);
  const handleleft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };
  const handleRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const searchData = async (btn) => {
      try {
        const resp = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${btn}&type=video&key=${video_key}`
        );
        const result = await resp.json();
      } catch (error) {
        console.log(err);
      }
    };
    searchData();
  }, []);
  const videoTag = (btn) => {
    if (activebtn != btn) {
      setActiveBtn(btn);
    }
  };
  console.log(activebtn);
  return (
    <div className="flex items-center mt-1 ">
      <button
        onClick={handleleft}
        className="px-2 py-2 bg-gray-200 rounded-md -mt-5 "
      >
        <FaAngleLeft size={22} />
      </button>

      <div ref={scrollRef} className="flex overflow-x-scroll hide-scroll mx-2">
        {button.map((btn) => (
          <button
            onClick={() => videoTag(btn)}
            key={btn}
            className={`px-2 py-1 bg-gray-200 rounded-md mx-2 ${
              activebtn === btn
                ? "bg-black/90 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
      <button
        onClick={handleRight}
        className="px-2 py-2 bg-gray-200 rounded-md -mt-5"
      >
        <FaAngleRight size={22} />
      </button>
    </div>
  );
};

export default Categorypills;
