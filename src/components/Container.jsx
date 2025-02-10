import React from "react";

const Container = ({ className, children }) => {
  return (
    <div
      className={` xl:w-[1320px] lg:w-[995px] md:w-[740px] sm:w-[640px]  mx-auto max-w${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
