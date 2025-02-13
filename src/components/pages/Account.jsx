// import React, { useEffect, useState } from "react";
// import Container from "../Container";
// import Heading from "../Heading";
// import Breadcrumb from "../Breadcrumb";
// import Flex from "../Flex";
// import { getDatabase, ref, onValue } from "firebase/database";
// const Account = () => {
//   // firebase data read function ------------
//   let [account, setAccount] = useState([]);
//   const db = getDatabase();
//   useEffect(() => {
//     const starCountRef = ref(db, "users/");
//     onValue(starCountRef, (snapshot) => {
//       let newArray = []; 
//       snapshot.forEach((item) => {
//         newArray.push(item.val());
//       });
//       setAccount(newArray);
//     });
//   }, []); 
//   console.log(account);
//   //---------------end-------------------
//   return (
//     <>
//     <div>
//       <Container>
//         <div className="lg:pt-[100px] lg:pb-[20px] overflow-hidden">
//           <Heading
//             as={"h3"}
//             text={"My Account"}
//             className="font-dm font-bold text-[40px] text-navHColor "
//           />
//           <Breadcrumb />
//         </div>
//       </Container>
//       <Container>
//         <Flex className={"justify-between gap-x-5 flex-col lg:flex-row pl-2"}>
//           <div className="w-full lg:w-[400px]">
//             <ul className="w-full">
//               <li className="font-dm font-bold text-[24px] text-navHColor border-b py-5 border-b-gray-300">
//                 Dashboard
//               </li>
//                 <div >
//                   <Flex>
//                   <p className=" border-b-2  py-3 font-dm font-regular text-[16px] text-navColor"><strong className=" pr-[40px] font-bold text-navHColor text-[20px]">Name:</strong> {account.firstName}</p>
//                   <p className=" border-b-2  py-3 font-dm font-regular text-[16px] text-navColor"><strong className=" pr-2 font-bold text-navHColor text-[20px]"></strong></p>
//                   </Flex>
//                   <p className=" border-b py-3 font-dm font-regular text-[16px] text-navColor"><strong className=" pr-[39px] font-bold text-navHColor text-[20px]">Email:</strong> {account.email}</p>
//                   <p className=" border-b py-3 font-dm font-regular text-[16px] text-navColor"><strong className=" pr-[10px] font-bold text-navHColor text-[20px]">Address:</strong> </p>
//                   <p className=" border-b py-3 font-dm font-regular text-[16px] text-navColor"><strong className=" pr-[30px] font-bold text-navHColor text-[20px]">Phone:</strong> </p>
//                 </div>
//               <li className="font-dm font-regular text-[16px] text-navColor py-5 lg:pb-[130px] ">
//                 Logout
//               </li>
//             </ul>
//           </div>
//           <div className="w-full lg:w-[918px] lg:mt-8">
//             <Heading
//               as={"p"}
//               text={"Hello admin (not admin? Log out)"}
//               className="font-dm font-regular text-[16px] text-navColor pb-10"
//             />
//             <Heading
//               as={"p"}
//               text={
//                 "From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details. "
//               }
//               className="pb-5 lg:pr-0 font-dm font-regular text-[16px] text-navColor"
//             />
//           </div>
//         </Flex>
//       </Container>
//     </div>
//     </>
//   );
// };

// export default Account;
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
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      let newArray = [];
      snapshot.forEach((item) => {
        newArray.push(item.val());
      });
      setAccount(newArray);
    });
  }, []);

  console.log(account);


// const handleLogout = () => {
//   signOut(auth)
//     .then(() => {
//       console.log("User signed out successfully");
//     })
//     .catch((error) => {
//       console.error("Logout error:", error);
//     });
// };
// console.log(handleLogout);

  return (
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
              {account.length > 0 && (
                <div>
                  <Flex>
                    <p className="border-b w-full py-3 font-dm font-regular text-[16px] text-navColor">
                      <strong className="pr-[40px] font-bold text-navHColor text-[20px]">Name:</strong> {account[0]?.firstName} {account[0]?.lastName}
                    </p>
                  </Flex>
                  <p className="border-b py-3 font-dm font-regular text-[16px] text-navColor">
                    <strong className="pr-[39px] font-bold text-navHColor text-[20px]">Email:</strong> {account[0]?.email}
                  </p>
                  <p className="border-b py-3 font-dm font-regular text-[16px] text-navColor">
                    <strong className="pr-[10px] font-bold text-navHColor text-[20px]">Address:</strong>{account[0]?.address?.country}, {account[0]?.address?.line1}, {account[0]?.address?.city}
                  </p>
                  <p className="border-b py-3 font-dm font-regular text-[16px] text-navColor">
                    <strong className="pr-[30px] font-bold text-navHColor text-[20px]">Phone:</strong> {account[0]?.phone}
                  </p>
                </div>
              )}
              <li  className="font-dm font-regular text-[16px] text-navColor py-5 lg:pb-[130px] ">
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
              text={"From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."}
              className="pb-5 lg:pr-0 font-dm font-regular text-[16px] text-navColor"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Account;
