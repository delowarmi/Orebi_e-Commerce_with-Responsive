import React from "react";
import pro1 from "/src/assets/pro1.jpg";
import pro2 from "/src/assets/pro2.png";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Breadcrumb from "../Breadcrumb";
import ProductAbout from "../ProductAbout";

const About = () => {
  return (
    <div className="lg:py-[150px] py-12 overflow-hidden">
      <Container>
        <Heading
          as={"h3"}
          text={"About"}
          className="font-dm font-bold text-[40px] text-navHColor"
        />
        <Breadcrumb />

        <Flex className={"justify-between lg:pt-[70px] pt-5"}>
          <div className="w-[49%] relative">
            <ProductAbout imgSrc={pro1} badge={"Our Brands"} />
          </div>
          <div className="w-[49%] relative">
            <ProductAbout imgSrc={pro2} badge={"Our Stores"} />
          </div>
        </Flex>
        <Heading
          as={"p"}
          text={
            "Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
          }
          className="font-dm font-regular text-[20px] lg:text-[30px] text-navHColor pt-[70px]"
        />
        <Flex className={"justify-between pt-[50px]"}>
          <div className="w-[32%]">
            <Heading
              as={"h4"}
              text={"Our Vision"}
              className="font-dm font-bold text-[20px] lg:text-[25px] text-navHColor"
            />
            <Heading
              as={"p"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."
              }
              className="font-dm font-regular text-[13px] text-navColor"
            />
          </div>
          <div className="w-[32%]">
            <Heading
              as={"h4"}
              text={"Our Story"}
              className="text-navHColor font-dm font-bold text-[20px] lg:text-[25px]"
            />
            <Heading
              as={"p"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
              }
              className="font-dm font-regular text-[13px] text-navColor"
            />
          </div>
          <div className="w-[32%]">
            <Heading
              as={"h4"}
              text={"Our Brands"}
              className=" text-navHColor font-dm font-bold text-[20px] lg:text-[25px]"
            />
            <Heading
              as={"p"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley."
              }
              className="font-dm font-regular text-[13px] text-navColor"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default About;
