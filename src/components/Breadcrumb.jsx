import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Breadcrumb = ({ breadcrumbText }) => {
  return (
    <>
      <div className="font-bold font-dm text-[20px] text-navHColor">{breadcrumbText}</div>
      <div className="flex items-center mb-5 capitalize font-bold font-dm text-[16px] text-navColor">
        <span>Home</span>
        <FaAngleRight />
        <span>{window.location.pathname.split("/")[1]}</span>
      </div>
    </>
  );
};

export default Breadcrumb;
