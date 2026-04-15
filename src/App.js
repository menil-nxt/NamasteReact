import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BG_IMG } from "./utils/constants";

const heading = React.createElement("h1", { id: "heading" }, "Child");

// console.log(heading);

// JSX(Babel teransplite it) -> React.createElement -> React.createElement(js Object) -> HTML element that browser can understand
// Funcational Component

const AppLayout = () => {
  return (
    <div className="app">
      <video className="backgroung-img" autoPlay loop muted playsInline>
        <source src={BG_IMG} type="video/mp4" />
      </video>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
