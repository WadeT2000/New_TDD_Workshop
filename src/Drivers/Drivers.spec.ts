// Don't forget to import your functions
import { status } from "./Drivers";

describe("Drivers", () => {
  test("foo", () => {
    expect(status(14)).toBe('too young')
  });
  test("bar", () => {
    expect(status(86)).toBe('too old')
  });
  test('fubar', () => {
    expect(status(35)).toBe('eligible')
  })
});
