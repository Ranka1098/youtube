import { useState } from "react";
import { button } from "../../utils/data";
const Categorypills = () => {
  const [activebtn, setActiveBtn] = useState();
  return (
    <div >
      <div className="flex overflow-x-scroll">
        {button.map((btn) => (
          <button
            onClick={() => setActiveBtn(btn)}
            key={btn}
            className={`px-2 py-1 bg-gray-200 rounded-md mx-1 mb-2 ${
              activebtn === btn
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categorypills;
