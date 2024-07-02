import { useRef, useState } from "react";
import { button } from "../../utils/data";
import "./category.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setCategory } from "../../store/categorySlice";
const Categorypills = () => {
  const dispatch = useDispatch();

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

  const videoTag = (btn) => {
    if (activebtn != btn) {
      setActiveBtn(btn);
      dispatch(setCategory(btn));
    }
  };

  return (
    <div className="flex items-center mt-1 ">
      <button
        onClick={handleleft}
        className="px-2 py-2 bg-gray-200 rounded-md -mt-5 "
      >
        <FaAngleLeft size={22} />
      </button>

      <div ref={scrollRef} className="flex overflow-x-scroll hide-scroll mx-2">
        {/* ---------------------------------------------------------------------------- */}
        {button.map((btn) => (
          <button
            onClick={() => videoTag(btn)}
            key={btn}
            className={`px-2 py-1 bg-gray-200 rounded-md mx-2 ${
              activebtn === btn ? "text-white bg-black/95 " : "  text-black"
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
