import { replace } from "../../src/index";

describe("test replaceArray function", () => {
  test("replace array with string", () => {
    expect(replace(["test1", "test2", "test3"], "test", "")).toStrictEqual([
      "1",
      "2",
      "3",
    ]);
  });

  test("replace array with regepx", () => {
    expect(replace(["test1", "test2", "test3"], /test/g, "")).toStrictEqual([
      "1",
      "2",
      "3",
    ]);
  });
});
