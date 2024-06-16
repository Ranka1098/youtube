import { useState } from "react";
import { button } from "../../utils/data";
import "./category.css";
import { CgArrowLeft } from "react-icons/cg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const Categorypills = () => {
  const [activebtn, setActiveBtn] = useState();
  return (
    <div className="flex items-center">
      <button className="px-2 py-2 bg-gray-200 rounded-md -mt-5 ">
        <FaAngleLeft size={22} />
      </button>
      <div className="flex overflow-x-scroll hide-scroll mx-2">
        {button.map((btn) => (
          <button
            onClick={() => setActiveBtn(btn)}
            key={btn}
            className={`px-2 py-1 bg-gray-200 rounded-md mx-2 ${
              activebtn === btn
                ? "bg-black/100 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
      <button className="px-2 py-1 bg-gray-200 rounded-md -mt-5">
        <FaAngleRight size={22} />
      </button>
    </div>
  );
};

export default Categorypills;
