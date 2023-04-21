import { isEven } from "../../src/index";

describe("test isEven", () => {
  test("test even numbers", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(6)).toBe(true);
    expect(isEven(10)).toBe(true);
    expect(isEven(4798)).toBe(true);
    expect(isEven(95125674)).toBe(true);
  });

  test("test odd numbers", () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
    expect(isEven(39)).toBe(false);
    expect(isEven(47)).toBe(false);
    expect(isEven(156119)).toBe(false);
    expect(isEven(8516451241543)).toBe(false);
  });
});
