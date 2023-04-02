import { ObjectType } from "./object-type";
/**
 * Unflatten a flat object.
 *
 * @param inputValue - Any plain object with properties representing
 * one leaf value of the actual object.
 *
 * @returns Actual object with all it's nested structured reconstructed
 * from the flattened properties.
 *
 * @example
 * ```ts
 * unflatten({
 *    a: 1,
 *    "b.0": 0,
 *    "b.1": 1,
 *    "c.c1": 1,
 *    "c.c2": 2,
 * });
 *
 * // {
 * //    a: 1,
 * //    b: [0, 1],
 * //    c: {c1: 1, c2: 2}
 * // }
 * ```
 */
export declare function unflatten(inputValue: ObjectType): ObjectType;
