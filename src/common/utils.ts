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
