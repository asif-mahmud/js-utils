//https://en.wikibooks.org/wiki/Bengali/Numbers
const oneToNinetyNine = [
  "",
  "এক ",
  "দুই ",
  "তিন ",
  "চার ",
  "পাঁচ ",
  "ছয় ",
  "সাত ",
  "আট ",
  "নয় ",
  "দশ ",
  "এগার ",
  "বার ",
  "তের ",
  "চৌদ্দ ",
  "পনের  ",
  "ষোল ",
  "সতের ",
  "আঠার ",
  "ঊনিশ ",
  "বিশ ",
  "একুশ ",
  "বাইশ ",
  "তেইশ ",
  "চব্বিশ ",
  "পঁচিশ ",
  "ছাব্বিশ ",
  "সাতাশ ",
  "আটাশ ",
  "ঊনত্রিশ ",
  "ত্রিশ ",
  "একত্রিশ ",
  "বত্রিশ ",
  "তেত্রিশ ",
  "চৌত্রিশ ",
  "পঁয়ত্রিশ ",
  "ছত্রিশ ",
  "সাঁইত্রিশ ",
  "আটত্রিশ ",
  "ঊনচল্লিশ ",
  "চল্লিশ ",
  "একচল্লিশ ",
  "বিয়াল্লিশ ",
  "তেতাল্লিশ ",
  "চুয়াল্লিশ ",
  "পঁয়তাল্লিশ ",
  "ছেচল্লিশ ",
  "সাতচল্লিশ ",
  "আটচল্লিশ ",
  "ঊনপঞ্চাশ ",
  "পঞ্চাশ ",
  "একান্ন ",
  "বায়ান্ন ",
  "তিপ্পান্ন ",
  "চুয়ান্ন ",
  "পঞ্চান্ন ",
  "ছাপ্পান্ন ",
  "সাতান্ন ",
  "আটান্ন ",
  "ঊনষাট ",
  "ষাট ",
  "একষট্টি ",
  "বাষট্টি ",
  "তেষট্টি ",
  "চৌষট্টি ",
  "পঁয়ষট্টি ",
  "ছেষট্টি ",
  "সাতষট্টি ",
  "আটষট্টি ",
  "ঊনসত্তর ",
  "সত্তর ",
  "একাত্তর ",
  "বাহাত্তর ",
  "তিয়াত্তর ",
  "চুয়াত্তর ",
  "পঁচাত্তর ",
  "ছিয়াত্তর ",
  "সাতাত্তর ",
  "আটাত্তর ",
  "ঊনআশি ",
  "আশি ",
  "একাশি ",
  "বিরাশি ",
  "তিরাশি ",
  "চুরাশি ",
  "পঁচাশি ",
  "ছিয়াশি ",
  "সাতাশি ",
  "আটাশি ",
  "ঊননব্বই ",
  "নব্বই ",
  "একানব্বই ",
  "বিরানব্বই ",
  "তিরানব্বই ",
  "চুরানব্বই ",
  "পঁচানব্বই ",
  "ছিয়ানব্বই ",
  "সাতানব্বই ",
  "আটানব্বই ",
  "নিরানব্বই ",
];
const tens = [
  "",
  "",
  "বিশ",
  "ত্রিশ",
  "চল্লিশ",
  "পঞ্চাশ",
  "ষাট",
  "সত্তর",
  "আশি",
  "নব্বই",
];
const dividers = ["", "কোটি ", "লাখ ", "হাজার ", "শত "];

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
export function numberToBanglaWords(inputNumber: number): string {
  const isNegative = inputNumber < 0;
  const numStr = (isNegative ? inputNumber * -1 : inputNumber).toString();
  const [integerPart = "", fractionalPart] = numStr.split(".", 2);
  let rv = "";

  // convert each lakh part and add crore infront of the next part if needed
  // the idea is too convert up to lakh, add crore infront and then repeat
  for (let partIndex = integerPart.length || 0; partIndex > 0; partIndex -= 7) {
    let paddedStr =
      "0000000" + (integerPart || "").substring(partIndex - 7, partIndex);
    paddedStr = paddedStr.substring(paddedStr.length - 7);
    let matches = paddedStr.match(/^(\d{2})(\d{2})(\d{1})(\d{2})$/);

    if (partIndex < integerPart.length) {
      rv = dividers[1] + rv;
    }

    let upToLakhs = "";

    for (let index = 1; index < 5; index++) {
      upToLakhs +=
        +(matches?.[index] || "") !== 0
          ? (oneToNinetyNine[+(matches?.[index] || "")] ||
              tens[+(matches?.[index]?.[0] || "")] +
                " " +
                oneToNinetyNine[+(matches?.[index]?.[1] || "")]) +
            (index < 4 ? dividers[index + 1] : "")
          : "";
    }

    rv = upToLakhs + rv;
  }

  if (rv === "") rv = "শূন্য";

  if (fractionalPart) {
    rv = rv.trim() + " দশমিক ";
    for (const ch of fractionalPart) {
      rv += oneToNinetyNine[+ch];
    }
  }
  return isNegative ? "মাইনাস " + rv.trim() : rv.trim();
}
