import { mwPrettyFloat } from "../myTemp/mwPrettyFloat";
import "../myTemp/CalcCss.css";
// ******************************************

// https://stackoverflow.com/questions/68327226/how-to-break-line-in-mathjax-using-reactjs

// **************************************************
export const calcSubject = "Body Mass Index";

export const formulaSi = `$ \\mathbf{BMI}\\mathbf \\ =  {m [kg] \\over h^2 [m^2]} \\ $`;

export const formulaUs = `$ \\mathbf{BMI}\\mathbf \\ =  {m [lb_m] \\over h^2 [in^2] }\\cdot 703 \\ $`;

// =  {m [lbₘ] \\over h^2 [in^2] }\\cdot 703 \\ $`;

export const resultSiFunc = (setResultSi, siArray) => {
  // if (Number(siArray.length > 0) && 1===2) {
  if (Number(siArray.length > 0) && siArray[1].multiResult !== 0) {
    setResultSi(
      mwPrettyFloat(
        (
          siArray[0].multiResult / Math.pow(siArray[1].multiResult, 2.0)
        ).toFixed(6)
      )
    );
  } else {
    setResultSi("...");
  }
};

export const resultUsFunc = (setResultUs, usArray) => {
  if (Number(usArray.length > 0) && usArray[1].multiResult !== 0) {
    setResultUs(
      mwPrettyFloat(
        (
          (usArray[0].multiResult / Math.pow(usArray[1].multiResult, 2.0)) *
          703
        ).toFixed(6)
      )
    );
  } else {
    setResultUs("...");
  }
};

export const dynamicSiFormulaFunc = (
  setDynamicSiFormula,
  siArray,
  unitArray,
  resultSi
) => {
  if (/*siUnits && */ Number(siArray.length > 0)) {
    setDynamicSiFormula(
      `$  \\mathbf{\\large {${unitArray[0].name}} \\large}\\mathbf =  {${siArray[0].multiResultForm} \\over  ${siArray[1].multiResultForm}^2} =\\\\ = 
      \\mathbf{\\large{\\underline {${resultSi}} \\;\\large} \\underline\\\\}\\mathbf \\  $`
    );
  }
};

export const dynamicUsFormulaFunc = (
  setDynamicUsFormula,
  usArray,
  unitArray,
  resultUs
) => {
  if (/*!siUnits && */ Number(usArray.length > 0)) {
    setDynamicUsFormula(
      `$ \\mathbf{\\large {${unitArray[0].name}} \\large}\\mathbf =  {${usArray[0].multiResultForm} \\over ${usArray[1].multiResultForm}^2  }\\cdot 703  =\\\\ = 
      \\mathbf{\\large{\\underline {${resultUs}} \\;\\large} \\underline\\\\}\\mathbf \\ $`
    );
  }
};

// export const formula = `$ \\mathbf{BMI}\\mathbf \\ = s_0+v_0\\cdot t+{1 \\over 2} \\cdot a\\cdot t^2  $`
