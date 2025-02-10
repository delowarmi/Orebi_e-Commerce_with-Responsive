import React from "react";
import Flex from "../components/Flex";
import { HiMenuAlt2 } from "react-icons/hi";
import Heading from "../components/Heading";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Catagory = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className=" relative ">
      <OutsideClickHandler
        onOutsideClick={() => {
          setHidden(false);
        }}
      >
        <Flex className={"items-center"}>
          <HiMenuAlt2
            className="cursor-pointer"
            onClick={() => setHidden(!hidden)}
          />
          <div onClick={() => setHidden(!hidden)}>
            <Heading
              as={"h3"}
              text={"Shop by Category"}
              className="font-dm text-[10px] md:text-[12px] font-semibold text-navHColor lg:text-[14px] cursor-pointer relative"
            />
          </div>
          {hidden && (
            <div className="bg-navHColor p-4 w-[180px] lg:w-[230px] absolute left-[0px] top-[30px]">
              <ul className="font-dms text-[16px] text-TextColor">
                <li>
                  <Flex
                    className={
                      "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                    }
                  >
                    <Link>
                      <Heading
                        as={"p"}
                        text={"Accesories"}
                        className="hover:font-bold hover:px-5 duration-300 font-dm text-white text-[14px] font-regular"
                      />
                    </Link>
                    <IoIosArrowForward className="text-white" />
                  </Flex>
                  <Flex
                    className={
                      "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                    }
                  >
                    <Link>
                      <Heading
                        as={"p"}
                        text={"Furniture"}
                        className="hover:font-bold hover:px-5 duration-300 font-dm text-white text-[14px] font-regular"
                      />
                    </Link>
                    <IoIosArrowForward className="text-white" />
                  </Flex>
                  <Flex
                    className={
                      "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                    }
                  >
                    <Link>
                      <Heading
                        as={"p"}
                        text={"Electronics"}
                        className="hover:font-bold hover:px-5 duration-300 font-dm text-white text-[14px] font-regular"
                      />
                    </Link>
                    <IoIosArrowForward className="text-white" />
                  </Flex>
                  <Flex
                    className={
                      "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                    }
                  >
                    <Link>
                      <Heading
                        as={"p"}
                        text={"Clothes"}
                        className="hover:font-bold hover:px-5 duration-300 font-dm text-white text-[14px] font-regular"
                      />
                    </Link>
                    <IoIosArrowForward className="text-white" />
                  </Flex>
                  <Flex
                    className={
                      "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                    }
                  >
                    <Link>
                      <Heading
                        as={"p"}
                        text={"Bags"}
                        className="hover:font-bold hover:px-5 duration-300 font-dm text-white text-[14px] font-regular"
                      />
                    </Link>
                    <IoIosArrowForward className="text-white" />
                  </Flex>
                  <Flex className={"justify-between py-2 lg:py-4"}>
                    <Link>
                      <Heading
                        as={"p"}
                        text={"Home appliances"}
                        className="hover:font-bold hover:px-3 lg:hover:px-5 duration-300 font-dm text-white text-[12px] lg:text-[14px] font-regular"
                      />
                    </Link>
                    <IoIosArrowForward className="text-white" />
                  </Flex>
                </li>
              </ul>
            </div>
          )}
        </Flex>
      </OutsideClickHandler>
    </div>
  );
};
export default Catagory;
