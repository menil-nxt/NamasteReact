import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatue from "../utils/useOnlineStatue";
import UserContext from "../utils/UserContext";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatue();

  const { loggedInUser, setUserInfo } = useContext(UserContext);
  console.log(loggedInUser);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items); // we can read this store anywhere in our appication using selector
  console.log(cartItems);

  return (
    <div className="flex justify-between ">
      <div className="logo-container">
        <img
          className="w-30 h-20 pl-10 rounded-sm brightness-100 contrast-more:100 mix-blend-darken "
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
          <li className="hover:text-orange-600 font-stretch-200%">
            <Link to="/cart" className="nav-link flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              <span>({cartItems.length} items) </span>
            </Link>
          </li>
          {!loggedInUser ? (
            <li>
              <Link to="/login">
                <button className="hover:text-orange-600 px-2 border-2 border-orange-600 rounded-full">
                  Login
                </button>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <button 
                  className="hover:text-orange-600 px-2 border-2 border-orange-600 rounded-full"
                  onClick={() => setUserInfo(null)}
                >
                  Logout
                </button>
              </li>
              <li className="hover:text-orange-600 font-stretch-200% font-bold flex items-center">
                {loggedInUser?.name}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
