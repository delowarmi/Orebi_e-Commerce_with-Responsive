import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, storage } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Container from "../Container";
import Breadcrumb from "../Breadcrumb";
import { clearCart } from "../slice/CounterSlice";

const CheckOut = () => {
  let [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(false);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser ? setUser(currentUser) : navigate("/login", { state: { from: location.pathname }, replace: true });
    });
    return () => unsubscribe();
  }, [navigate, location]);

  let handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  let cartItems = useSelector((state) => state.counter.cartItem);
  let totalProducts = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  let totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  let handleCOD = async () => {
    if (!user) return alert("You must be logged in to place an order!");
    try {
      let productTitles = cartItems.map(item => item.title);
      let productImag = cartItems.map(item => item.thumbnail);
      await addDoc(collection(storage, "orders"), {
        userId: user.uid,
        ...formData,
        productTitles,
        productImag,
        totalPrice,
        totalProducts,
        paymentMethod: "Cash on Delivery",
        status: "Pending",
        timestamp: new Date(),
      });
      alert("Order placed successfully!");
      dispatch(clearCart());
      localStorage.clear("cartItem");
      navigate("/ordersuccess");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }finally{
      setLoading(false);
    }
  };

  return (
    <Container>
      <h3 className="font-bold text-[64px] text-[#262626] mb-5">Checkout</h3>
      <Breadcrumb />
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {["name","email","phone","address"].map(field => (
          <input key={field} type={field === 'email' ? 'email' : 'text'} name={field} value={formData[field]} onChange={handleChange} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className="border p-3 w-full outline-none" required />
        ))}
      </form>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="p-4 border rounded-lg shadow-lg bg-gray-100 ">
          <div className="flex gap-x-8">
          <div className="">
          <h4 className="text-lg font-semibold">Product Image</h4>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
            // <p key={index} className="text-[12px] text-gray-900">{item.thumbnail}</p>
            <img src={item.thumbnail} alt="image not found"className="w-[40px] h-[40px]"/>
            ))
          ) : (
            <p className="text-[12px] text-gray-500">no product found</p>
          )}
          </div>
          <div>
          <h4 className="text-lg font-semibold">Product Titles</h4>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
            <p key={index} className="text-[12px] text-gray-900">{item.title}</p>
            ))
          ) : (
            <p className="text-[12px] text-gray-500">no product found</p>
          )}</div>
          </div>
        </div>
        <div>
          <div className="p-4 border rounded-lg shadow-lg bg-gray-100">
            <h4 className="text-lg font-semibold">Total Products</h4>
            <p className="text-2xl font-bold">{totalProducts}</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg bg-gray-100">
            <h4 className="text-lg font-semibold">Total Price</h4>
            <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <button 
        className="mb-20 w-full py-3 text-white font-bold rounded-lg transition "
        style={{ backgroundColor: loading ? '#ccc' : '#22c55e', cursor: loading ? 'opacity-50 cursor-not-allowed' : 'pointer' }}
        onClick={handleCOD} 
        disabled={loading || !user}
      >
        {loading ? "Processing..." : "Cash on Delivery"}
      </button>
    </Container>
  );
};
export default CheckOut;



