/**
 * Translate a numeric value into bengali words.
 *
 * @param inputNumber - Numeric value. can be negative or fractional.
 *
 * @returns Translated string
 *
 * @example
 * ```ts
 * numberToBanglaWords(1);
 * // এক
 * numberToBanglaWords(11000000003);
 * // এক হাজার এক শত কোটি তিন
 * numberToBanglaWords(15.123);
 * // পনের দশমিক এক দুই তিন
 * numberToBanglaWords(-55);
 * // মাইনাস পঞ্চান্ন
 * ```
 */
export declare function numberToBanglaWords(inputNumber: number): string;
