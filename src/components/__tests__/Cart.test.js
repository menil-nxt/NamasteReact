import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "@testing-library/react"; // or React
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import MOCK_DATA from "../mocks/mockRestaurantMenu.json";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load reataurant menu ", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    ),
  );

  const accordianHader = screen.getByText("Fries & Sides - (4)");
  fireEvent.click(accordianHader);

  // expect(screen.getAllByTestId("items").length).toBe(4);          OR
  const itemsList = screen.getAllByTestId("items");

  expect(itemsList.length).toBe(4);
});

it("Should our header cart has 0 items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    ),
  );
  const cartItems = screen.getByText("(0 items)");
  expect(cartItems).toBeInTheDocument();
});

it("Should our header cart has 1 items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    ),
  );
  const addBtn = screen.getAllByRole("button", { name: "ADD" }); // Geting ADD Button
  fireEvent.click(addBtn[0]); // clicking first ADD button in arry of menus that has ADD button

  const cartItems = screen.getByText("(1 items)"); // Header should now have 1 items in
  expect(cartItems).toBeInTheDocument();
});

it("Should our header cart has 2 items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    ),
  );
  const addBtn = screen.getAllByRole("button", { name: "ADD" }); // Geting ADD Button
  fireEvent.click(addBtn[1]); // clicking first ADD button in arry of menus that has ADD button

  const cartItems = screen.getByText("(2 items)"); // Header should now have 2 items in
  expect(cartItems).toBeInTheDocument();
});

// this is whole test case flow in one one test case but run for this test case we need to comment out rest of all.

// it("Should display correct number of items in cart", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <Header />
//           <RestaurantMenu />
//           <Cart />
//         </Provider>
//       </BrowserRouter>,
//     ),
//   );

//   const accordianHader = screen.getByText("Fries & Sides - (4)");
//   fireEvent.click(accordianHader);

//   // expect(screen.getAllByTestId("items").length).toBe(4);          OR
//   const itemsList = screen.getAllByTestId("items");

//   expect(itemsList.length).toBe(4);

//   const cartItems = screen.getByText("(0 items)");
//   expect(cartItems).toBeInTheDocument();

//   const addBtn = screen.getAllByRole("button", { name: "ADD" }); // Geting ADD Button
//   fireEvent.click(addBtn[0]); // clicking first ADD button in arry of menus that has ADD button

//   const cartItems1 = screen.getByText("(1 items)"); // Header should now have 1 items in
//   expect(cartItems1).toBeInTheDocument();

//   fireEvent.click(addBtn[1]); // clicking first ADD button in arry of menus that has ADD button

//   const cartItems2 = screen.getByText("(2 items)"); // Header should now have 2 items in
//   expect(cartItems2).toBeInTheDocument();

//   expect(screen.getAllByTestId("items").length).toBe(6); // 4 items in menu + 2 items in cart total = 6 test is not consider diffrent in both restaurantMenu and Cart componet items
// });

it("Should Cart has 2 items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    ),
  );
  expect(screen.getAllByTestId("items").length).toBe(2);
});
