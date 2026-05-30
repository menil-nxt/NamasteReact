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
import Payment from "./components/Payment";
import RestaurantMenu from "./components/RestaurantMenu";
import { CartProvider } from "./utils/CartContext";
import ThemeContext from "./utils/ThemeContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CartProvider>
        <div className={`app ${theme}`}>
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
      </CartProvider>
    </ThemeContext.Provider>
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
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
