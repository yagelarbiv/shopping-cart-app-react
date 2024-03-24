import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../Components/Cart-Tile";
import { addDiscount } from "../utils/moneyUtils";

export default function Cart() {
  const [total, setTotal] = useState(0);
  let Cart = useSelector((state) => state.Cart);

  useEffect(() => {
    setTotal(addDiscount(Cart));
  }, [Cart]);
  return (
    <div className="flex justify-center">
      {Cart?.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {Cart.map((Item) => (
                <CartTile key={Item.id} cartItem={Item} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-red-800">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">Total Item</span>
                <span>: {Cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount</span>
                <span>: {total}$</span>
              </p>
              <Link to={"/Checkout"} state={{ cart: Cart }}>
                <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
                  CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to={"/"}>
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
