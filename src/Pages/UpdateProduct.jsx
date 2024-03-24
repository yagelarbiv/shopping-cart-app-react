import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductsService from "../Service/Products-Service";

export default function UpdateProduct() {
  let service = new ProductsService();
  const { state } = useLocation();
  const { Item, Categories } = state;
  const [item, setItem] = useState(Item);
  const [Show, setShow] = useState(false);
  const [Image, setImage] = useState("");
  function AddImage(image) {
    setItem({ ...item, images: [...item.images, image] });
    console.log(item.images);
  }
  return (
    <div>
      <h1>UpdateProduct</h1>
      <p>{item.id}</p>
      <div>
        <label htmlFor="title">item title: </label>
        <input
          type="text"
          name="title"
          value={item.title}
          className="border-2"
          onChange={(e) => setItem({ ...item, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="brand">item brand: </label>
        <input
          type="text"
          name="brand"
          value={item.brand}
          className="border-2"
          onChange={(e) => setItem({ ...item, brand: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="category">item category: </label>
        <select name="category" onChange={(e) => setImage(e.target.value)}>
          <option>pick an Category</option>
          {
            Categories.map((category, index) => {
              return <option key={index} value={category.name}>{category.name}</option>;
            })
          }
        </select>
      </div>
      <div>
        <label htmlFor="description">item description: </label>
        <textarea
          name="description"
          cols="30"
          rows="5"
          type="text"
          value={item.description}
          className="border-2"
          onChange={(e) => setItem({ ...item, description: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="price">item price: </label>
        <input
          type="number"
          name="price"
          value={item.price}
          className="border-2"
          onChange={(e) => setItem({ ...item, price: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="stock">item stock: </label>
        <input
          type="number"
          name="stock"
          value={item.stock}
          className="border-2"
          onChange={(e) => setItem({ ...item, stock: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="brand">item rating: </label>
        <input
          type="number"
          name="brand"
          value={item.rating}
          className="border-2"
          onChange={(e) => setItem({ ...item, rating: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="brand">item image: </label>
        {item.images.map((image, index) => {
          return (
            <input
              key={index}
              type="text"
              name="brand"
              value={image}
              className="border-2 block w-1/2"
              onChange={(e) => setImage(e.target.value)}
            />
          );
        })}
        <button
          className="bg-red-950 text-white border-2 rounded-lg p-1"
          onClick={() => setShow((prev) => !prev)}
        >
          Add Image
        </button>
        {Show ? (
          <>
            <input
              type="text"
              className="border-2 block w-1/2"
              onChange={(e) => setImage(e.target.value)}
            />
            <button
              className="bg-red-950 text-white border-2 rounded-lg p-1"
              onClick={() => AddImage(Image)}
            >
              Add
            </button>
          </>
        ) : null}
      </div>
      <div>
        <label htmlFor="brand">item discount Percentage: </label>
        <input
          type="number"
          name="brand"
          value={item.discountPercentage}
          className="border-2"
          onChange={(e) => setItem({ ...item, discountPercentage: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="brand">item thumbnail: </label>
        <input
          type="text"
          name="brand"
          value={item.thumbnail}
          className="border-2"
          onChange={(e) => setItem({ ...item, thumbnail: e.target.value })}
        />
      </div>
      <div>
        <button
          className="bg-red-950 text-white border-2 rounded-lg p-1"
          onClick={() => service.updateProduct(item)}
        >
          Update
        </button>
      </div>
    </div>
  );
}
