import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import Button from "./Button";
import Image from "./Image";
import PriText from "./PriText";

const Cart = () => {
  let data = useSelector((state) => state.counter.cartItem);
  
  const [hidden, setHidden] = useState(false);

  // let [seeshort, setSeeshort]=useState([])
  //         useEffect(()=>{
  //            let filterslice=counter.slice(0,1)
  //            setSeeshort(filterslice)
  //         },[counter])

  const { totalprice, totalquantity } = data.reduce(
    (acc, item) => {
      acc.totalprice += item.price * item.quantity;
      return acc;
    },
    { totalprice: 0, totalquantity: 0 }
  );
  return (
    <div className=" relative ">
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

            {data.length > 0 ? (
              <div className="absolute -top-3 -right-5 bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full">
                {data.length}
              </div>
            ) : (
              ""
            )}
          </div>
          <div onClick={() => setHidden(!hidden)}></div>
          {hidden && (
            <div className="bg-white  lg:w-[360px] w-[200px] absolute lg:-left-[340px] -left-[200px] lg:top-[50px] top-[38px] z-50">
              {data.map((item, index) => (
                <div className="w-full ">
                  <div className="bg-headerbgColor py-5 px-5">
                    <Flex className={" items-center gap-x-5"}>
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
                          text={item.price}
                          className="font-dm font-bold text-[14px] text-navHColor"
                        />
                      </div>
                    </Flex>
                  </div>
                  <div className="w-full px-2  py-5">
                    <h1 className="text-[16px] font-regular text-navColor">
                      Subtotal:{" "}
                      <span className="font-dm font-bold text-[14px] text-navHColor">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </h1>
                  </div>
                </div>
              ))}

              {data.length > 0 && (
                <Flex className={"justify-between  "}>
                  <Link to="/cart">
                    <Button btnText={"View Cart"} />
                  </Link>
                  <Link to='/checkout'><Button btnText={" Checkout"} /></Link>
                </Flex>
              )}
            </div>
          )}
        </Flex>
      </OutsideClickHandler>
    </div>
  );
};

export default Cart;
