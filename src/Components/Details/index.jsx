import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  setLocalStorage,
} from "../../Store/Slices/cart-Slice";

export default function Details() {
  const Cart = useSelector((state) => state.Cart);
  const { state } = useLocation();
  const { Item } = state;
  const [Image, setImage] = useState(Item.images[0]);
  const Dispatch = useDispatch();
  function handleAddToCart() {
    Dispatch(addToCart(Item));
    Dispatch(setLocalStorage(Item));
  }

  function handleRemoveFromCart() {
    Dispatch(removeFromCart(Item.id));
    Dispatch(setLocalStorage(Item));
  }
  function handlePrice() {
    return (Item.price * (1 + Item.discountPercentage / 100)).toFixed(2);
  }
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="flex items-center mb-4">
        <img className="ml-4 h-200 w-200 mb-2" src={Image} alt={Item.title} />
        <div className="flex flex-col flex-1 mb-4">
          {Item.images.map((image, index) => {
            return (
              <img
                key={index}
                className="ml-4 h-20 w-20 mb-2"
                src={image}
                alt={Item.title}
                onClick={() => setImage(image)}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Name: {Item.title}
        </h1>
        <div>
          <p className="font-bold text-gray-700 dark:text-gray-300">
            <span>Brand: </span>
            <span>{Item.brand}</span>
          </p>
          <p className="font-bold text-gray-700 dark:text-gray-300">
            <span>Category: </span>
            <span>{Item.category}</span>
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {Item.description}
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Price:{" "}
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              ${Item.price}
            </span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Availability:{" "}
            </span>
            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
          </div>
        </div>
        <p className="font-bold text-gray-700 dark:text-gray-300">
          Discount: {Item.discountPercentage}%
        </p>
        <p className="font-bold text-gray-700 dark:text-gray-300">
          Full Price: {handlePrice()}$
        </p>
        <p className="font-bold text-gray-700 dark:text-gray-300">
          rating: {Item.rating}
        </p>
        <div>
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Product Description:
          </span>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            ante justo. Integer euismod libero id mauris malesuada tincidunt.
            Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
            vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
            nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
            lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
            nisl suscipit, nec tincidunt mi consectetur.
          </p>
        </div>
        <div className="flex items-center justify-center w-full mt-2">
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
        </div>
      </div>
    </div>
  );
}
