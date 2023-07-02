export const runCallback = (myTab) => {
  const row = [];
  for (var i = 0; i < myTab.length; i++) {
    row.push({
      val: 0,
      form: "0",
      initialUnit: String(myTab[i][0].text),
      multi: 1.0,
      multiForm: "1",
      selectedUnit: String(myTab[i][0].text),
      multiResult: 0,
      multiResultForm: "0",
    });
  }
  return row;
};

// prawie o.k.
export const runCallback2 = (myTab, fromTab) => {
  const row = [];
  for (let i = 0; i < myTab.length; i++) {
    row.push({
      val: fromTab[i].val,
      form: fromTab[i].form,
      initialUnit: String(myTab[i][0].text),
      multi: 1.0,
      multiForm: "1",
      selectedUnit: String(myTab[i][0].text),
      // selectedUnit: String(fromTab[i].initialUnit),
      multiResult: 0,
      multiResultForm: "0",
    });
  }
  return row;
};

export const runCallback3 = (myTab, fromTab) => {
  const row = [];
  for (let i = 0; i < myTab.length; i++) {
    row.push({
      val: fromTab[i].val,
      form: fromTab[i].form,
      initialUnit: String(myTab[i][0].text),
      multi: 1.0,
      multiForm: "1",
      selectedUnit: String(myTab[i][0].text),
      // selectedUnit: String(fromTab[i].initialUnit),
      multiResult: fromTab[i].val,
      multiResultForm: String(fromTab[i].val),
    });
  }
  return row;
};

export const runCallback3_1 = (myTab, fromTab) => {
  const row = [];
  for (let i = 0; i < myTab.length; i++) {
    row.push({
      val: fromTab[i].val,
      form: fromTab[i].form,
      initialUnit: String(myTab[i][0].text),
      multi: 1.0,
      multiForm: "1",
      selectedUnit: String(myTab[i][0].text),
      multiResult: fromTab[i].val,
      multiResultForm: fromTab[i].form,
    });
  }
  return row;
};

export const runCallback4 = (myTab, fromTab) => {
  const row = [];
  for (let i = 0; i < myTab.length; i++) {
    row.push({
      val: fromTab[i].val,
      form: fromTab[i].form,
      initialUnit: String(myTab[i][0].text),
      multi: 1.0,
      multiForm: "1",
      selectedUnit: String(myTab[i][0].text),
      // selectedUnit: String(fromTab[i].initialUnit),
      multiResult: fromTab[i].val,
      multiResultForm: String(fromTab[i].val),
    });
  }
  return row;
};

// export const runCallback2 = (myTab, fromTab) => {
//   const row = [];
//   for (let i = 0; i < myTab.length; i++) {
//     row.push({
//       val: fromTab[i].val,
//       form: fromTab[i].form,
//       initialUnit: String(myTab[i][0].text),
//       multi: 1.0,
//       multiForm: "1",
//       selectedUnit: String(myTab[i][0].text),
//       // selectedUnit: String(fromTab[i].initialUnit),
//       multiResult: myTab[i][0].multiResult,
//       multiResultForm: myTab[i][0].multiResultForm,
//     });
//   }
//   return row;
// };
