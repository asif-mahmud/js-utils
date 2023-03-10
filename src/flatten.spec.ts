import { flatten } from "./flatten";
import { ObjectType } from "./object-type";

describe("flatten", () => {
  it("should return empty object for empty input object", () => {
    const value: ObjectType = {};
    expect(flatten(value)).toStrictEqual({});
  });

  describe("should include property as is", () => {
    it("for primitive value", () => {
      const value: ObjectType = {
        a: 1,
        b: "hi there",
      };
      const expected: ObjectType = {
        a: 1,
        b: "hi there",
      };
      expect(flatten(value)).toStrictEqual(expected);
    });

    it("for array of primitive values", () => {
      const value: ObjectType = {
        a: [1, 2, 3],
      };
      const expected: ObjectType = {
        ["a.0"]: 1,
        ["a.1"]: 2,
        ["a.2"]: 3,
      };
      expect(flatten(value)).toStrictEqual(expected);
    });

    it("for object of primitive values", () => {
      const value: ObjectType = {
        a: {
          a1: 1,
          a2: "world tour coming",
        },
      };
      const expected: ObjectType = {
        ["a.a1"]: 1,
        ["a.a2"]: "world tour coming",
      };
      expect(flatten(value)).toStrictEqual(expected);
    });
  });
});
