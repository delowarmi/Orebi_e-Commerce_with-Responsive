import React from "react";

const Order = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m0 0l-4 4m4-4l-4 4M9 12l2 2 4-4"
          />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <button
          onClick={() => window.location.href = "/"}
          className="px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Order;
