import { has } from "../../src/index";

describe("test has function", () => {
  test("has with string", () => {
    expect(has(["test", "my or"], (item) => item === "not in this array")).toBe(
      false
    );
    expect(
      has(["lorem ipsum", "in this array"], (item) => item === "lorem ipsum")
    ).toBe(true);
  });

  test("has with number", () => {
    expect(has([1, 2, 8, 9], (item) => item === 1)).toBe(true);
    expect(has([10, 28, 5528, 949], (item) => item === 810)).toBe(false);
  });
});
