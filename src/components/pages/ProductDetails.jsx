import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import Button from "../Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import PriText from "../PriText";
import { increment, quantityDecriment, quantityInrement } from "../slice/CounterSlice";
import { useDispatch } from "react-redux";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";

const ProductDetails = () => {
  let [singleData, setSingleData] = useState({});
  let [mainImage, setMainImage] = useState("");
  let [quantity, setQuantity] = useState(1);
  let productId = useParams();
  let dispath= useDispatch()
  let [activeColor, setActiveColor] = useState(null);

let [singledata,setSingledata] = useState([])
let [reviews, setReviews] = useState([]);

let handleAddToCart = () => {
  dispath(increment({ ...singleData, quantity }));
};
let handleIncrement = () => {
  setQuantity(prevQty => prevQty + 1);
};
 
  let handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQty => prevQty - 1);
    }
  };

  useEffect(() => {
    async function fetchData() {
      let data = await axios.get(`https://dummyjson.com/products/${productId.id}`);
      setSingleData(data.data);
      setMainImage(data.data?.images?.[0]); // 
    }
    fetchData();
  }, [productId]);


  useEffect(() => {
    async function fetchReviews() {
      try {
        let response = await axios.get(`https://dummyjson.com/products/${productId.id}/reviews`);
        setReviews(response.data.reviews); // 
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    fetchReviews();
  }, [productId]);


  let productrating=Array.from({length:5},(elm,index)=>{
    let rattingNumber=index+0.48;
    return singleData.rating >= index + 1 ? (
      <IoIosStar className="text-yellow-500" />
    ) : singleData.rating < rattingNumber ? (
      <FaRegStar className="text-yellow-500" />
    ) : (
      <IoIosStarHalf className="text-yellow-500" />
    );
   })  
   let clientrating =Array.from({ length:5 }, (elm, index)=> {
     let rattingNumbers = index+0.48;
     return singleData.reviews>= index + 1 ? (
     <IoIosStarHalf className="text-yellow-500" />
    ) : singleData.reviews< rattingNumbers ? (
    <FaRegStar className="text-yellow-500" />
   ) : (
   <IoIosStar className="text-yellow-500" />
     );
     
    }); 
    
    
   
    

  return (
    <div className="py-[100px]">
      <Container>
        <Breadcrumb />
        <Flex className={"justify-between pt-6 flex-col lg:flex-row"}>
          {/* ইমেজ গ্যালারি */}
          <div className="w-[49%] h-[850px]">
          <div className="lg:w-full h-full">
            {/* বড় ইমেজ */}
            <div className="lg:h-[600px] flex justify-center items-center border">
              <Image ImgSrc={mainImage} className="max-h-[500px] max-w-full object-contain" />
            </div>

            {/* ছোট থাম্বনেইল ইমেজ গুলো */}
            <div className="flex gap-2 mt-4">
              {singleData?.images?.map((item, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 border p-1 cursor-pointer ${
                    mainImage === item ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(item)}
                >
                  <img src={item} alt="thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          </div>
          {/* প্রোডাক্টের অন্যান্য তথ্য */}
          <div className="lg:w-[49%]">
          <div className="lg:w-full border-b pb-2">
            <Heading
              as={"h3"}
              text={singleData.title || "Product"}
              className="font-dm font-bold text-[39px] text-navHColor"
            />
            <Flex className={"gap-x-1"}>
              {productrating}
            <Heading as={"p"} text={"1 Review"} className="font-dm font-regular text-[14px] text-navColor pl-3"/>
            </Flex>
            <Flex className={'gap-x-8 '}>
             <PriText
              as={"p"}
              text={'88.88'}
              className="font-dm font-regular text-[18px] text-navColor relative after:absolute after:w-[60px] after:h-[2px] after:bg-neutral-300 after:top-[50%] translate-y-[-50%] after:right-[2%] mt-6 "
              />
            <Heading
              as={"p"}
              text={`Price: $${singleData.price}`}
              className="font-dm font-bold text-[20px] text-navHColor mt-3"
            />
            </Flex>
            <Heading
              as={"p"}
              text={`Description: ${singleData.description}`}
              className="font-dm  text-[16px] text-navHColor mt-3"
            />
          </div>
          <div className="border-b pb-3">
                        <div className="w-[251px] mt-4 ">
                          <Flex className={"justify-between "}>
                            <Heading
                              as={"p"}
                              text={"COLOR:"}
                              className="font-dm font-bold text-[20px] text-navHColor "
                            />
                            <Flex className={"gap-x-2 mt-1 h-8"}>
                            <div className=" flex gap-x-2 mt-1">{["#979797", "#FF8686", "#7ED321", "#FF0000", "#15CBA5"].map((color) => (<div key={color} className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-200 ${activeColor === color ? "w-7 h-7 border-2 border-black" : ""}`}style={{ backgroundColor: color }}onClick={() => setActiveColor(color)}></div>))}
                           </div>
                            </Flex>
                          </Flex>
                        </div>
                        <div className="w-[251px] mt-4">
                          <Flex className={"justify-between "}>
                            <Heading
                              as={"p"}
                              text={"SIZE:"}
                              className="font-dm font-bold text-[20px] text-navHColor "
                            />
                            <select
                              name=""
                              id=""
                              className="px-4 w-[139px] h-9 border border-slate-300 bg-transparent"
                            >
                              <option value="36">36</option>
                              <option value="36">38</option>
                              <option value="36">40</option>
                              <option value="36">42</option>
                            </select>
                          </Flex>
                        </div>
                        <div className="w-[251px] mt-4">
                          <Flex className={"justify-between "}>
                            <Heading
                              as={"p"}
                              text={"QUANTITY:"}
                              className="font-dm font-bold text-[20px] text-navHColor "
                            />
          
                            <div className="border border-slate-300 h-9 w-[139px] px-3 ">
                              <Flex className={"justify-between items-center"}>
                                <div
                                  className="w-10 h-10 flex items-center"
                                  onClick={handleDecrement}
                                >
                                  <FaMinus className="" />
                                </div>
                                <p className="">{quantity}</p>
                                <div
                                  className="w-10 h-10 flex items-center pl-6"
                                  onClick={handleIncrement}
                                >
                                  <FaPlus />
                                </div>
                              </Flex>
                            </div>
                          </Flex>
                        </div>
                      </div>
                      <div className="py-3 border-b pb-3">
                                          <div className=" h-9 w-[180px]  ">
                                            <Flex className={"justify-between "}>
                                              <Heading
                                                as={"p"}
                                                text={"STATUS:"}
                                                className="font-dm font-bold text-[20px] text-navHColor "
                                              />
                                              <Heading
                                                as={"p"}
                                                text={''}
                                                className="font-dm font-regular text-[20px] text-navColor "
                                              />
                                            </Flex>
                                          </div>
                                        </div>
              <div className="py-5 border-b pb-5 ">
              <Flex className={"gap-x-5"}>
                <Button btnText={"Add to Wish List"} />
                {/* to='/cart'onClick={(()=>handleAddToCart(singledata))} */}
                <Link to='/cart'onClick={handleAddToCart}>
                  <Button btnText={"Add to Cart"} />
                </Link>
              </Flex>
            </div>
            <div className="py-5 border-b pb-5">
                          <Flex className={" justify-between "}>
                            <Heading
                              as={"h3"}
                              text={"FEATURES & DETAILS"}
                              className="font-bold text-[16px] text-navHColor font-dm"
                            />
                            <FaPlus className="" />
                          </Flex>
            </div>
             <div className="py-5 border-b pb-5">
                          <Flex className={" justify-between "}>
                            <Heading
                              as={"h3"}
                              text={"SHIPPING & RETURNS"}
                              className="font-bold text-[16px] text-navHColor font-dm"
                            />
                            <FaPlus className="" />
                          </Flex>
                        </div>
                        <Heading as={"h3"} text={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} className="font-regular text-[16px] text-navColor font-dm pt-5"/>
          </div>
        </Flex>
      </Container>
      <div className="pb-5 ">
              <Container>
                <div className="border-b pb-5">
                  <div className="lg:w-[200px]">
                    <Flex className={"justify-between"}>
                      <Heading
                        as={"h3"}
                        text={"Description"}
                        className="font-bold text-[14px] text-navColor font-dm"
                      />
                      <Heading
                        as={"h3"}
                        text={"Reviews (1)"}
                        className="font-bold text-[14px] text-navHColor font-dm"
                      />
                    </Flex>
                    <Heading
                      as={"h3"}
                      text={"1 Reviews for Product"}
                      className="font-regular text-[14px] text-navColor font-dm pt-5"
                    />
                  </div>
                </div>
      
                <div className=" pb-5">
                  <Flex className={"justify-between"}>
                    <div className="lg:w-[277px] pt-5">
                      <Flex className={" gap-x-3 lg:gap-x-7"}>
                        <Heading
                          as={"h3"}
                          text={"John Doe"}
                          className="font-regular text-[16px] text-navHColor font-dm"
                        />
                        <Flex className={"lg:gap-x-2 pt-1"}>
                          
                          {clientrating}
                        </Flex>
                      </Flex>
                    </div>
                    <Heading
                      as={"h3"}
                      text={"6 months ago"}
                      className="font-regular text-[14px] text-navColor font-dm pt-5"
                    />
                  </Flex>
                  <div>
                    <Heading
                      as={"h3"}
                      text={
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                      }
                      className="font-regular text-[14px] text-navColor font-dm pt-5"
                    />
                  </div>
                </div>
                <div className="lg:w-[780px]">
                  <Heading
                    as={"h3"}
                    text={"Add a Review"}
                    className="font-bold text-[16px] text-navHColor font-dm pt-5"
                  />
                  <div className="pt-2 lg:pt-[20px]">
                    <label for="uname">
                      <b className="text-navHColor">Name </b>
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className=" outline-none  py-3 bg-white  w-[300px]"
                      placeholder="Your Name Here"
                      name="uname"
                      required
                    ></input>
                  </div>
                  <div className="pt-1 lg:pt-[10px]">
                    <label for="uname">
                      <b className="text-navHColor">Email</b>
                    </label>{" "}
                    <br />
                    <input
                      type="email"
                      className=" outline-none  py-3 bg-white  w-[300px]"
                      placeholder="Your Email Here"
                      name="uname"
                      required
                    ></input>
                  </div>
                  <div className="pt-1 lg:pt-[10px]">
                    <label for="uname">
                      <b className="text-navHColor">Review</b>
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className=" outline-none  py-3 bg-white  w-[300px]"
                      placeholder="Your Review Here"
                      name="uname"
                      required
                    ></input>
                  </div>
                  <Button btnText={"Post"} />
                </div>
              </Container>
            </div>
    </div>
  );
};

export default ProductDetails;
