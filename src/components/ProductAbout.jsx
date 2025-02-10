import React from "react";
import Image from "./Image";
import AboutBadge from "./AboutBadge";


const ProductAbout = ({ imgSrc, badge }) => {
  return (
    <>
      <Image ImgSrc={imgSrc} className={"w-full"} />
      <AboutBadge
        badgeName={badge}
        className={
          "font-dm font-bold text-[12px] lg:text-[16px]  py-2 absolute lg:bottom-10 left-1/2 -translate-x-1/2 w-full lg:py-4 lg:w-[150px] bg-navHColor"
        }
      />
    </>
  );
};

export default ProductAbout;
