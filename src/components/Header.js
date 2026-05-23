import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatue from "../utils/useOnlineStatue";
import { useCart } from "../utils/CartContext";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatue();
  const { totalItems } = useCart();

  useEffect(() => {
    console.log("useEffect called when btnName is clicked");
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
          <li className="hover:text-orange-600 font-stretch-200% relative">
            <Link to="/cart" className="nav-link">
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-4 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
          {btnName === "Login" ? (
            <Link to="/login">
              <button className="hover:text-orange-600 font-stretch-200% w-25 border-2 border-orange-600 rounded-full">
                Login
              </button>
            </Link>
          ) : (
            <button
              className="hover:text-orange-600 font-stretch-200% w-25 border-2 border-orange-600 rounded-full"
              onClick={() => setBtnName("Login")}
            >
              Logout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
