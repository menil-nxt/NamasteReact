import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect called when btnName is clicked");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About US
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact US
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName == "Logout" ? "Login" : "Logout");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
