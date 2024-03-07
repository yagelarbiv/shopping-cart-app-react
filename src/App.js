import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Cart from "./Pages/cart";
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Header from "./Components/Header";

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
