import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Store/Slices/cart-Slice";
import { useState } from "react";

export default function CartTile({ cartItem }) {
  const [images, setImages] = useState(cartItem?.images[0]);
  const Dispatch = useDispatch();

  function handleRemoveFromCart() {
    Dispatch(removeFromCart(cartItem.id));
  }

  return (
    <>
      <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <div>
            <img
              src={images}
              className="h-28 rounded-lg"
              alt={cartItem?.title}
            />
            {
              <select
                className="w-auto mt-5 rounded-xl border-black border-2"
                onChange={(e) => setImages(e.target.value)}
              >
                {cartItem?.images.map((image, index) => {
                  return (
                    <option key={image} value={image}>
                      image {index}
                    </option>
                  );
                })}
              </select>
            }
          </div>
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem?.tile}</h1>
            <p className="text-white font-extrabold">{cartItem?.price}$</p>
            <p className="text-white font-extrabold">
              {cartItem?.discountPercentage}%
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            "Remove from Cart"
          </button>
        </div>
      </div>
    </>
  );
}
