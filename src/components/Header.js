import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatue from "../utils/useOnlineStatue";
import UserContext from "../utils/UserContext";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatue();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  useEffect(() => {
    // console.log("useEffect called when btnName is clicked");
  }, [btnName]);
  return (
    <div className="flex justify-between ">
      <div className="logo-container">
        <img
          className="w-30 h-23 pl-10 rounded-sm brightness-100 contrast-more:100 mix-blend-darken "
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center ">
        <ul className="flex gap-10 pr-10">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="hover:text-orange-600 font-stretch-200%">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="hover:text-orange-600 font-stretch-200%">
            <Link to="/about" className="nav-link">
              About US
            </Link>
          </li>
          <li className="hover:text-orange-600 font-stretch-200%">
            <Link to="/contact" className="nav-link">
              Contact US
            </Link>
          </li>
          {btnName === "Login" ? (
            <Link to="/login">
              <button
                className="hover:text-orange-600 font-stretch-200% w-25 border-2 border-orange-600 rounded-full"
                onClick={() => setBtnName("Logout")}
              >
                Login
              </button>
            </Link>
          ) : (
            <button className="hover:text-orange-600 font-stretch-200% w-25 border-2 border-orange-600 rounded-full">
              Logout
            </button>
          )}
          <li className="hover:text-orange-600 font-stretch-200%">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
