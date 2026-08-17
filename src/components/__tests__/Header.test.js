import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const loginButton = screen.getByRole("button"); // throught see what header has button or not.

  // const loginButton = screen.getByText("Login"); // hader has "Login" text or not.

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with a cart items count", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  // const cartItems = screen.getByText("(0 items)"); // throught see what header has button or not.

  const cartItems = screen.getByText(/items/); // you can use regex for find perticulary text in the header.

  // const loginButton = screen.getByText("Login"); // hader has "Login" text or not.

  expect(cartItems).toBeInTheDocument();
});

// it("Should render Header component with login Logout toggel button and state is change or not", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>,
//   );
//   // const cartItems = screen.getByText("(0 items)"); // throught see what header has button or not.

//   const loginButton = screen.getByRole("button", { name: "Login" }); // you can use regex for find perticulary text in the header.

//   fireEvent.click(loginButton);

//   const logoutButton = screen.getByRole("button", { name: "Logout" }); // you can use regex for find perticulary text in the header.

//   // const loginButton = screen.getByText("Login"); // hader has "Login" text or not.

//   expect(logoutButton).toBeInTheDocument();
// });
