import React from "react";
import Container from "../Container";
import Breadcrumb from "../Breadcrumb";
import Heading from "../Heading";
import Flex from "../Flex";
import Button from "../Button";
import { useSelector } from "react-redux";


const CheckOut = () => {
 //---------------calculation------------------------------ 
  let data = useSelector((state) => state.counter.cartItem);
  const { totalprice, totalquantity } = data.reduce(
    (acc, item) => {
      acc.totalprice += item.price * item.quantity;
      return acc;
    },
    { totalprice: 0, totalquantity: 0 }
  );
  //------------end-----------------------------------
  return (
    <div className="pb-10 lg:pb-[120px]">
      <Container>
        <div className=" pb-4 lg:pb-12">
          <h3 className="font-sans font-bold text-[64px] text-[#262626]">
            Checkout
          </h3>
          <Breadcrumb />
          <p className="py-3 lg:py-8 font-dm font-regular text[16px] text-navColor ">
            Have a coupon?{" "}
            <span className="font-dm font-regular text[16px] text-navHColor ">
              {" "}
              Click here to enter your code
            </span>
          </p>
        </div>
      </Container>
      <div className="py-4 lg:py-[120px]">
      <div className="max-w-checkOutCotainer mx-auto ">
          <Heading
            as={"h3"}
            text={"Billing Details"}
            className="p-3 font-dm font-bold text[39px] text-navHColor "
          />

          <Flex className={"gap-x-6 border-b pb-3 flex-col lg:flex-row"}>
            <div className="lg:pt-[50px]">
              <label for="uname">
                <b className="pl-3">First Name</b>
              </label>{" "}
              <br />
              <input
                type="text"
                className=" p-3 bg-white outline-none w-[300px]"
                placeholder="Enter First Name"
                name="uname"
                required
              ></input>
            </div>
            <div className="lg:pt-[50px]">
              <label for="uname">
                <b className="pl-3">Last Name</b>
              </label>{" "}
              <br />
              <input
                type="text"
                className="  p-3 bg-white outline-none w-[300px]"
                placeholder="Enter Last Name"
                name="uname"
                required
              ></input>
            </div>
          </Flex>
          <div className="pt-[10px] border-b">
            <label for="uname">
              <b className="pl-3">Companye Name (optional)</b>
            </label>{" "}
            <br />
            <input
              type="text"
              className="  p-3 bg-white outline-none w-[300px]"
              placeholder="Companye Name"
              name="uname"
              required
            ></input>
          </div>
          <div className="pt-[10px] border-b text-[16px] text-navHColor">
            <label for="uname">
              <b className="pb-2 pl-3">select-Country</b>
            </label>{" "}
            <br />
            <select className="bg-transparent w-full text-navColor pl-3 pb-2">
              <option value="country">Country Name</option>
            </select>
          </div>
          <div className="pt-[10px] border-b">
            <label for="uname">
              <b className="pl-3">Street Address *</b>
            </label>{" "}
            <br />
            <input
              type="text"
              className="  p-3 bg-white outline-none w-[300px]"
              placeholder="House number and street name"
              name="uname"
              required
            ></input>
          </div>
          <div className="pt-[10px] border-b">
            <label for="uname">
              <b className="pl-3">Town/City *</b>
            </label>{" "}
            <br />
            <input
              type="text"
              className="  p-3 bg-white outline-none w-[300px]"
              placeholder="Town/City "
              name="uname"
              required
            ></input>
          </div>
          <div className="pt-[10px] border-b">
            <label for="uname">
              <b className="pl-3">County (optional)</b>
            </label>{" "}
            <br />
            <input
              type="text"
              className="  p-3 bg-white outline-none w-[300px]"
              placeholder="County"
              name="uname"
              required
            ></input>
          </div>
          <div className="pt-[10px] border-b">
            <label for="uname">
              <b className="pl-3">Post Code *</b>
            </label>{" "}
            <br />
            <input
              type="text"
              className="  p-3 bg-white outline-none w-[300px]"
              placeholder="Post Code"
              name="uname"
              required
            ></input>
          </div>
          <div className="pt-[10px] border-b">
            <label for="uname">
              <b className="pl-3">Phone *</b>
            </label>{" "}
            <br />
            <input
              type="text"
              className="  p-3 bg-white outline-none w-[300px]"
              placeholder="Phone"
              name="uname"
              required
            ></input>
          </div>
          <div className="pt-[10px] border-b">
            <label for="uname">
              <b className="pl-3">Email Address *</b>
            </label>{" "}
            <br />
            <input
              type="text"
              className="  p-3 bg-white outline-none w-[300px]"
              placeholder="Email"
              name="uname"
              required
            ></input>
          </div>
          <div className="w-full h-[231px]">
            <Heading
              as={"h3"}
              text={"Billing Details"}
              className="font-dm font-bold text-[39px] text-navHColor pt-5 lg:pt-[100px]"
            />
            <Heading
              as={"p"}
              text={"Other Notes (optional)"}
              className="font-dm font-bold text-[16px] text-navHColor pt-[10px]"
            />
            <Heading
              as={"p"}
              text={"Notes about your order, e.g. special notes for delivery."}
              className="font-dm font-regular text-[14px] text-navColor pt-[10px] lg:pb-[120px]"
            />
          </div>
          <div className="w-full h-[231px]">
            <Heading
              as={"h3"}
              text={"Your Order"}
              className="font-dm font-bold text-[39px] text-navHColor pt-5 lg:pt-[100px]"
            />
            <div className="lg:w-[80%]">
              <Flex className={"   "}>
                <div className="py-[10px] w-[50%] border">
                  <label for="uname">
                    <b className="pl-3 font-dm font-bold text-[16px] text-navHColor ">
                      Product
                    </b>
                  </label>{" "}
                  <br />
                </div>
                <div className="py-[10px] w-[50%] border">
                  <label for="uname">
                    <b className="pl-3  font-dm font-bold text-[16px] text-navColor ">
                      Total
                    </b>
                  </label>{" "}
                  <br />
                </div>
              </Flex>
              <Flex className={"   "}>
                <div className="py-[10px] w-[50%] border">
                  <label for="uname">
                    <b className="pl-3 font-dm font-bold text-[16px] text-navHColor ">
                      Product Name x 1
                     
                    </b>
                  </label>{" "}
                  <br />
                </div>
                <div className="py-[10px] w-[50%] border">
                  <label for="uname">
                    <b className="pl-3  font-dm font-bold text-[16px] text-navColor ">
                    {totalprice}$
                    </b>
                  </label>{" "}
                  <br />
                </div>
              </Flex>
              <Flex className={"  "}>
                <div className="py-[10px] w-[50%] border">
                  <label for="uname">
                    <b className="pl-3 font-dm font-bold text-[16px] text-navHColor ">
                      Subtotal
                    </b>
                  </label>{" "}
                  <br />
                </div>
                <div className="py-[10px] w-[50%] border">
                  <label for="uname">
                    <b className="pl-3  font-dm font-bold text-[16px] text-navColor ">
                      {totalprice}$
                    </b>
                  </label>{" "}
                  <br />
                </div>
              </Flex>
              <Flex className={"  "}>
                <div className="py-[10px] w-[50%] border">
                  <label for="uname">
                    <b className="pl-3 font-dm font-bold text-[16px] text-navHColor ">
                      Total
                    </b>
                  </label>{" "}
                  <br />
                </div>
                <div className="py-[10px] w-[50%] border">
                  <label for="uname">
                    <b className="pl-3  font-dm font-bold text-[16px] text-navColor ">
                    {totalprice}$
                    </b>
                  </label>{" "}
                  <br />
                </div>
              </Flex>
            </div>
          </div>

          <div className="mt-40 flex-col border-l border-r border-t ">
            <input
              type="radio"
              name="logic"
              id="no"
              value="no"
              className="lg:ml-4 mt-5"
            ></input>
            <label
              for="no"
              className="lg:pl-4 font-dm font-bold text-[16px] text-navHColor "
            >
              Bank
            </label>
            <p className="ml-8 lg:ml-12 w-[85%] lg:w-[90%] px-3 bg-[#f5f5f5] py-5 font-dm font-regular text-[16px] text-navColor">
              Pay via Bank; you can pay with your credit card if you don’t have
              a Bank account.
            </p>
          </div>
          <div className="border-l border-r border-b  ">
            <input
              type="radio"
              name="logic"
              id="yes"
              value="yes"
              className="lg:ml-4"
            ></input>
            <label
              for="yes"
              className="lg:pl-4 font-dm font-bold text-[16px] text-navHColor"
            >
              Bank 2
            </label>
            <p className="ml-12  lg:w-[90%] px-3  py-5 font-dm font-regular text-[16px] text-navColor">
              {" "}
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </div>
          <Button btnText={"Proceed to Bank"} className={"mt-5"} />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
