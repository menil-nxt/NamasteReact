import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { BG_IMG } from "./utils/constants";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Login from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  data,
} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  // Authentication code
  useEffect(() => {
    // Authentivation code
    // Make an API call and get user name and password
    const data = {
      name: "Menil Jotaniya",
      Email: "menil@gemail.com",
      contact: "8128153581",
    };
    setUserInfo(data);
    console.log(data);
  }, []);

  return (
    <Provider store={appstore}>
      <UserContext.Provider
        value={{
          loggedInUser: userInfo?.name,
          setUserInfo: (name) => setUserInfo((prev) => ({ ...prev, name })),
        }}
      >
        <div className="app light min-h-screen relative">
          <video
            className="fixed top-0 left-0 w-full h-full object-cover -z-10"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={BG_IMG} type="video/mp4" />
          </video>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
