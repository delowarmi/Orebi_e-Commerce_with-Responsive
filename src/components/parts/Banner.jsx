import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "../Image";
import banner from "/src/assets/Intro.png";

const Banner = () => {
  let [active, setActive] = useState(0);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "7%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i == active
            ? {
                fontWeight: "semibold",
                fontSize: "20px",
                color: "#262626",
                borderRight: "4px #262626 solid",
                padding: "9px 10px 9px 0",
              }
            : {
                color: "transparent",
                borderRight: "4px white solid",
                padding: "9px 10px 9px 0",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1320,
        settings: {},
      },
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 768,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "10px",
                transform: "translateX(-50%)",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  display: "flex",
                }}
              >
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={`text-xs ${
                i == active
                  ? "text-[#262626] border-b-2 border-[#262626] px-1.5 pb-1 "
                  : "text-transparent border-b-2 border-[#fff] px-1.5 pb-1 "
              }`}
            >
              0{i + 1}
            </div>
          ),
        },
      },
      {
        breakpoint: 660,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "10px",
                transform: "translateX(-50%)",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  display: "flex",
                }}
              >
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={`text-xs ${
                i == active
                  ? "text-[#262626] border-b-2 border-[#262626] px-1.5 pb-1 "
                  : "text-transparent border-b-2 border-[#fff] px-1.5 pb-1 "
              }`}
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="mx-auto">
        <Image ImgSrc={banner} className={"w-full h-auto object-cover"} />
      </div>
      <div className="mx-auto">
        <Image ImgSrc={banner} className={"w-full h-auto object-cover "} />
      </div>
      <div className="mx-auto">
        <Image ImgSrc={banner} className={"w-full h-auto object-cover"} />
      </div>
      <div className="mx-auto">
        <Image ImgSrc={banner} className={"w-full h-auto object-cover"} />
      </div>
      <div className="mx-auto">
        <Image ImgSrc={banner} className={" w-full h-auto object-cover "} />
      </div>
    </Slider>
  );
};

export default Banner;
