import { sub } from "../sub";
test("sub function should return substraction of two numbers", () => {
  const ans = sub(40, 20);
  expect(ans).toBe(20);
});
