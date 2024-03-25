import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase.js";

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ValidatePassword, setValidatePassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");


  const onSubmit = async (e) => {
    e.preventDefault();
    if(password === ValidatePassword) {
      setErrorPassword("");
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
      }
      else {
        setErrorPassword("Passwords do not match");
      }
  };

  return (
    <main>
      <section>
        <div className="flex justify-center">
          <div className="w-25 h-35 shadow-2xl p-10 rounded-xl">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl mb-2 md:text-3xl cursor-pointer tracking-wide">
              SignUp
            </h1>
            <form>
              <div className="mb-3">
                <label htmlFor="email-address">Email address: </label>
                <input
                  type="email"
                  label="Email address"
                  className="p-1 border-2 rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  label="Create password"
                  className="p-1 border-2 rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password">Validate Password: </label>
                <input
                  type="password"
                  label="Create password"
                  className="p-1 border-2 rounded-lg"
                  value={ValidatePassword}
                  onChange={(e) => setValidatePassword(e.target.value)}
                  required
                  placeholder="Validate Password"
                />
              </div>

              <button
                type="submit"
                onClick={onSubmit}
                className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
              >
                Sign up
              </button>
              <p>{errorPassword}</p>
            </form>
            <p>
              Already have an account?
              <NavLink className={"text-red-900 text-lg"} to="/login">
                Sign in
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
