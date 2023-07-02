import { mwPrettyFloat } from "../../myTemp/mwPrettyFloat";
import "../../myTemp/CalcCss.css";
// ******************************************

// https://stackoverflow.com/questions/68327226/how-to-break-line-in-mathjax-using-reactjs

// **************************************************
export const calcSubject = "Displacement during uniform acceleration";

export const formulaSi = `$ \\mathbf{s(t)}\\mathbf \\ = s_0+v_0\\cdot t+{1 \\over 2} \\cdot a\\cdot t^2  $`;

export const formulaUs = formulaSi;

export const resultSiFunc = (setResultSi, siArray) => {
  if (Number(siArray.length > 0)) {
    setResultSi(
      mwPrettyFloat((
        siArray[0].multiResult +
          siArray[1].multiResult * siArray[2].multiResult +
          0.5 * siArray[3].multiResult * Math.pow(siArray[2].multiResult, 2.0)
      ).toFixed(6))
    );
  }
};

export const resultUsFunc = (setResultUs, usArray) => {
  if (Number(usArray.length > 0)) {
    setResultUs(
      mwPrettyFloat((
        usArray[0].multiResult +
          usArray[1].multiResult * usArray[2].multiResult +
          0.5 * usArray[3].multiResult * Math.pow(usArray[2].multiResult, 2.0)
      ).toFixed(6))
    );
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
      `$  \\mathbf{\\large {${unitArray[0].name}} \\large}\\mathbf =  ${siArray[0].multiResultForm} + ${siArray[1].multiResultForm}  \\cdot ${siArray[2].multiResultForm} +{1 \\over 2} \\cdot ${siArray[3].multiResultForm} \\cdot ${siArray[2].multiResultForm}^2 =\\\\ = 
         \\mathbf{\\large{\\underline {${resultSi}} \\;\\large} \\underline\\\\}\\mathbf [${siArray[0].initialUnit}] $`
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
      `$ \\mathbf{\\large {${unitArray[0].name}} \\large}\\mathbf =  ${usArray[0].multiResultForm} + ${usArray[1].multiResultForm}  \\cdot ${usArray[2].multiResultForm} +{1 \\over 2} \\cdot ${usArray[3].multiResultForm} \\cdot ${usArray[2].multiResultForm}^2 =\\\\ = 
      \\mathbf{\\large{\\underline {${resultUs}} \\;\\large} \\underline\\\\}\\mathbf [${usArray[0].initialUnit}] $`
    );
  }
};
