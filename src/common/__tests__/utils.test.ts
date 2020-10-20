import { NumToFixedLengthString, ClampNumber, StringToNum } from "common/utils";

describe.only("NumToFixedLengthString", () => {
  it("Converts number to string", () => {
    const str = NumToFixedLengthString(123, 3);
    expect(str.length).toBe(3);
    expect(str).toMatch("123");
  });

  it("Adds zeroes to start of string by default", () => {
    const str = NumToFixedLengthString(123, 5);
    expect(str).toMatch("00123");
  });

  it("Removes extra numbers from end", () => {
    const str = NumToFixedLengthString(12345, 3);
    expect(str).toMatch("123");
  });

  it("Adds zeroes to end of string with prefix set to false", () => {
    const str = NumToFixedLengthString(123, 5, false);
    expect(str).toMatch("12300");
  });
});

describe("ClampNumber", () => {
  it("Returns value when no min or max is provided", () => {
    const value1 = ClampNumber(10);
    const value2 = ClampNumber(0);
    const value3 = ClampNumber(-10);

    expect(value1).toBe(10);
    expect(value2).toBe(0);
    expect(value3).toBe(-10);
  });

  it("Returns value when min < value < max", () => {
    const value1 = ClampNumber(10, 0, 50);
    const value2 = ClampNumber(0, -50, 50);
    const value3 = ClampNumber(-10, -50, 50);

    expect(value1).toBe(10);
    expect(value2).toBe(0);
    expect(value3).toBe(-10);
  });

  it("Returns max when value > max", () => {
    const value = ClampNumber(100, -50, 50);
    expect(value).toBe(50);
  });

  it("Returns min when value < min", () => {
    const value = ClampNumber(-100, -50, 50);
    expect(value).toBe(-50);
  });

  it("Throws an error when min > max", () => {
    expect(() => ClampNumber(0, 100, -100)).toThrow();
  });
});

describe("StringToNum", () => {
  it("Converts string into the correct number", () => {
    const str = "-123.45";
    const value = StringToNum(str);
    expect(value).toBe(-123.45);
  });

  it("Throws when the string isn't a number", () => {
    expect(() => StringToNum("Hello")).toThrow();
  });
});
