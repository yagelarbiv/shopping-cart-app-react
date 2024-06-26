import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import Product from "../Components/product";
import ProductsService from "../Service/Products-Service";
import { useLocation } from "react-router-dom";
import Pagination from "../Components/Pagination";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [TotalLength, setTotalLength] = useState(0);
  const [Categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const { state } = useLocation();

  async function fetchListOfProducts() {
    let Service = new ProductsService();
    setLoading(true);
    try {
      setProductsPerPage(5);
      const length = await Service.getProducts();
      const lengthData = await length.data.length;
      setTotalLength(lengthData);
      const response = await Service.getProductsByPagination(currentPage, productsPerPage);
      const data = await response.data;
      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  async function fetchListOfCategories() {
    let Service = new ProductsService();
    const response = await Service.getCategories();
    const data = await response.data;
    if (data) {
      setCategories(data);
    }
  }
  async function getProductsByCategories(category) {
    if (category === "All") {
      fetchListOfProducts();
      return;
    }
    let Service = new ProductsService();
    const response = await Service.getProductsByCategory(category);
    const data = await response.data;
    if (data) {
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
    fetchListOfCategories();
  }, [state, currentPage]);
  
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127, 29, 29)"
            visibility={true}
          />
        </div>
      ) : (
        <div>
          <div>
            <select onChange={(e) => getProductsByCategories(e.target.value)} className="w-auto mt-5 rounded-xl border-black border-2">
              <option value={"All"}>Filter by Category</option>
              {Categories?.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="h-10 flex col justify-center">
              <Pagination totalAmount={TotalLength} currentPage={currentPage} setCurrentPage={setCurrentPage} AmountPerPage={productsPerPage} />
            </div>
          <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
            {products?.length
              ? products.map((productItem) => (
                  <Product key={productItem.id} Item={productItem} state={state} Categories={Categories} />
                ))
              : null}
          </div>
        </div>
      )}
    </div>
  );
}
