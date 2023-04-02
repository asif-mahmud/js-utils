"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = void 0;
/**
 * Converts an object to array of objects.
 * @internal
 */
function objectToArray(inputObj, parents) {
    let flatArr = [];
    let parentKeys = parents || [];
    // walk through each key of the input object
    for (const key in inputObj) {
        if (Object.hasOwnProperty.call(inputObj, key)) {
            // check if the value for key is nested array or object
            const isObject = inputObj[key] instanceof Object;
            const isArray = inputObj[key] instanceof Array;
            // if the value is object or array, recursively walk through it's children
            if (isObject) {
                if (isArray) {
                    flatArr = [
                        ...flatArr,
                        ...inputObj[key]
                            .map((obj, index) => objectToArray(obj, [...parentKeys, key, index.toString()]))
                            .flat(),
                    ];
                }
                else {
                    flatArr = [
                        ...flatArr,
                        ...objectToArray(inputObj[key], [...parentKeys, key]),
                    ];
                }
            }
            else {
                // add flattened key with the leaf's value to flattened array
                flatArr = [
                    ...flatArr,
                    { [[...parentKeys, key].join(".")]: inputObj[key] },
                ];
            }
        }
    }
    // if input object is not an object, it might come from
    // an array value with array of primitive values
    if (!(inputObj instanceof Object)) {
        flatArr = [...flatArr, { [parentKeys.join(".")]: inputObj }];
    }
    return flatArr;
}
/**
 * Flatten an object.
 *
 * Do not use it to flatten recursively referencing objects.
 *
 * @param inputValue - Any plain javascript object.
 * @returns An object whose properties reflect one single leaf
 * property of the the inputValue. thus making an object with
 * nested values (objects and arrays), into one object with
 * no nested value.
 *
 * @example
 * ```ts
 * flatten({
 *    a: 1,
 *    b: [0, 1],
 *    c: { c1: 2, c2: 3}
 * });
 *
 * // { a: 1,
 * //   "b.0": 0,
 * //   "b.1": 1,
 * //   "c.c1": 2,
 * //   "c.c2": 3,
 * // }
 * ```
 */
function flatten(inputValue) {
    let output = {};
    const flatArr = objectToArray(inputValue);
    // add each flattened key-value object to the output
    flatArr.forEach((obj) => {
        output = {
            ...output,
            ...obj,
        };
    });
    return output;
}
exports.flatten = flatten;
