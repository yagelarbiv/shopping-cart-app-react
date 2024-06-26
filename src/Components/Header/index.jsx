import { useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FireBase.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [User, setUser] = useState({});
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser({
        email: user.email, 
        Id:user.uid, Name:user.displayName,
        creationTime:user.metadata.creationTime,
        LasTLogIn:user.metadata.lastSignInTime,
      });
      const uid = user.uid;
      setLogin(true);
      setOpen(uid === "OZ0hciFMZ2QroxRB986f5uc0Lf92");
    } else {
      setLogin(false);
      setOpen(false);
      console.log("user is logged out");
    }
  });

  function NotLoggedIn() {
    return <>
      <Link to={"/sighup"}>
        <li className="cursor-pointer">SignUp</li>
      </Link>
      <Link to={"/login"}>
        <li className="cursor-pointer">Login</li>
      </Link>
    </>;
  }

  function LoggedInWithRegularUser() {
    return <>
      <Link to={"/profile"} state={{ User: User }}>
        <li className="cursor-pointer">Log Out</li>
      </Link>
      <Link to={"/cart"}>
        <li className="cursor-pointer">Cart</li>
      </Link>
    </>;
  }

  function LoggedInWithAdminUser() {
    return <>
      <Link to={"/cart"}>
        <li className="cursor-pointer">Cart</li>
      </Link>
      <Link to={"/delete"}>
        <li className="cursor-pointer">Delete Product</li>
      </Link>
      <Link to={"/Add"}>
        <li className="cursor-pointer">Add Product</li>
      </Link>
      <Link to={"/profile"} state={{ User: User }}>
        <li className="cursor-pointer">Log Out</li>
      </Link>
    </>;
  }

  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"} state={{ open }}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <Link to={"/"} state={{ open }}>
            <li className="cursor-pointer list-none">Home</li>
          </Link>
          {login ? (
            <>
              { 
                open ? LoggedInWithAdminUser() : LoggedInWithRegularUser() 
              }
            </>
          ) : (
            NotLoggedIn()
          )}
        </ul>
      </nav>
    </div>
  );
}
