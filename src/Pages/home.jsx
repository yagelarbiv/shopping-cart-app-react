import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import Product from "../Components/product";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FireBase.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [logedin, setlogedin] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
      });
  };

  async function fetchListOfProducts() {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      if (data) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setlogedin(true);
        console.log("uid", uid);
      } else {
        setlogedin(false);
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <div>
      {
        logedin?<nav>
        <p>Welcome Home</p>
        <div>
          <button
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
      :null
      }
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
