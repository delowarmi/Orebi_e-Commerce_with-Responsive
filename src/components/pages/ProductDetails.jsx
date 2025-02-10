import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
// import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";
import PriText from "../PriText";
import { increment } from "../slice/CounterSlice";




const ProductDetails = () => {
let [singledata,setSingledata] = useState([])
let productId=useParams()


let dispath= useDispatch()
let handleAddToCart = (item) => {
dispath(increment({...item,quantity:1}));

  //  console.log("add to cart", item);
 };
        useEffect(()=>{
          async function all(){
            let data = await axios.get( `https://dummyjson.com/products/${productId.id}`)
              
            setSingledata(data.data);
           
          }
            all()  
        },[])
       
        
 let productrating=Array.from({length:5},(elm,index)=>{
  let rattingNumber=index+0.5;
  return singledata.rating >= index + 1 ? (
    <IoIosStar className="text-yellow-500" />
  ) : singledata.rating < rattingNumber ? (
    <FaRegStar className="text-yellow-500" />
  ) : (
    <IoIosStarHalf className="text-yellow-500" />
  );
 })  
 let clientrating = Array.from({ length: 5 }, (elm, index) => {
   let rattingNumber = index + 1;
   return singledata.reviews >= index + 1 ? (<IoIosStar className="text-yellow-500" />) : rattingNumber> singledata.reviews ? (<FaRegStar className="text-yellow-500" />) : (<IoIosStarHalf className="text-yellow-500" />
   );
 }); 
  let [quantity, setQuantity] = useState(1);

  
 
  return (
    <div>
      <Container>
        <Breadcrumb />
        <Flex className={"justify-between pt-24 flex-col lg:flex-row"}>
          <div className=" lg:w-[49%] lg:h-[780px] flex lg:flex-row flex-col flex-wrap ">
            {singledata?.images?.map((item) => (
              <div className=" lg:w-[50%]">
                <Image ImgSrc={item} />
              </div>
            ))}
          </div>
          <div className="lg:w-[49%]">
            <Heading
              as={"h3"}
              text={"Product"}
              className="font-dm font-bold text-[39px] text-navHColor"
            />
            <Flex className={"gap-x-1"}>
              {productrating}
              <Heading
                as={"p"}
                text={"1 Review"}
                className="font-dm font-regular text-[14px] text-navColor pl-3"
              />
            </Flex>
            <Flex className={"mt-1 gap-x-7 border-b pb-3"}>
              <PriText
                as={"p"}
                text={'88.88'}
                className="font-dm font-regular text-[18px] text-navColor relative after:absolute after:w-[60px] after:h-[2px] after:bg-neutral-300 after:top-[50%] translate-y-[-50%] after:right-[2%] mt-4 "
              />

              <PriText
                as={"p"}
                text={singledata.price}
                className="font-dm font-bold text-[20px] text-navHColor "
              />
            </Flex>
            <div className="border-b pb-5">
              <div className="w-[251px] mt-4">
                <Flex className={"justify-between "}>
                  <Heading
                    as={"p"}
                    text={"COLOR:"}
                    className="font-dm font-bold text-[20px] text-navHColor "
                  />
                  <Flex className={"gap-x-2 mt-1"}>
                    <div className="bg-[#979797] w-5 h-5 rounded-full"></div>
                    <div className="bg-[#FF8686] w-5 h-5 rounded-full"></div>
                    <div className="bg-[#7ED321] w-5 h-5 rounded-full"></div>
                    <div className="bg-[#B6B6B6] w-5 h-5 rounded-full"></div>
                    <div className="bg-[#15CBA5] w-5 h-5 rounded-full"></div>
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
                    className="w-[139px] h-9 border border-slate-300 bg-transparent"
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
                        onClick={() =>
                          quantity ? setQuantity(1) : setQuantity(--quantity)
                        }
                      >
                        <FaMinus className="" />
                      </div>
                      <p className="">{quantity}</p>
                      <div
                        className="w-10 h-10 flex items-center pl-6"
                        onClick={() => setQuantity(++quantity)}
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
                    text={singledata.stock}
                    className="font-dm font-regular text-[20px] text-navColor "
                  />
                </Flex>
              </div>
            </div>
            <div className="py-5 border-b pb-5 ">
              <Flex className={"gap-x-5"}>
                <Button btnText={"Add to Wish List"} />
                <Link to='/cart'onClick={(()=>handleAddToCart(singledata))}>
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
            <Heading
              as={"h3"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
              className="font-regular text-[16px] text-navColor font-dm pt-5"
            />
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
                    {/* <FaRegStar className="text-yellow-600" />
                    <FaRegStar className="text-yellow-600" />
                    <FaRegStar className="text-yellow-600" />
                    <FaRegStar className="text-yellow-600" />
                    <FaRegStar className="text-yellow-600" /> */}
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
