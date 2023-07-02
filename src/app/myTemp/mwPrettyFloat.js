export const mwPrettyFloat = (val, haveBrackets) => {
  const hB = Boolean(haveBrackets);
  const f = Number(val) * 1.0;
  // f = f.toExponential(9);

  if (!isNaN(f) && f < Number.MAX_SAFE_INTEGER) {
    return f.toLocaleString("en-US", {
      // maximumFractionDigits: 9,
      // maximumSignificantDigits: 16,
      // minimumFractionDigits: 6,
      maximumFractionDigits: 15,
    });
  } else if (!isNaN(f) && !hB) {
    // console.log("isNaN =", isNaN(f), "hB = ", hB);
    return `${f.toExponential(6).replace(/e\+/i, " E")}`;
    // return `${f.toExponential(9).replace(/e/i, " Exp")}`;
  } else if (!isNaN(f) && hB) {
    // console.log("isNaN =", isNaN(f), "hB = ", hB);
    return `(${f.toExponential(6).replace(/e\+/i, " E")})`;
    // return `(${f.toExponential(9).replace(/e/i, " Exp")})`;
  } else {
    // console.log("isNaN =", isNaN(f), "hB = ", hB);
    return "fault";
  }
};

// uwaga - patrz https://stackoverflow.com/questions/3612744/remove-insignificant-trailing-zeros-from-a-number
