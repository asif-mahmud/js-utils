import { numberToBanglaWords } from "./number-to-bangla-words";

describe("number to bangla words", () => {
  describe("converting tens", () => {
    it("should convert 0", () => {
      const number = 0;
      const expected = "শূন্য";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 1", () => {
      const number = 1;
      const expected = "এক";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 10", () => {
      const number = 10;
      const expected = "দশ";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 45", () => {
      const number = 45;
      const expected = "পঁয়তাল্লিশ";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 55", () => {
      const number = 55;
      const expected = "পঞ্চান্ন";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 99", () => {
      const number = 99;
      const expected = "নিরানব্বই";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });
  });

  describe("converting hundreds", () => {
    it("should convert 100", () => {
      const number = 100;
      const expected = "এক শত";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 900", () => {
      const number = 900;
      const expected = "নয় শত";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 154", () => {
      const number = 154;
      const expected = "এক শত চুয়ান্ন";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });
  });

  describe("converting thousands", () => {
    it("should convert 1000", () => {
      const number = 1000;
      const expected = "এক হাজার";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 5000", () => {
      const number = 5000;
      const expected = "পাঁচ হাজার";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 86375", () => {
      const number = 86375;
      const expected = "ছিয়াশি হাজার তিন শত পঁচাত্তর";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });
  });

  describe("converting lakhs", () => {
    it("should convert 200000", () => {
      const number = 200000;
      const expected = "দুই লাখ";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 800000", () => {
      const number = 800000;
      const expected = "আট লাখ";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 1000000", () => {
      const number = 1000000;
      const expected = "দশ লাখ";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 6000000", () => {
      const number = 6000000;
      const expected = "ষাট লাখ";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 6666666", () => {
      const number = 6666666;
      const expected = "ছেষট্টি লাখ ছেষট্টি হাজার ছয় শত ছেষট্টি";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });
  });

  describe("converting crores", () => {
    it("should convert 10000000", () => {
      const number = 10000000;
      const expected = "এক কোটি";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 200000000", () => {
      const number = 200000000;
      const expected = "বিশ কোটি";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 222222222", () => {
      const number = 222222222;
      const expected = "বাইশ কোটি বাইশ লাখ বাইশ হাজার দুই শত বাইশ";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });
  });

  describe("converting more than 10 crores", () => {
    it("should convert 1000000000", () => {
      const number = 1000000000;
      const expected = "এক শত কোটি";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert 11000000003", () => {
      const number = 11000000003;
      const expected = "এক হাজার এক শত কোটি তিন";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });
  });

  describe("converting negative numbers", () => {
    it("should convert -34", () => {
      const number = -34;
      const expected = "মাইনাস চৌত্রিশ";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });
  });

  describe("converting fractional numbers", () => {
    it("should convert 15.1233", () => {
      const number = 15.1233;
      const expected = "পনের দশমিক এক দুই তিন তিন";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });

    it("should convert -15.1233", () => {
      const number = -15.1233;
      const expected = "মাইনাস পনের দশমিক এক দুই তিন তিন";

      expect(numberToBanglaWords(number)).toEqual(expected);
    });
  });
});
