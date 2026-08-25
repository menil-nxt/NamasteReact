import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body.jsx";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils"; // we can import from only react also
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// we are writing same fetch function that are browser give us for our jest test.
// we are creteing our own fetch funtion same as browser fetch functinality.

// making fake fetch event.
global.fetch = jest.fn(() => {
  // this is jest function (jest.fn())
  // fetch function is returns us a promise and that promise retures as a json data we convert our json data into json format
  return Promise.resolve({
    // and it's returns us a promise once again and when we resolve the promise than we acually get the data.
    json: () => {
      return Promise.resolve(MOCK_DATA); // MOCK_DATA is a mock data that we are using for our test. because we don't make real API or network call in test cases that's why use mockdata.
    },
  });
}); // in global.fetch my Body is rendered on global space.

// fake API call we are fetching from fake fetch event.
test("Should search res list for burger text input", async () => {
  await act((async) => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "SEARCH" });

  const searchInput = screen.getByPlaceholderText("Search....");

  fireEvent.change(searchInput, { target: { value: "burger" } }); // in search input targeted value = "pizza"

  fireEvent.click(searchBtn);

  // onclick of search button screen should load 2 resCards

  const cards = screen.getAllByTestId("resCard");

  // const searchInput2 = screen.getByTestId("searchInput");
  expect(cards.length).toBe(2);
});

test("Should Top Restaurant button is working", async () => {
  await act((async) => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  const topRatedRes = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });

  fireEvent.click(topRatedRes);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(4);
});
