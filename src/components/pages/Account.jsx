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
    <div>
      <Container>
        <div className="py-[130px] overflow-hidden">
          <Heading
            as={"h3"}
            text={"My Account"}
            className="font-dm font-bold text-[40px] text-navHColor "
          />
          <Breadcrumb />
        </div>
      </Container>
      <Container>
        <Flex className={"justify-between gap-x-5"}>
          <div className="w-[200px] lg:w-[234px]">
            <ul>
              <li className="font-dm font-bold text-[16px] text-navHColor border-b py-5 border-b-gray-300">
                Dashboard
              </li>
              {account.map((items)=>(
                <>
              <div className="w-[300px]">
              {/* <li key={index}>{(item)}</li> */}
            <label htmlFor="" className="block pb-2 font-sans text-navHColor text-[16px] font-bold"><span>{items}</span></label> 
              </div>
                </>
              ))}

             
              
              
              <li className="font-dm font-regular text-[16px] text-navColor py-5 pb-[130px] ">
                Logout
              </li>
            </ul>
          </div>
          <div className="w-[600px] lg:w-[918px]">
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
              className="pr-[100px] lg:pr-0 font-dm font-regular text-[16px] text-navColor"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Account;
