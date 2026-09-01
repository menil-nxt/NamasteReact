import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/mockData.json";
import "@testing-library/jest-dom";

describe("Restaurnat coming with data or not", () => {
  beforeAll(() => {
    console.log("Before All the testcase run");
  });

  beforeEach(() => {
    console.log("Before All the testcase run");
  });

  afterAll(() => {
    console.log("After All the testcase run");
  });

  afterEach(() => {
    console.log("After All the testcase run");
  });

  it("Should render restaurantCard with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />); // mock data is comming from mockData.json whole object is passed into MOCK_DATA

    const restaurantName = screen.getByText("Pizza Hut"); // we can find the text in the restaurantCard component.

    expect(restaurantName).toBeInTheDocument();
  });

  it("what this Restaurant is open ir not", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const result = screen.getByText("₹350 for two");

    expect(result).toBeInTheDocument();
  });
});
