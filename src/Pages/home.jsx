import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import Product from "../Components/product";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  

  async function fetchlistofproducts() {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      if (data ) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchlistofproducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127, 29, 29)"
            visability={true}
          />
        </div>
      ) : (
          <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
            {products?.length
              ? products.map((productItem) => (
                  <Product key={productItem.id} Item={productItem} />
                ))
              : null}
          </div>
      )}
    </div>
  );
}
