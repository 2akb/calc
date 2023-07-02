// export default function Default() {
//   // You can add any UI inside Loading, including a Skeleton.
//   return (
//     <>
//       <h2>Ładuje się</h2>
//     </>
//   );
// }

"use client";

import React, { useState, useEffect, useMemo } from "react";
import FormulaPanel from "../../myTemp/FormulaPanel";
import InsertDataPanel from "../../myTemp/InsertDataPanel";
import ResultPanel from "../../myTemp/ResultPanel";
import FullCalcPanel from "../../myTemp/FullCalcPanel";
import ControlArray from "../../myTemp/ControlArray";
import { runCallback, runCallback3_1 } from "../../myTemp/callbacks";
// **********************************************************************
import { unitArray, siUnitArray, usUnitArray } from "./unitaArray";
import {
  calcSubject,
  formulaSi,
  formulaUs,
  resultSiFunc,
  resultUsFunc,
  dynamicSiFormulaFunc,
  dynamicUsFormulaFunc,
} from "./Formulas";
import "../../globals.css";
// **********************************************************************
// **********************************************************************
const Default = () => {
  const [resultSi, setResultSi] = useState();
  const [resultUs, setResultUs] = useState();
  const [siArray, setSiArray] = useState([]);
  const [usArray, setUsArray] = useState([]);

  const [dynamicSiFormula, setDynamicSiFormula] = useState(`$ wait $`);
  const [dynamicUsFormula, setDynamicUsFormula] = useState(`$ wait $`);

  const [siUnits, setSiUnits] = useState(false);
  const [unitButtAttr, setUnitButtAttr] = useState("Units - change to SI");

  const [seeCalc, setSeeCalc] = useState(true); // show full calculations
  const [buttonAttr, setButtonAttr] = useState("Show only result");

  const handleShowCalc = () => {
    setSeeCalc(seeCalc ? false : true);
    setButtonAttr(seeCalc ? "Show full calculations" : "Show only result");
  };

  useEffect(() => {
    setSiArray(runCallback(siUnitArray));
  }, []);

  useEffect(() => {
    setUsArray(runCallback(usUnitArray));
  }, []);

  const handleUnits = () => {
    // console.log("PRoba zmiany jednostki");
    setSiUnits(siUnits ? false : true);
    setUnitButtAttr(
      siUnits ? "Units - change to SI" : ` Units - change to US/Eng. `
    );

    if (!siUnits) {
      setSiArray(runCallback3_1(siUnitArray, usArray));
    } else {
      setUsArray(runCallback3_1(usUnitArray, siArray));
    }
  };

  useMemo(() => {
    resultUsFunc(setResultUs, usArray);
  }, [usArray]);

  useMemo(() => {
    resultSiFunc(setResultSi, siArray);
  }, [siArray]);

  useMemo(() => {
    dynamicSiFormulaFunc(setDynamicSiFormula, siArray, unitArray, resultSi);
  }, [siArray, resultSi]);

  useMemo(() => {
    dynamicUsFormulaFunc(setDynamicUsFormula, usArray, unitArray, resultUs);
  }, [usArray, resultUs]);

  // seeHide = false; // bezpośrednio w ControlArray

  return (
    <>
      {/* <div className="page"> */}
      <div className="calcContent">
        <FormulaPanel
          /*formWidth={"240px"} to już niepotrzebne*/
          formulaSi={formulaSi}
          formulaUs={formulaUs}
          calcSubject={calcSubject}
          unitArray={unitArray}
          siUnits={siUnits}
          unitButtAttr={unitButtAttr}
          handleUnits={handleUnits}
        />

        <InsertDataPanel
          siUnits={siUnits}
          unitArray={unitArray}
          siArray={siArray}
          usArray={usArray}
          setSiArray={setSiArray}
          setUsArray={setUsArray}
          unitButtAttr={unitButtAttr}
          siUnitArray={siUnitArray}
          usUnitArray={usUnitArray}
          handleUnits={handleUnits}
          array={unitArray}
        />
        <ResultPanel
          seeCalc={seeCalc}
          siUnits={siUnits}
          unitArray={unitArray}
          resultSi={resultSi}
          resultUs={resultUs}
          siUnitArray={siUnitArray}
          usUnitArray={usUnitArray}
          handleShowCalc={handleShowCalc}
          buttonAttr={buttonAttr}
        />
        {/* <ButtonSeeFullCalc
          handleShowCalc={handleShowCalc}
          buttonAttr={buttonAttr}
        /> */}
        <div style={{ backgroundColor: "pink" }}></div>
        <div>
          <FullCalcPanel
            seeCalc={seeCalc}
            siUnits={siUnits}
            siArray={siArray}
            usArray={usArray}
            unitArray={unitArray}
            formulaSi={formulaSi}
            formulaUs={formulaUs}
            dynamicSiFormula={dynamicSiFormula}
            dynamicUsFormula={dynamicUsFormula}
            handleShowCalc={handleShowCalc}
            buttonAttr={buttonAttr}
          />
        </div>

        {/* !!! włączanie / wyłączanie bezpośrednio w komponencie,
bez użycia buttona jak wcześniej !!! */}
        <ControlArray
          // seeControlArr={seeControlArr}
          siUnits={siUnits}
          siArray={siArray}
          usArray={usArray}
          unitArray={unitArray}
        />
      </div>
    </>
  );
};

export default Default;
