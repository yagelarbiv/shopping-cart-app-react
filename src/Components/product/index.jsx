/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  setLocalStorage,
} from "../../Store/Slices/cart-Slice";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Product({ Item, state, Categories }) {
  const Dispatch = useDispatch();
  const Cart = useSelector((state) => state.Cart);
  const [images, setImages] = useState(Item?.images[0]);

  function handleAddToCart() {
    Dispatch(addToCart(Item));
    Dispatch(setLocalStorage(Item));
  }

  function handleRemoveFromCart() {
    Dispatch(removeFromCart(Item.id));
    Dispatch(setLocalStorage(Item));
  }

  return (
    <div className="flex flex-col items-center">
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={images}
            alt={Item?.title}
            className="object-cover h-full w-full"
          />
          <select
            className="w-auto mt-5 rounded-xl justify-self-start border-black border-2"
            onChange={(e) => setImages(e.target.value)}
          >
            {Item?.images.map((image, index) => {
              return (
                <option key={image} value={image}>
                  image {index}
                </option>
              );
            })}
          </select>
        </div>
        <div className="max-w-none w-40 mt-8 text-gray-700 font-bold text-lg">
          <h1>{Item?.title}</h1>
          <p>id:{Item?.id}</p>
          <p>Category: {Item?.category}</p>
          <p>price: {Item?.price}$</p>
        </div>
        <div className="flex flex-row items-center justify-center w-full mt-0.5">
          {
            state?.open ? (
              <button
                onClick={
                  Cart.some((Product) => Product.id === Item.id)
                    ? handleRemoveFromCart
                    : handleAddToCart
                }
                className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
              >
                {Cart.some((Product) => Product.id === Item.id)
                  ? "Remove from Cart"
                  : "Add to Cart"}
              </button>
            ) : null
          }
          <div className="flex flex-col">
            <Link to={"/details"} state={{ Item: Item }}>
              <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
                Details
              </button>
            </Link>
            {
              state?.open ? (
                <Link to={"/update"} state={{ Item: Item, Categories: Categories }}>
                  <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
                    update
                  </button>
                </Link>
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}


