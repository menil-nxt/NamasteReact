import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // for using toBeInTheDocument() matcher

describe("Contact us component test cases ", () => {
  test("contact us page perfectly loaded or not", () => {
    render(<Contact />);

    // screen is acts as a global pointer to the entire rendered HTML document body, allowing you to easily query and find UI elements
    // when we use getAllByRole("heading") -> it's convert all heading tag into array and we can access them by index
    // this is known as query we are doing querying
    const heading = screen.getAllByRole("heading");

    // like this way heading[0] ,heading[1], heading[2] ..... we can access all heading from array and check one by one heading is present in the document or not
    expect(heading[5]).toBeInTheDocument(); // because toBeInTheDocument() expects a single DOM element, not an array. If you pass it whole array, the assertion fails.
    expect(heading[0]).toBeInTheDocument();

    // console.log(heading.length);

    // OR

    // if we want to use getByRole() method it's Target a specific heading by its text content using the name option.
    const heading1 = screen.getByRole(
      "heading",
      { name: "Get in Touch" },
      { name: "Send us a Message" },
    ); // only specific one heading we can check with the name option
    expect(heading1).toBeInTheDocument();
  });
});
