import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../FireBase.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [logedin, setlogedin] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setlogedin(true);
      setOpen(uid === "OZ0hciFMZ2QroxRB986f5uc0Lf92");
    } else {
      setlogedin(false);
      console.log("user is logged out");
    }
  });
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer list-none">Home</li>
          </Link>
          {logedin ? (
            <>
              { !open ?
                <>
                {/* TODO: Add other links for axios (Update, Delete, Add) */}
                  <Link to={"/cart"}>
                    <li className="cursor-pointer">Cart</li>
                  </Link>
                  <Link to={"/delete"}>
                    <li className="cursor-pointer">DeleteProduct</li>
                  </Link>
                  <span onClick={handleLogout}>Log Out</span>
                </> : 
                <>
                  <span onClick={handleLogout}>Log Out</span>
                  <Link to={"/cart"}>
                    <li className="cursor-pointer">Cart</li>
                  </Link>
                </>
              }
            </>
          ) : (
            <>
              <Link to={"/signup"}>
                <li className="cursor-pointer">SignUp</li>
              </Link>
              <Link to={"/login"}>
                <li className="cursor-pointer">Login</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
