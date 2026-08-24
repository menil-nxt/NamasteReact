import { render, screen } from "@testing-library/react";
import Body from "../Body.jsx";
import MOCK_DATA from "../mocks/mockResListData.json";

// we are writing same fetch function that are browser give us for our jest test.
// we are creteing our own fetch funtion same as browser fetch functinality.

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

test("should body render with search button or not", () => {
  render(<Body />);

  //   const result = screen.getByRole("button", { name: "SEARCH" });

  //   expect(result).toBe();
});
