import { ObjectType } from "./object-type";
import { unflatten } from "./unflatten";

describe("unflatten", () => {
  it("should return empty object for empty object", () => {
    const value: ObjectType = {};
    const expected: ObjectType = {};
    expect(unflatten(value)).toStrictEqual(expected);
  });

  it("should return single level object as is", () => {
    const value: ObjectType = {
      a: 1,
      b: 2,
    };
    const expected: ObjectType = {
      a: 1,
      b: 2,
    };
    expect(unflatten(value)).toStrictEqual(expected);
  });

  it("should unflatten simple array", () => {
    const value: ObjectType = {
      ["a.0"]: 1,
      ["a.1"]: 2,
      ["a.2"]: 3,
    };
    const expected: ObjectType = {
      a: [1, 2, 3],
    };
    expect(unflatten(value)).toStrictEqual(expected);
  });

  it("should unflatten simple object", () => {
    const value: ObjectType = {
      ["a.a1"]: 0,
      ["a.a2"]: 1,
    };
    const expected: ObjectType = {
      a: {
        a1: 0,
        a2: 1,
      },
    };
    expect(unflatten(value)).toStrictEqual(expected);
  });

  it("should unflatten array of objects", () => {
    const value: ObjectType = {
      ["a.0.a1"]: 1,
      ["a.0.a2"]: 2,
      ["a.1.a1"]: 3,
      ["a.1.a2"]: 4,
    };
    const expected: ObjectType = {
      a: [
        { a1: 1, a2: 2 },
        { a1: 3, a2: 4 },
      ],
    };
    expect(unflatten(value)).toStrictEqual(expected);
  });

  it("should unflatten multilevel array", () => {
    const value: ObjectType = {
      ["a.0.0.a1"]: 0,
      ["a.0.1.a1"]: 1,
    };
    const expected: ObjectType = {
      a: [[{ a1: 0 }, { a1: 1 }]],
    };
    expect(unflatten(value)).toStrictEqual(expected);
  });

  it("should unflatten nested objects", () => {
    const value: ObjectType = {
      ["a.a1.a11"]: 0,
      ["a.a1.a12.a121"]: 1,
    };
    const expected: ObjectType = {
      a: {
        a1: {
          a11: 0,
          a12: {
            a121: 1,
          },
        },
      },
    };
    expect(unflatten(value)).toStrictEqual(expected);
  });

  it("should unflatten both nested objects and arrays", () => {
    const value: ObjectType = {
      ["a.a1.a11"]: 0,
      ["a.a1.a12.0"]: 1,
      ["a.a2.a21.0.a211"]: 2,
    };
    const expected: ObjectType = {
      a: {
        a1: {
          a11: 0,
          a12: [1],
        },
        a2: {
          a21: [{ a211: 2 }],
        },
      },
    };
    expect(unflatten(value)).toStrictEqual(expected);
  });
});
