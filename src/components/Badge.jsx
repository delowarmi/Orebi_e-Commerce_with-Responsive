import React from "react";

const Badge = ({ className, badgeName }) => {
  return (
    <div
      className={`font-dm font-bold text-sm py-3 px-7 bg-black w-[90px] text-white ${className}`}>
      {badgeName}
    %</div>
  );
};

export default Badge;
