
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import Flex from "./Flex";
import Heading from "./Heading";
import Image from "./Image";
import Paragraph from "./Paragraph";
import PriText from "./PriText";
import { useDispatch } from "react-redux"; // আপডেট করা Slice ইমপোর্ট করুন
import { useContext } from "react";
import { apiData } from "./ContextApi";
import { addToCart } from "./slice/AddtoCartSlice";


const Product = ({ badge, imgSrc, heart, Compare, Cart, title, prise, color, id }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    const product = {
      id: id, // 
      title: title, // 
      thumbnail:imgSrc, // 
      price: prise, // 
      color: color, // 
      quantity: 1, // 
    };
    console.log("Adding to Cart:", product);
    dispatch(addToCart(product));
  };


  return (
    <>
      <Flex>
        <div className="relative overflow-hidden w-[300px] h-[260px] group">
          <div>
            <Link to={`/products/${id}`}>
              <Image ImgSrc={imgSrc} className="w-full" />
            </Link>
            <Badge badgeName={badge} className="absolute top-4 left-5" />
          </div>
          <div className="bg-gray-300 p-5 absolute w-full bottom-0 translate-y-[100%] group-hover:translate-y-[0] transition-all duration-1000">
            <Flex className="justify-end gap-x-3 items-center pb-4">
              <Paragraph text={heart} />
              <FaHeart />
            </Flex>
            <Flex className="justify-end gap-x-3 items-center pb-2">
              <Paragraph text={Compare} />
              <FaCodeCompare />
            </Flex>
            <Flex className="justify-end gap-x-3 items-center">
              <div onClick={handleAddToCart} className="cursor-pointer font-bold">
                <Paragraph text={Cart} />
              </div>
              <FaShoppingCart />
            </Flex>
          </div>
        </div>
      </Flex>
      <div>
        <Flex className="justify-between mt-[30px]">
          <Link to='/products'><Heading as="h5" text={title} className="font-dm font-bold text-[16px] text-navHColor" /></Link>
          <PriText as="h6" text={prise} className="font-dm text-[16px] text-navColor" />
        </Flex>
        <Heading as="h6" text={color} className="font-dm text-[16px] text-navColor mt-[20px]" />
      </div>
    </>
  );
};

export default Product;
