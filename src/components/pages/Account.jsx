import React, { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Breadcrumb from "../Breadcrumb";
import Flex from "../Flex";
import { getDatabase, ref, onValue } from "firebase/database";


const Account = () => {
  let [account, setAccount] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const starCountRef = ref(db, "user/");
    
    onValue(starCountRef, (snapshot) => {
      let newArray = []; 
      snapshot.forEach((item) => {
        newArray.push(item.val());
      });
      setAccount(newArray);
    });

  }, []); 

 
  console.log(account);
  
  return (

    <>
    <div>
      <Container>
        <div className="lg:pt-[100px] lg:pb-[20px] overflow-hidden">
          <Heading
            as={"h3"}
            text={"My Account"}
            className="font-dm font-bold text-[40px] text-navHColor "
          />
          <Breadcrumb />
        </div>
      </Container>
      <Container>
        <Flex className={"justify-between gap-x-5 flex-col lg:flex-row pl-2"}>
          <div className="w-full lg:w-[400px]">
            <ul className="w-full">
              <li className="font-dm font-bold text-[24px] text-navHColor border-b py-5 border-b-gray-300">
                Dashboard
              </li>
              {/* {account.map((item)=>(
               <p className=" border-b-2  py-3 font-dm font-regular text-[16px] text-navColor"><strong className=" pr-[40px] font-bold text-navHColor text-[20px]">Name:</strong> {item.email}</p>
                
              ))} */}
                <div >
                  <Flex>
                  <p className=" border-b-2  py-3 font-dm font-regular text-[16px] text-navColor"><strong className=" pr-[40px] font-bold text-navHColor text-[20px]">Name:</strong> {account[3]}</p>
                  <p className=" border-b-2  py-3 font-dm font-regular text-[16px] text-navColor"><strong className=" pr-2 font-bold text-navHColor text-[20px]"></strong> {account[1]}</p>
                  </Flex>
                  <p className=" border-b py-3 font-dm font-regular text-[16px] text-navColor"><strong className=" pr-[39px] font-bold text-navHColor text-[20px]">Email:</strong> {account[0]}</p>
                  <p className=" border-b py-3 font-dm font-regular text-[16px] text-navColor"><strong className=" pr-[10px] font-bold text-navHColor text-[20px]">Address:</strong> {account[2]}</p>
                  <p className=" border-b py-3 font-dm font-regular text-[16px] text-navColor"><strong className=" pr-[30px] font-bold text-navHColor text-[20px]">Phone:</strong> {account[4]}</p>
                </div>
              <li className="font-dm font-regular text-[16px] text-navColor py-5 lg:pb-[130px] ">
                Logout
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[918px] lg:mt-8">
            <Heading
              as={"p"}
              text={"Hello admin (not admin? Log out)"}
              className="font-dm font-regular text-[16px] text-navColor pb-10"
            />
            <Heading
              as={"p"}
              text={
                "From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details. "
              }
              className="pb-5 lg:pr-0 font-dm font-regular text-[16px] text-navColor"
            />
          </div>
        </Flex>
      </Container>
    </div>
    </>
  );
};

export default Account;
