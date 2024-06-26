import React, { useState } from "react";

const Description = ({ description }) => {
  const [show, setShow] = useState(true);
  return (
    <>
    <div
      className={`py-2 px-2 rounded-md text-sm bg-gray-200 ${
        show ? "h-[50px] overflow-y-hidden" : "h-full"
      }`}
    >
      {description}
     
    </div>
     <div onClick={() => setShow(!show)} className="bg-gray-200 text-end">
     {show ? (
       <span className="font-bold px-3">...show more</span>
     ) : (
       <span className="font-bold px-3">...show less</span>
     )}
   </div>
   </>
  );
};

export default Description;
