import React, { useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import Button from "./Button";
import Image from "./Image";
import PriText from "./PriText";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  let data = useSelector((state) => state.counter.cartItem);
  let [hidden, setHidden] = useState(false);
  let navigate = useNavigate();

  // Calculate Total Price & Quantity
  const { totalprice } = data.reduce(
    (acc, item) => {
      acc.totalprice += item.price * item.quantity;
      return acc;
    },
    { totalprice: 0 },
  );

  // View Cart Button Click
  const handleToViewcart = () => {
    // toast("Go to Cart Page...");
    setHidden(false);
    setTimeout(() => {
      navigate("/cart");
    }, 500);
  };

  // Checkout Button Click
  const handleToCheckout = () => {
    // toast("Redirecting to Checkout Page...");
    setHidden(false);
    setTimeout(() => {
      navigate("/checkout");
    }, 500);
  };

  return (
    <div className="relative">
      <OutsideClickHandler
        onOutsideClick={() => {
          setHidden(false);
        }}
      >
        <Flex className={"items-center"}>
          <div className="relative">
            <FaShoppingCart
              className="cursor-pointer"
              onClick={() => setHidden(!hidden)}
            />
            {data.length > 0 && (
              <div className="absolute -top-3 -right-5 bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full">
                {data.length}
              </div>
            )}
          </div>

          {hidden && (
            <div className="lg:w-[360px] w-[200px] absolute lg:-left-[340px] -left-[200px] lg:top-[50px] top-[38px] z-50 h-[370px] overflow-y-scroll bg-transparent">
              {/* Cart Items */}
              {data.map((item, index) => (
                <div key={index} className="w-full">
                  <div className="bg-headerbgColor py-5 px-5">
                    <Flex className={"items-center gap-x-5"}>
                      <div className="lg:w-20 lg:h-20 w-[60px] h-[60px] bg-slate-400">
                        <Image ImgSrc={item.thumbnail} />
                      </div>
                      <div>
                        <Heading
                          as={"h3"}
                          text={item.title}
                          className="font-dm font-bold lg:text-[14px] text-[8px] text-navHColor"
                        />
                        <PriText
                          as={"h3"}
                          text={`${item.price}`}
                          className="font-dm font-bold text-[14px] text-navHColor"
                        />
                      </div>
                    </Flex>
                  </div>
                  <div className="w-full px-2 py-5 bg-slate-300">
                    <h1 className="text-[16px] font-regular text-navHColor pl-4">
                      Subtotal:{" "}
                      <span className="font-dm font-bold text-[14px] text-navHColor">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </h1>
                  </div>
                </div>
              ))}

              {data.length > 0 && (
                <Flex className={"justify-between bg-slate-300 px-4 pb-4"}>
                  <Button btnText={"View Cart"} onClick={handleToViewcart} />
                  <Button btnText={"Checkout"} onClick={handleToCheckout} />
                </Flex>
              )}
            </div>
          )}
        </Flex>
      </OutsideClickHandler>
      <ToastContainer />
    </div>
  );
};

export default Cart;
