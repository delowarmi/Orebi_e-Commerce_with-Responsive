import React from "react";
import Flex from "../components/Flex";
import { FaCaretDown } from "react-icons/fa";
import Heading from "../components/Heading";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
const User = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className=" relative ">
      <OutsideClickHandler
        onOutsideClick={() => {
          setHidden(false);
        }}
      >
        <Flex className={"items-center"}>
          <FaCaretDown
            className="cursor-pointer"
            onClick={() => setHidden(!hidden)}
          />
          <div onClick={() => setHidden(!hidden)}></div>
          {hidden && (
            <div className="bg-white lg:w-[200px] w-[130px] absolute lg:-left-[150px] -left-[100px] top-[45px] text-center z-50">
              <ul className="font-dm text-[24px] text-TextColor">
                <li>
                  <Link to="/my_account">
                    {" "}
                    <Heading
                      as={"p"}
                      text={"My-Account"}
                      className="border border-BorderInfoColor font-dm font-regular text-navHColor text-[14px] py-2 lg:py-4 group hover:bg-navHColor hover:text-white hover:font-bold"
                    />
                  </Link>
                  <Link to="/login">
                    {" "}
                    <Heading
                      as={"p"}
                      text={"Login"}
                      className="border border-BorderInfoColor font-dm font-regular text-navHColor text-[14px] py-2 lg:py-4 group hover:bg-navHColor hover:text-white hover:font-bold"
                    />
                  </Link>
                  <Link to="/signup">
                    {" "}
                    <Heading
                      as={"p"}
                      text={"Sign up"}
                      className="border border-BorderInfoColor font-dm font-regular text-navHColor text-[14px] py-2 lg:py-4 group hover:bg-navHColor hover:text-white hover:font-bold"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Flex>
      </OutsideClickHandler>
    </div>
  );
};

export default User;
