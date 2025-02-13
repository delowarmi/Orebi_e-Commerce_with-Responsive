import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Product from "../Product";
import cap from "/src/assets/cap.png";
import sunn from "/src/assets/sunglass.png";

const Special = () => {
  return (
    <div className="py-[60px] overflow-hidden">
      <Container>
        <Heading
          as={"h3"}
          text={"Special Offers"}
          className="font-dm text-[39px] font-bold pb-[20px] text-navHColor"
        />
        <Flex
          className={
            "justify-between md:flex-wrap md:flex-row flex-col lg:flex-row"
          }
        >
          <div className=" md:w-[49%] lg:w-[24%] relative group">
            <Product
              imgSrc={cap}
              badge={"New"}
              heart={"Add to Wish List"}
              Compare={"Compare"}
              Cart={"Add to Cart"}
              title={"Basic Crew Neck Tee"}
              prise={"44.00"}
              color={"Black"}
            />
          </div>
          <div className=" md:w-[49%] lg:w-[24%] relative group">
            <Product
              imgSrc={sunn}
              badge={"New"}
              heart={"Add to Wish List"}
              Compare={"Compare"}
              Cart={"Add to Cart"}
              title={"Basic Crew Neck Tee"}
              prise={"44.00"}
              color={"Black"}
            />
          </div>
          <div className="md:w-[49%] lg:w-[24%] relative group">
            <Product
              imgSrc={cap}
              badge={"New"}
              heart={"Add to Wish List"}
              Compare={"Compare"}
              Cart={"Add to Cart"}
              title={"Basic Crew Neck Tee"}
              prise={"44.00"}
              color={"Black"}
            />
          </div>
          <div className="md:w-[49%]  lg:w-[24%] relative group">
            <Product
              imgSrc={sunn}
              badge={"New"}
              heart={"Add to Wish List"}
              Compare={"Compare"}
              Cart={"Add to Cart"}
              title={"Basic Crew Neck Tee"}
              prise={"44.00"}
              color={"Black"}
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Special;