// import React, { useEffect, useState } from "react";
// import Container from "../Container";
// import Heading from "../Heading";
// import Breadcrumb from "../Breadcrumb";
// import Flex from "../Flex";
// import { getDatabase, ref, onValue } from "firebase/database";
// import {auth,db} from '../../firebaseConfig'//addme
// import { Link } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// const Account = () => {
//   let [account, setAccount] = useState([]);
//   let db = getDatabase();
//   // let user = auth.currentUser;

//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   // const auth = getAuth();
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe(); // Cleanup listener
//   }, [auth]);

//   if (loading) {
//     return <p className="text-center text-lg">Loading...</p>;
//   }

//   // read data to firebase
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

//   async function handlelogout () {
//     try{
//       await auth.signOut();
//       window.location.href='/'
//       console.log('logout sucessfully ')

//     }catch(error){
//       console.error( 'error loggout:', error.massage);
      
//     }
    
//   }

//   return (
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
             
//       <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg">
     
//         <img
//           src={user.photoURL}
//           alt="User Profile"
//           className="w-24 h-24 rounded-full border-2 border-yellow-500 shadow-md"
//         />
//       </div>
//               <li className="font-dm font-bold text-[24px] text-navHColor border-b py-5 border-b-gray-300">
//                 Dashboard
//               </li>
//               {account.length > 0 && (
//                 <div className="h-[280px]">
//                   <Flex>
//                     <p className="border-b w-full py-3 font-dm font-regular text-[16px] text-navColor">
//                       <strong className="pr-[40px] font-bold text-navHColor text-[20px]">Name:</strong> {account[0]?.firstName} {account[0]?.lastName}
//                     </p>
//                   </Flex>
//                   <p className="border-b py-3 font-dm font-regular text-[16px] text-navColor">
//                     <strong className="pr-[39px] font-bold text-navHColor text-[20px]">Email:</strong> {account[0]?.email}
//                   </p>
//                   <p className="border-b py-3 font-dm font-regular text-[16px] text-navColor">
//                     <strong className="pr-[10px] font-bold text-navHColor text-[20px]">Address:</strong>{account[0]?.address?.line1}, {account[0]?.address?.city},{account[0]?.address?.country}
//                   </p>
//                   <p className="border-b py-3 font-dm font-regular text-[16px] text-navColor">
//                     <strong className="pr-[30px] font-bold text-navHColor text-[20px]">Phone:</strong> {account[0]?.phone}
//                   </p>
//                   <p className="border-b py-3 font-dm font-regular text-[16px] text-navColor">
//                     <strong className="pr-[3px] font-bold text-navHColor text-[20px]">Create Date:</strong> {account[0]?.createdAt}
//                   </p>
//                 </div>
//               )}
//               <div className="pt-6 pb-20 w-[100%] group">
//               <Link><li onClick={handlelogout} className="font-dm font-regular text-navHColor text-[20px] py-2 bg-orange-600 hover:bg-slate-600 text-center rounded-lg hover:text-white">
//                 Logout
//               </li></Link>
//               </div>
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
//               text={"From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."}
//               className="pb-5 lg:pr-0 font-dm font-regular text-[16px] text-navColor"
//             />
//           </div>
//         </Flex>
//       </Container>
//     </div>
//   );
// };

// export default Account;
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Breadcrumb from "../Breadcrumb";
import Flex from "../Flex";
import { ref, onValue } from "firebase/database";
import { auth, db } from "../../firebaseConfig"; // এখানে আপনার config ফাইল থেকে import করুন
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const Account = () => {
  let [account, setAccount] = useState([]);
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    let usersRef = ref(db, "users/");
    onValue(usersRef, (snapshot) => {
      let newArray = [];
      snapshot.forEach((item) => {
        newArray.push(item.val());
      });
      setAccount(newArray);
    });
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("Logout successfully");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <div>
      <Container>
        <div className="lg:pt-[100px] lg:pb-[20px] overflow-hidden">
          <Heading
            as="h3"
            text="My Account"
            className="font-dm font-bold text-[40px] text-navHColor"
          />
          <Breadcrumb />
        </div>
      </Container>
      <Container>
        <Flex className="justify-between gap-x-5 flex-col lg:flex-row pl-2">
          <div className="w-full lg:w-[400px]">
            <ul className="w-full">
              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-24 h-24 rounded-full border-2 border-yellow-500 shadow-md"
                  />
                ) : (
                  <div className="w-24 h-24 flex items-center justify-center bg-gray-300 rounded-full">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>
              <li className="font-dm font-bold text-[24px] text-navHColor border-b py-5 border-b-gray-300">
                Dashboard
              </li>
              {account.length > 0 && (
                <div className="h-[280px]">
                  <Flex>
                    <p className="border-b w-full py-3 font-dm text-[16px] text-navColor">
                      <strong className="pr-[40px] font-bold text-navHColor text-[20px]">
                        Name:
                      </strong>{" "}
                      {account[0]?.firstName} {account[0]?.lastName}
                    </p>
                  </Flex>
                  <p className="border-b py-3 font-dm text-[16px] text-navColor">
                    <strong className="pr-[39px] font-bold text-navHColor text-[20px]">
                      Email:
                    </strong>{" "}
                    {account[0]?.email}
                  </p>
                  <p className="border-b py-3 font-dm text-[16px] text-navColor">
                    <strong className="pr-[10px] font-bold text-navHColor text-[20px]">
                      Address:
                    </strong>
                    {account[0]?.address?.line1}, {account[0]?.address?.city},{" "}
                    {account[0]?.address?.country}
                  </p>
                  <p className="border-b py-3 font-dm text-[16px] text-navColor">
                    <strong className="pr-[30px] font-bold text-navHColor text-[20px]">
                      Phone:
                    </strong>{" "}
                    {account[0]?.phone}
                  </p>
                  <p className="border-b py-3 font-dm text-[16px] text-navColor">
                    <strong className="pr-[3px] font-bold text-navHColor text-[20px]">
                      Create Date:
                    </strong>{" "}
                    {account[0]?.createdAt}
                  </p>
                </div>
              )}
              <div className="pt-6 pb-20 w-full group">
                <Link>
                  <li
                    onClick={handleLogout}
                    className="font-dm text-[20px] py-2 border bg-orange-600 hover:bg-gray-100 text-center rounded-lg hover:text-orange-700 shadow-md hover:border-orange-600 text-navHColor transition-all duration-300 "
                  >
                    Logout
                  </li>
                </Link>
              </div>
            </ul>
          </div>
          <div className="w-full lg:w-[918px] lg:mt-8">
            <Heading
              as="p"
              text="Hello admin (not admin? Log out)"
              className="font-dm text-[16px] text-navColor pb-10"
            />
            <Heading
              as="p"
              text="From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."
              className="pb-5 lg:pr-0 font-dm text-[16px] text-navColor"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Account;

