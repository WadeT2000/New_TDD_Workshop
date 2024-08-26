import { sum , sub, mult} from "./Numbers";

describe("Numbers", () => {
  test("sum() should add two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
  test('Sub() Should subtract two numbers', () => {
    expect(sub(3, 1)).toEqual(2);
  });
  test('Should multiply two numbers', () => {
    expect(mult(3, 4)).toEqual(12)
  })
});
