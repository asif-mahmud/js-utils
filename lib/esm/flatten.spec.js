"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatten_1 = require("./flatten");
describe("flatten", () => {
    it("should return empty object for empty input object", () => {
        const value = {};
        expect((0, flatten_1.flatten)(value)).toStrictEqual({});
    });
    describe("should include property as is", () => {
        it("for primitive value", () => {
            const value = {
                a: 1,
                b: "hi there",
            };
            const expected = {
                a: 1,
                b: "hi there",
            };
            expect((0, flatten_1.flatten)(value)).toStrictEqual(expected);
        });
        it("for array of primitive values", () => {
            const value = {
                a: [1, 2, 3],
            };
            const expected = {
                ["a.0"]: 1,
                ["a.1"]: 2,
                ["a.2"]: 3,
            };
            expect((0, flatten_1.flatten)(value)).toStrictEqual(expected);
        });
        it("for object of primitive values", () => {
            const value = {
                a: {
                    a1: 1,
                    a2: "world tour coming",
                },
            };
            const expected = {
                ["a.a1"]: 1,
                ["a.a2"]: "world tour coming",
            };
            expect((0, flatten_1.flatten)(value)).toStrictEqual(expected);
        });
    });
});
