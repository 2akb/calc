import parse from "html-react-parser";

export const siUnitArray = [
  [{ value: 1, text: "kg", minus: false , k: 0 }],
  [
    { value: 1, text: "m", k: 1 },
    { value: 0.01, text: "cm", k: 2 },
  ],
];

export const usUnitArray = [
  [{ value: 1, text: "lbₘ", k: 3 }],

  [
    { value: 1, text: "in", k: 4 },
    { value: 12, text: "ft", k: 5 },
  ],
];

export const unitArray = [
  {
    name: "BMI",
    expl: "Body Mass Index",
    si: false,
    us: false,
  },
  {
    name: "m",
    expl: "weight",
    si: siUnitArray[0][0].text,
    us: usUnitArray[0][0].text,
    allowNegative: false,
  },
  {
    name: parse("h"),
    expl: "height",
    si: siUnitArray[1][0].text,
    us: usUnitArray[1][0].text,
    allowNegative: true,
  },

  // {
  //   name: "pt",
  //23.661438615467823 si
  // 23.663666891831365
  //   expl: "ptaszek",
  //   si: siUnitArray[4][0].text,
  //   us: usUnitArray[4][0].text,
  // },
];
