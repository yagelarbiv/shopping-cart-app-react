import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/home";
import Cart from "../../Pages/cart";
import Login from '../../Pages/Login';
import SignUp from '../../Pages/Signup';
import Details from "../../Components/Details";
import Checkout from '../../Pages/Checkout';
import DeleteProduct from "../../Pages/DeleteProduct";
import UpdateProduct from "../../Pages/UpdateProduct";
import AddProduct from "../../Pages/AddProduct";
import Profile from "../../Pages/Profile";

export default function NavBar() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signUp" element={<SignUp />}/>
        <Route path="/details" element={<Details />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/delete" element={<DeleteProduct />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/Add" element={<AddProduct />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  )
}
