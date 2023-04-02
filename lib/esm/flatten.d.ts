import { ObjectType } from "./object-type";
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
export declare function flatten(inputValue: ObjectType): ObjectType;
