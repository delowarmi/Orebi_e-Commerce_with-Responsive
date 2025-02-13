import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import Flex from "../components/Flex";
import Heading from "../components/Heading";

const User = () => {
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();

  // Handle Navigation & Hide Dropdown
  const handleNavigation = (path) => {
    setHidden(false); // Hide Dropdown
    navigate(path);
  };

  return (
    <div className="relative">
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
          {hidden && (
            <div className="bg-white lg:w-[200px] w-[130px] absolute lg:-left-[150px] -left-[100px] top-[45px] text-center z-50">
              <ul className="font-dm text-[24px] text-TextColor">
                <li className="flex flex-col">
                  <button onClick={() => handleNavigation("/my_account")}>
                    <Heading
                      as={"p"}
                      text={"My-Account"}
                      className="border border-BorderInfoColor font-dm font-regular text-navHColor text-[14px] py-2 lg:py-4 group hover:bg-navHColor hover:text-white hover:font-bold w-full"
                    />
                  </button>
                  <button onClick={() => handleNavigation("/login")}>
                    <Heading
                      as={"p"}
                      text={"Login"}
                      className="border border-BorderInfoColor font-dm font-regular text-navHColor text-[14px] py-2 lg:py-4 group hover:bg-navHColor hover:text-white hover:font-bold w-full"
                    />
                  </button>

                  <button onClick={() => handleNavigation("/signup")}>
                    <Heading
                      as={"p"}
                      text={"Sign Up"}
                      className="border border-BorderInfoColor font-dm font-regular text-navHColor text-[14px] py-2 lg:py-4 group hover:bg-navHColor hover:text-white hover:font-bold w-full"
                    />
                  </button>
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