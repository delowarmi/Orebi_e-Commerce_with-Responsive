import React from "react";

const Image = ({ ImgSrc, ImgAlt, className }) => {
  return <img src={`${ImgSrc}`} alt={`${ImgAlt}`} className={className} />;
};

export default Image;
