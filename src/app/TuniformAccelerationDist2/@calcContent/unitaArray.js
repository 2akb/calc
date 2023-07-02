import parse from "html-react-parser";

// export const siUnitArray = [
//   [
//     { value: 1, text: "m"},
//     { value: 0.01, text: "cm" },
//     { value: 1000, text: "km" },
//   ],
//   [
//     { value: 1, text: "m/s" },
//     { value: 10 / 36, text: "km/h" },
//   ],
//   [
//     { value: 1, text: "s" },
//     { value: 3600, text: "h" },
//   ],
//   [
//     { value: 1, text: "m/s²" },
//     { value: 0.01, text: "cm/s²" },
//     { value: 1000 / (3600 * 3600), text: "km/h²" },
//   ],
// ];

// export const usUnitArray = [
//   [
//     { value: 1, text: "ft" },
//     { value: 3, text: "yard" },
//     { value: 1 / 12, text: "in" },
//     { value: 5280, text: "mi" },
//   ],
//   [
//     { value: 1, text: "fps" },
//     { value: 1.466666666667, text: "mph" },
//   ],
//   [
//     { value: 1, text: "s" },
//     { value: 3600, text: "h" },
//   ],
//   [
//     { value: 1, text: "ft/s²" },
//     { value: 1 / 3, text: "yard/s²" },
//     { value: 165 / 3305, text: "in/s²" },
//     { value: 14564, text: "mi/h²" },
//   ],
// ];

/////////////////////////////////////////////////////////////////////
//                BYŁO
/////////////////////////////////////////////////////////////////////

// export const siUnitArray = [
//   [
//     { value: 1, text: "m", k: 0 },
//     { value: 0.01, text: "cm", k: 1 },
//     { value: 1000, text: "km", k: 2 },
//   ],
//   [
//     { value: 1, text: "m/s", k: 3 },
//     { value: 10 / 36, text: "km/h", k: 4 },
//   ],
//   [
//     { value: 1, text: "s", k: 5 },
//     { value: 3600, text: "h", k: 6 },
//   ],
//   [
//     { value: 1, text: "m/s²", k: 7 },
//     { value: 0.01, text: "cm/s²", k: 8 },
//     { value: 1000 / (3600 * 3600), text: "km/h²", k: 9 },
//   ],
// ];

// export const usUnitArray = [
//   [
//     { value: 1, text: "ft", k: 10 },
//     { value: 3, text: "yard", k: 11 },
//     { value: 1 / 12, text: "in", k: 12 },
//     { value: 5280, text: "mi", k: 13 },
//   ],
//   [
//     { value: 1, text: "fps", k: 14 },
//     { value: 1.466666666667, text: "mph", k: 15 },
//   ],
//   [
//     { value: 1, text: "s", k: 16 },
//     { value: 3600, text: "h", k: 17 },
//   ],
//   [
//     { value: 1, text: "ft/s²", k: 18 },
//     { value: 1 / 3, text: "yard/s²", k: 19 },
//     { value: 165 / 3305, text: "in/s²", k: 20 },
//     { value: 14564, text: "mi/h²", k: 21 },
//   ],
// ];

// export const unitArray = [
//   {
//     name: "s(t)",
//     expl: "displacement",
//     si: siUnitArray[0][0].text,
//     us: usUnitArray[0][0].text,
//   },
//   {
//     name: parse("s<sub>0</sub>"),
//     expl: "initial displacement (position at time = 0)",
//     si: siUnitArray[0][0].text,
//     us: usUnitArray[0][0].text,
//   },
//   {
//     name: parse("v<sub>0</sub>"),
//     expl: "initial velocity",
//     si: siUnitArray[1][0].text,
//     us: usUnitArray[1][0].text,
//   },
//   {
//     name: "t",
//     expl: "elapsed time",
//     si: siUnitArray[2][0].text,
//     us: usUnitArray[2][0].text,
//   },
//   {
//     name: "a",
//     expl: "acceleration",
//     si: siUnitArray[3][0].text,
//     us: usUnitArray[3][0].text,
//   },
// ];


/////////////////////////////////////////////////////////////////////
//                BYŁO koniec
/////////////////////////////////////////////////////////////////////


export const siUnitArray = [
  [
    { value: 1, text: "m", k: 0 },
    { value: 0.01, text: "cm", k: 1 },
    { value: 1000, text: "km", k: 2 },
  ],
  [
    { value: 1, text: "m/s", k: 3 },
    { value: 10 / 36, text: "km/h", k: 4 },
  ],
  [
    { value: 1, text: "s", k: 5 },
    { value: 3600, text: "h", k: 6 },
  ],
  [
    { value: 1, text: "m/s²", k: 7 },
    { value: 0.01, text: "cm/s²", k: 8 },
    { value: 1000 / (3600 * 3600), text: "km/h²", k: 9 },
  ],
// [
//       { value: 1, text: "nowaSi", k: 10 },
//       { value: 0.15, text: "NowaSi_1", k: 11 },
//       { value: 115 , text: "Nowa_Si2", k: 12 },
//     ],

];

export const usUnitArray = [
  [
    { value: 1, text: "ft", k: 10 },
    { value: 3, text: "yard", k: 11 },
    { value: 1 / 12, text: "in", k: 12 },
    { value: 5280, text: "mi", k: 13 },
  ],
  [
    { value: 1, text: "fps", k: 14 },
    { value: 1.466666666667, text: "mph", k: 15 },
  ],
  [
    { value: 1, text: "s", k: 16 },
    { value: 3600, text: "h", k: 17 },
  ],
  [
    { value: 1, text: "ft/s²", k: 18 },
    { value: 1 / 3, text: "yard/s²", k: 19 },
    { value: 165 / 3305, text: "in/s²", k: 20 },
    { value: 14564, text: "mi/h²", k: 21 },
  ],
// [
//       { value: 1, text: "nowaUs", k: 22 },
//       { value: 0.175, text: "N_Us_1", k: 23 },
//       { value: 1145 , text: "N__Us2", k: 24 },
//     ],
];

export const unitArray = [
  {
    name: "s(t)",
    expl: "displacement",
    si: siUnitArray[0][0].text,
    us: usUnitArray[0][0].text,
    // allowNegative: false,
  },
  {
    name: parse("s<sub>0</sub>"),
    expl: "initial displacement (position at time = 0)",
    si: siUnitArray[0][0].text,
    us: usUnitArray[0][0].text,
    allowNegative: false,
  },
  {
    name: parse("v<sub>0</sub>"),
    expl: "initial velocity",
    si: siUnitArray[1][0].text,
    us: usUnitArray[1][0].text,
    allowNegative: false,
  },
  {
    name: "t",
    expl: "elapsed time",
    si: siUnitArray[2][0].text,
    us: usUnitArray[2][0].text,
    allowNegative: false,
  },
  {
    name: "a",
    expl: "acceleration",
    si: siUnitArray[3][0].text,
    us: usUnitArray[3][0].text,
    allowNegative: false,
  },
  // {
  //   name: "pt",
  //   expl: "ptaszek",
  //   si: siUnitArray[4][0].text,
  //   us: usUnitArray[4][0].text,
  // },
];