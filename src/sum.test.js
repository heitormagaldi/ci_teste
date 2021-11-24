const operator = require("./sum");

test("Sum 1 + 1 should be equal 2", () => {
  expect(operator.sum(1, 1)).toBe(2);
});
