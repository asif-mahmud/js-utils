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

  it("should be able to flatten array of objects", () => {
    const value: ObjectType = {
      a: [
        {
          a1: 0,
          a2: 1,
        },
        {
          a1: 2,
          a2: 3,
        },
      ],
    };
    const expected: ObjectType = {
      ["a.0.a1"]: 0,
      ["a.0.a2"]: 1,
      ["a.1.a1"]: 2,
      ["a.1.a2"]: 3,
    };
    expect(flatten(value)).toStrictEqual(expected);
  });

  it("should be able to flatten multilevel arrays", () => {
    const value: ObjectType = {
      a: [[[{ b: 0, c: 1 }]]],
    };
    const expected: ObjectType = {
      ["a.0.0.0.b"]: 0,
      ["a.0.0.0.c"]: 1,
    };
    expect(flatten(value)).toStrictEqual(expected);
  });

  it("should be able to flatten nested objects", () => {
    const value: ObjectType = {
      a: {
        a1: 0,
        a2: {
          a21: 1,
          a22: 2,
        },
      },
    };
    const expected: ObjectType = {
      ["a.a1"]: 0,
      ["a.a2.a21"]: 1,
      ["a.a2.a22"]: 2,
    };
    expect(flatten(value)).toStrictEqual(expected);
  });

  it("should be able to flatten objects with nested array", () => {
    const value: ObjectType = {
      a: {
        a1: [
          {
            b1: 0,
            b2: [1, 2, 3],
          },
        ],
      },
    };
    const expected: ObjectType = {
      ["a.a1.0.b1"]: 0,
      ["a.a1.0.b2.0"]: 1,
      ["a.a1.0.b2.1"]: 2,
      ["a.a1.0.b2.2"]: 3,
    };
    expect(flatten(value)).toStrictEqual(expected);
  });
});
