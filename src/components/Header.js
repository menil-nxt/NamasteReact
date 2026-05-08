import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contect US</li>
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
