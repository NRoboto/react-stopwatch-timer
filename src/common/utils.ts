export const NumToFixedLengthString = (
  num: number,
  length: number,
  prefix?: true
) => {
  const numStr = num.toString();
  if (length < numStr.length) return numStr.slice(0, length);
  const zeroes = "0".repeat(length - numStr.length);
  return prefix ? zeroes + numStr : numStr + zeroes;
};

export const ClampNumber = (value: number, min?: number, max?: number) => {
  if (min && max && min > max)
    throw new Error("Min must be less than or equal to max.");

  let clamped = value;
  if (min !== undefined) clamped = Math.max(clamped, min);
  if (max !== undefined) clamped = Math.min(clamped, max);
  return clamped;
};

export const StringToNum = (str: string) => {
  let val: number = 1 * ((str as unknown) as number);
  if (isNaN(val)) throw new Error(`string "${str}" is not a number.`);
  return val;
};
