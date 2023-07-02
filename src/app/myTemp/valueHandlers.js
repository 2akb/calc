const MAX_VAL = 9999999999999999.0;

const MIN_VAL = -9999999999999999.0; // dodałem bo nie przyjmowało negative
const SIGN = "-"; // dodałem bo nie przyjmowało negative

// export const widthValueCap = (inputObj) => {
//   const { value } = inputObj;
//   if ((value >= MIN_VAL && value <= MAX_VAL) || value === SIGN) return true;
//   return false;
// };

export const widthValueCap = (inputObj) => {
  const { value } = inputObj;
  if (Math.abs(value <= MAX_VAL)) return true;
  return false;
};
