import React from "react";

const Button = ({ className, btnText, onClick }) => {
  return (
    <button onClick={onClick} className={`font-dm text-[16px] flex items-center gap-3 bg-navHColor border hover:border-orange-600 shadow-md px-10 py-2 rounded-lg text-white hover:text-gray-700 hover:bg-gray-100 transition-all duration-300 ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
