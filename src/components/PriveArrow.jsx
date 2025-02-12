import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
const PriveArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={` inline-block p-4 text-[40px] text-neutral-950 absolute right-6 top-1/3 -translate-y-1/2 z-10 ${className}`}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <FaArrowAltCircleRight />
    </div>
  );
};

export default PriveArrow;
