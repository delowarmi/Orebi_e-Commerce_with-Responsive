import React from "react";

const Button = ({ className, btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group text-[11px] py-1 px-3 lg:text-[14px] text-white border border-navHColor font-dm font-bold lg:py-[8px] lg:px-[40px] bg-navHColor hover:bg-transparent hover:text-navHColor ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
