import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Logo from "/src/assets/Logo.png";
import Image from "../Image";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  let [show, setShow] = useState(false);

  useEffect(() => {
    function size() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    size();
    window.addEventListener("resize", size);
    return () => window.removeEventListener("resize", size);
  }, []);

  let toggleMenu = () => {
    setShow(!show);
  };

  return (
    <div className="w-full py-3 bg-slate-200 top-0 sticky z-50">
      <Container>
        <Flex className={"justify-between"}>
          {/* Logo */}
          <div className="w-[40%] translate-y-1/3">
            <Link to="/">
              <Image ImgSrc={Logo} className={"pl-2"} />
            </Link>
          </div>

          {/* Navbar Menu */}
          <div
            className={`transition-all duration-500 z-50 py-2 lg:w-[60%] w-full left-0 lg:flex absolute top-[50px] bg-red-300 lg:bg-transparent lg:static ${
              show ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ul>
              <Flex className={"gap-x-10 gap-y-2 justify-center flex-col text-center lg:flex-row"}>
                <Link to="/" onClick={() => setShow(false)}>
                  <li className="font-dm text-navColor hover:text-navHColor hover:font-bold">
                    Home
                  </li>
                </Link>
                <Link to="/products" onClick={() => setShow(false)}>
                  <li className="font-dm text-navColor hover:text-navHColor hover:font-bold">
                    Shop
                  </li>
                </Link>
                <Link to="/about" onClick={() => setShow(false)}>
                  <li className="font-dm text-navColor hover:text-navHColor hover:font-bold">
                    About
                  </li>
                </Link>
                <Link to="/contact" onClick={() => setShow(false)}>
                  <li className="font-dm text-navColor hover:text-navHColor hover:font-bold">
                    Contact
                  </li>
                </Link>
              </Flex>
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <FaBars className="cursor-pointer lg:hidden pr-3 text-[28px]" onClick={toggleMenu} />
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
