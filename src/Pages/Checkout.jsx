import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const [total, setTotal] = useState(0);
  const [Length, setLength] = useState(0);
  let Cart = useSelector((state) => state.Cart);
  
  function checkOut() {
    localStorage.clear();
    setLength(0);
    setTotal(0);
    alert("Thank you for shopping with us");
  }
  useEffect(() => {
    setTotal(Cart.reduce((acc, curr) => acc + curr.price, 0));
    setLength(Cart.length);
  }, [Cart]);

  return (
    <div>
      <div className="w-[300px]">
        <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
          <h1 className="font-bold text-lg text-red-800">Your Cart Summary</h1>
          <p>
            <span className="text-gray-800 font-bold">Total Item</span>
            <span>: {Length}</span>
          </p>
          <p>
            <span className="text-gray-800 font-bold">Total Amount</span>
            <span>: {total}$</span>
          </p>
          <button
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
            onClick={checkOut}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
