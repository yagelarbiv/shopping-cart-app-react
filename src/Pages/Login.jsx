import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase.js";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
        setOpen(uid === "OZ0hciFMZ2QroxRB986f5uc0Lf92");
        if(uid === "OZ0hciFMZ2QroxRB986f5uc0Lf92"){
          navigate("/", {
            state: {
              open: true,
            }
          });
        }
        else{
          navigate("/", {
            state: {
              open: open,
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <main>
        <section>
          <div className="flex justify-center">
            <div className="w-25 h-35 shadow-2xl p-10 rounded-xl">
              <h1 className="text-red-900 font-bold text-xl sm:text-2xl mb-2 md:text-3xl cursor-pointer tracking-wide">
                LogIn
              </h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="email-address">Email address: </label>
                  <input
                    className="border-2 rounded-lg"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password">Password: </label>
                  <input
                    className="border-2 rounded-lg"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <button
                    className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
                    onClick={onLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
              <p className="text-sm text-black text-center">
                No account yet? <NavLink className={"text-red-900 text-lg"} to="/signup">Sign up</NavLink>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
