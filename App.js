import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Child");

// console.log(heading);

// JSX(Babel teransplite it) -> React.createElement -> React.createElement(js Object) -> HTML element that browser can understand
// Funcational Component

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contect US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ponwwjqlh8wararhuo4p"
      />
      <h3>KFC</h3>

      <h4>Biryani, North Indian , Asian</h4>
      <h4>⭐️ 4.2</h4>
      <h4>45 min</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h1 className="slogen">Fast delivery, fresh flavors</h1>
        <div className="search-input">
          <input className="search-bar" type="text" />
          <button className="btn-search">SEARCH</button>
        </div>
      </div>
      <h2 className="explore">Bringing the restaurant home to you</h2>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <video className="backgroung-img" autoPlay loop muted playsInline>
        <source
          src="https://www.shutterstock.com/shutterstock/videos/3928547535/preview/stock-footage-mexican-pizza-on-plate-candlelit-restaurant-table-shallow-depth-of-field-slow-camera-pan.mp4"
          type="video/mp4"
        />
      </video>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
