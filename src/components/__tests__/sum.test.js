import { sum } from "../sum";
import { sub } from "../sub";

// test is a function that takes two arguments, a string and a callback function. The string is the name of the test,
// and the callback function contains the code that will be executed when the test is run. In this case,
// the test is checking that the sum function returns the correct result when given two numbers as arguments.
// The expect function is used to create an assertion, which checks that the result of calling sum(4, 5) is equal to 7.
// If the assertion fails, the test will fail and an error message will be displayed.

test("sum function should be returned sum of two numbers", () => {
  const result = sum(4, 5);

  //Assertion - what result should be came fro this sum function that we write in the assertion
  expect(result).toBe(9);

  const result2 = sub(10, 5);

  expect(result2).toBe(5);
});

test("this is sum test case", () => {
  const ans = sum(5, 7);

  expect(ans).toBe(12);
});

test("sub function", () => {
  const ans = sub(4, 1);
  expect(ans).toBe(3);
});
