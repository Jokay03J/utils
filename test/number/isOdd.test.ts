import { isOdd } from "../../src/index";

describe("test isOdd function", () => {
  test("with odd numbers", () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(5)).toBe(true);
    expect(isOdd(9)).toBe(true);
    expect(isOdd(11)).toBe(true);
    expect(isOdd(15)).toBe(true);
    expect(isOdd(595)).toBe(true);
  });
  test("with even numbers", () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(8)).toBe(false);
    expect(isOdd(10)).toBe(false);
    expect(isOdd(100)).toBe(false);
  });
});
