import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Store/Slices/cart-Slice";
import { useState } from "react";

export default function Product({ Item }) {
  const Dispatch = useDispatch();
  const Cart = useSelector((state) => state.Cart);
  const [images, setImages] = useState(Item?.images[0]);
  const array = [1, 2, , 3, 4, 5, 6, 78, 9];

  function handleAddToCart() {
    Dispatch(addToCart(Item));
  }

  function handleRemoveFromCart() {
    Dispatch(removeFromCart(Item.id));
  }
  console.log(Item);
  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[390px] mt-10 ml-5 rounded-xl">
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
        <div  className="max-w-none w-40 truncate mt-8 text-gray-700 font-bold text-lg">
          <h1>
            {Item?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
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
