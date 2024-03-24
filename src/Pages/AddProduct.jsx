import React, { useEffect, useState } from 'react'
import ProductsService from '../Service/Products-Service';

function AddProduct() {
  let Service = new ProductsService();
  const [Categories, setCategories] = useState([]);
  const [Item, setItem] = useState({
    id: 0,
    title: "",
    description: "",
    price: 0,
    category: "",
    images: [],
    rating: 0,
    stock: 0,
    brand: "",
    discountPercentage: 0,
  })
  const [Show, setShow] = useState(false);
  const [Image, setImage] = useState("");
  function AddImage(image) {
    setItem({ ...Item, images: [...Item.images, image] });
    console.log(Item.images);
  }
  async function fetchListOfCategories() {
    const response = await Service.getCategories();
    const data = await response.data;
    if (data) {
      setCategories(data);
    }
  }
  useEffect(() => {
    fetchListOfCategories()
  })

  return (
    <div>
      <h1>Add Product</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setItem({ ...Item, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={(e) => setItem({ ...Item, description: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={(e) => setItem({ ...Item, price: e.target.value })}
        />
      </div>
      <div>
      <label htmlFor="category">item category: </label>
        <select name="category" onChange={(e) => setItem({ ...Item, category: e.target.value })}>
          <option>pick an Category</option>
          {
            Categories.map((category, index) => {
              return <option key={index} value={category.name}>{category.name}</option>;
            })
          }
        </select>
      </div>
      <div>
        <label htmlFor="brand">item image: </label>
        {Item.images.map((image, index) => {
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
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          id="rating"
          onChange={(e) => setItem({ ...Item, rating: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          name="stock"
          id="stock"
          onChange={(e) => setItem({ ...Item, stock: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          name="brand"
          id="brand"
          onChange={(e) => setItem({ ...Item, brand: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="discountPercentage">DiscountPercentage</label>
        <input
          type="number"
          name="discountPercentage"
          id="discountPercentage"
          onChange={(e) => setItem({ ...Item, discountPercentage: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="id">id</label>
        <input
          type="number"
          name="id"
          id="id"
          onChange={(e) => setItem({ ...Item, id: e.target.value })}
        />
      </div>
      <button className="bg-red-950 text-white border-2 rounded-lg p-1" onClick={() => Service.createProduct(Item)}>Add</button>
    </div>
  )
}

export default AddProduct