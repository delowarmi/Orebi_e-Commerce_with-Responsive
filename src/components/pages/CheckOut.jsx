// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom"; // useLocation for redirect after login
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../firebaseConfig"; // Import Firebase Auth
// import Container from "../Container";
// import Breadcrumb from "../Breadcrumb";
// import Heading from "../Heading";
// import Flex from "../Flex";

// const CheckOut = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const [user, setUser] = useState(null); // Store logged-in user
//   const navigate = useNavigate();
//   const location = useLocation(); // Get current location

//   useEffect(() => {
//     // Check if user is logged in
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         setUser(null);
//         // Redirect to login & store the intended page
//         navigate("/login",{ state: { from: location.pathname }, replace: true });
//       }
//     });

//     return () => unsubscribe(); // Cleanup on unmount
//   }, [navigate, location]);

//   let data = useSelector((state) => state.counter.cartItem);
//   const { totalprice } = data.reduce(
//     (acc, item) => {
//       acc.totalprice += item.price * item.quantity;
//       return acc;
//     },
//     { totalprice: 0 }
//   );

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePayment = (method) => {
//     if (!user) {
//       alert("You must be logged in to proceed with payment!");
//       navigate("/login", { state: { from: location.pathname } }); // Redirect to login & store checkout page
//       return;
//     }

//     let paymentURL = "";
//     if (method === "bkash") {
//       paymentURL = `https://your-backend.com/api/bkash-payment?amount=${totalprice}`;
//     } else if (method === "nagad") {
//       paymentURL = `https://your-backend.com/api/nagad-payment?amount=${totalprice}`;
//     }
//     window.location.href = paymentURL;
//   };

//   return (
//     <div className="pb-10 lg:pb-[120px]">
//       <Container>
//         <h3 className="font-sans font-bold text-[64px] text-[#262626]">Checkout</h3>
//         <Breadcrumb />

//         <form>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Full Name"
//               className="border p-3 w-full outline-none"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="border p-3 w-full outline-none"
//               required
//             />
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               className="border p-3 w-full outline-none"
//               required
//             />
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               placeholder="Address"
//               className="border p-3 w-full outline-none"
//               required
//             />
//           </div>
//         </form>

//         <div className="py-4 lg:py-[120px]">
//           <Heading
//             as="h3"
//             text="Your Order"
//             className="font-dm font-bold text-[39px] text-navHColor"
//           />
//           <div className="w-full border p-5 mt-5">
//             <Flex>
//               <div className="w-1/2 font-bold">Total</div>
//               <div className="w-1/2 text-right font-bold">
//                 {totalprice.toFixed(2)} USD
//               </div>
//             </Flex>
//           </div>
//           <div className="mt-10 border p-5">
//             <h3 className="text-[20px] font-bold mb-4">Select Payment Method:</h3>
//             <button
//               className="w-full py-3 mb-3 bg-pink-500 text-white font-bold rounded disabled:bg-gray-400"
//               onClick={() => handlePayment("bkash")}
//               disabled={!user} // Disable if not logged in
//             >
//               Pay with bKash
//             </button>
//             <button
//               className="w-full py-3 bg-red-500 text-white font-bold rounded disabled:bg-gray-400"
//               onClick={() => handlePayment("nagad")}
//               disabled={!user} // Disable if not logged in
//             >
//               Pay with Nagad
//             </button>
//             {!user && (
//               <p className="text-red-500 text-center mt-2">
//                 * You must be logged in to proceed with payment.
//               </p>
//             )}
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default CheckOut;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Container from "../Container";
import Breadcrumb from "../Breadcrumb";
import Heading from "../Heading";
import Flex from "../Flex";
import axios from "axios"; // Backend API Call করার জন্য

const CheckOut = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false); // Email Verification Status
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsVerified(currentUser.emailVerified);
      } else {
        setUser(null);
        navigate("/login", { state: { from: location.pathname }, replace: true });
      }
    });

    return () => unsubscribe();
  }, [navigate, location]);

  let data = useSelector((state) => state.counter.cartItem);
  const { totalprice } = data.reduce(
    (acc, item) => {
      acc.totalprice += item.price * item.quantity;
      return acc;
    },
    { totalprice: 0 }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (method) => {
    if (!user) {
      alert("You must be logged in to proceed with payment!");
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    if (!isVerified) {
      alert("Please verify your email before proceeding with payment.");
      return;
    }

    try {
      const response = await axios.post(`https://your-backend.com/api/${method}-payment`, {
        amount: totalprice,
        userEmail: user.email,
      });
      console.log("Payment Response:", response.data);
      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. Please check the console for details.");
    }
  };

  return (
    <div className="pb-10 lg:pb-[120px]">
      <Container>
        <h3 className="font-sans font-bold text-[64px] text-[#262626]">Checkout</h3>
        <Breadcrumb />

        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border p-3 w-full outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-3 w-full outline-none"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border p-3 w-full outline-none"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="border p-3 w-full outline-none"
              required
            />
          </div>
        </form>

        <div className="py-4 lg:py-[120px]">
          <Heading as="h3" text="Your Order" className="font-dm font-bold text-[39px] text-navHColor" />
          <div className="w-full border p-5 mt-5">
            <Flex>
              <div className="w-1/2 font-bold">Total</div>
              <div className="w-1/2 text-right font-bold">{totalprice.toFixed(2)} USD</div>
            </Flex>
          </div>
          <div className="mt-10 border p-5">
            <h3 className="text-[20px] font-bold mb-4">Select Payment Method:</h3>
            <button
              className="w-full py-3 mb-3 bg-pink-500 text-white font-bold rounded disabled:bg-gray-400"
              onClick={() => handlePayment("bkash")}
              disabled={!user || !isVerified}
            >
              Pay with bKash
            </button>
            <button
              className="w-full py-3 bg-red-500 text-white font-bold rounded disabled:bg-gray-400"
              onClick={() => handlePayment("nagad")}
              disabled={!user || !isVerified}
            >
              Pay with Nagad
            </button>
            {!user && <p className="text-red-500 text-center mt-2">* You must be logged in to proceed with payment.</p>}
            {!isVerified && <p className="text-red-500 text-center mt-2">* Please verify your email first.</p>}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckOut;
