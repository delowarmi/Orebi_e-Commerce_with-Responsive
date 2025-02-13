import React from "react";
import Container from "../Container";
import Breadcrumb from "../Breadcrumb";
import Flex from "../Flex";
import { RxCross2 } from "react-icons/rx";
import Image from "../Image";
import cart from "/src/assets/bag.png";
import Heading from "../Heading";
import { FiMinus, FiPlus } from "react-icons/fi";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import PriText from "../PriText";
import { quantityDecriment, quantityInrement, removeProduct } from "../slice/CounterSlice";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  // data gate to redux ----------
  let data =useSelector((state)=>state.counter.cartItem)
  let dispach=useDispatch();
  let navigate=useNavigate() //--loading time set 
  //-------------------------------------
  //-----remove , incriment & decriment -------
  let handleRemove = (index) => {
    dispach(removeProduct(index));
  };
  let handleinrement=(index)=>{
    dispach(quantityInrement(index))
  }
  let handleDicrement=(index)=>{
    dispach(quantityDecriment(index))
  }
  //-----------end----------------------------
  //--------calculation ----------------------
  const {totalprice,totalquantity}=data.reduce((acc,item)=>{
    acc.totalprice+=item.price*item.quantity
    return acc
  },{totalprice:0,totalquantity:0})
 //---------------end----------------------------
 //-------- toastify --show ---------------
  let handlechackout=()=>{
    toast('Your order has been placed!')
    setTimeout(()=>{
      navigate('/checkout')
    },2000)
  }
  //----------end--------------------------------
  return (
    <div className="py-8 lg:py-24">
      <Container>
        <div className=" pb-12">
          <h3 className="font-sans font-bold text-[64px] text-[#262626]">
            Cart
          </h3>
          <Breadcrumb />
        </div>
      </Container>
      <Container>
        <div className="border">
          <Flex className=" items-center justify-between bg-[#F5F5F3]  h-[70px]">
            <div className="lg:w-[40%]">
              <h3 className="font-sans font-bold text-[16px] text-[#262626] lg:pl-[60px]">
                Product
              </h3>
            </div>
            <div className="w-[15%]">
              <h3 className="font-sans font-bold text-[16px] text-[#262626] text-center">
                Price
              </h3>
            </div>
            <div className="w-[30%]">
              <h3 className="font-sans font-bold text-[16px] text-[#262626] text-center">
                Quantity
              </h3>
            </div>
            <div className="w-[15%]">
              <h3 className="font-sans font-bold text-[16px] text-[#262626] text-center">
                Total
              </h3>
            </div>
          </Flex>
          </div>
          {data.map((item,index)=>(
             <Flex className={" justify-between items-center py-8 lg:pl-2 "}>
             <div className="w-[15%] lg:w-[32%]">
               <Flex className={"items-center"}>
                 <div onClick={() => handleRemove(index)} className=" w-[3%]">
                   <RxCross2 className=" " />
                 </div>
                 <div className=" lg:w-[100px]">
                   <Image ImgSrc={item.thumbnail} className="pl-3" />
                 </div>
                 <div className="w-[5%] lg:w-[40%]">
                   <Heading
                     as={"p"}
                     text={item.title}
                     className="font-sans font-bold text-[8px] pl-0 lg:text-[16px] text-[#262626] lg:pl-[10px]"
                   />
                 </div>
               </Flex>
             </div>
             <div className="lg:w-[8%]">
               <PriText
                 as={"p"}
                 text={item.price}
                 className="font-sans font-bold lg:text-[16px] text-[#262626]  lg:pl-[10px]"
               />
             </div>
             <div className="lg:w-[12%]">
               <div className="w-[80px] lg:w-[139px] h-[36px] border border-navHColor px-2">
                 <Flex className={"justify-between top-[50%] translate-y-[50%]"}>
                   <FiMinus  onClick={()=>handleDicrement(index)}/>
                   <p className=" translate-y-[-25%]">{item.quantity}</p>
                   <FiPlus onClick={()=>handleinrement(index)}/>
                 </Flex>
               </div>
             </div>
             <div className="lg:w-[10%]">
               <PriText
                 as={"p"}
                 text={(item.price * item.quantity).toFixed(2)}
                 className="font-sans font-bold text-[16px] text-[#262626] pl-[10px]"
               />
             </div>
           </Flex>
           ))} 
        <div className=" border pl-3 py-5">
          <Flex className={"justify-between"}>
            <Flex className={" items-center "}>
              <select className="w-[160px] lg:w-[250px] h-[50px] bg-transparent border px-4 ">
                <option value="Size">Size</option>
              </select>
              <Heading
                as={"p"}
                text={"Apply coupon"}
                className="font-sans text-[9px] font-bold lg:text-[16px] text-[#262626] pl-[10px]"
              />
            </Flex>
            <Heading
              as={"p"}
              text={"Update cart"}
              className="font-sans font-bold text-[9px] lg:text-[16px] text-[#262626] pl-[10px] pr-4 top-[50%] translate-y-[35%]"
            />
          </Flex>
        </div>
        <Heading
          as={"p"}
          text={"Update cart"}
          className="font-sans font-bold text-[16px] text-[#262626] pl-[10px] pr-4 text-end pt-12 pb-7"
        /> 
        <Flex className={"justify-end pb-28"}>
          <div className="w-[646px] h-[157px]">
            <Flex className={" items-center lg:flex-row flex-col"}>
              <div className="w-[322px] h-16 border ">
                <Heading
                  as={"p"}
                  text={" Subtotal"}
                  className="font-sans font-bold text-[16px] text-[#262626] pl-4 top-[50%] translate-y-[50%]"
                />
              </div>
              <div className="w-[322px] h-16 border">
                <PriText
                  as={"p"}
                  text={(totalprice).toFixed(2)}
                  className="font-sans font-bold text-[16px] text-[#262626] pl-4 top-[50%] translate-y-[50%]"
                />
              </div>
            </Flex>
            <Flex className={" items-center lg:flex-row flex-col"}>
              <div className="w-[322px] h-16 border ">
                <Heading
                  as={"p"}
                  text={" Total"}
                  className="font-sans font-bold text-[16px] text-[#262626] pl-4 top-[50%] translate-y-[50%]"
                />
              </div>
              <div className="w-[322px] h-16 border">
                <PriText
                  as={"p"}
                  text={(totalprice).toFixed(2)}
                  className="font-sans font-bold text-[16px] text-[#262626] pl-4 top-[50%] translate-y-[50%]"
                />
              </div>
            </Flex>
            <div className="">
              <Button onClick={handlechackout}
                btnText={"Proceed to Checkout"}
                className={
                  "lg:ml-0 ml-4 lg:left-[100%] lg:translate-x-[184%] mt-3"
                }
              />
            </div>
          </div>
        </Flex>
        <ToastContainer/>
      </Container>
    </div>
  );
};
export default CartPage;
