import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../FireBase.js";
import { signOut } from "firebase/auth";

export default function Profile() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { User } = state;
  console.log(User);
  const handleLogOut = () => {
    signOut(auth).then(() => {
      navigate("/", {
        state: {
          open: false
        }
      });
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
      <p>
        <span>
          Welcome
        </span>
        <span>
          {User.displayName}
        </span>
      </p>
      <p>
        <span>
          email:
        </span>
        <span>
          {User.email}
        </span>
      </p>
      <p>
        <span>
          Id:
        </span>
        <span>
          {User.Id}
        </span>
      </p>
      <p>
        <span>
          creationTime:
        </span>
        <span>
          {User.creationTime}
        </span>
      </p>
      <p>
        <span>
          LastLoggedIn:
        </span>
        <span>
          {User.LasTLogIn}
        </span>
      </p>
      <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
        onClick={handleLogOut}>
        Logout
      </button>
    </div>
  )
}
