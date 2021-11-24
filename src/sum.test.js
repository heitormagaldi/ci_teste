const operator = require("./operators");

test("Sum 1 + 1 should be equal 2", () => {
  expect(operator.sum(1, 1)).toBe(2);
});

test("Sum 1 + 1 + 5 should be equal 7", () => {
  expect(operator.sum5(1, 1)).toBe(7);
});

test("Sum 1 + 1 + 6 should be equal 8", () => {
  expect(operator.sum6(1, 1)).toBe(8);
});

test("Times 2 * 5 should be equal 10", () => {
  expect(operator.times(2, 5)).toBe(10);
});

test("Divided by 10 / 2 should be equal 5", () => {
  expect(operator.dividedBy(10, 2)).toBe(5);
});
