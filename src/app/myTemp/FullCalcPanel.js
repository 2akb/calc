import React from "react";
import ButtonSeeFullCalc from "./ButtonSeeFullCalc";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import "./CalcCss.css";

const FullCalcPanel = (props) => {
  return (
    <>
     {props.seeCalc && (
        <> 
    <ButtonSeeFullCalc 
 buttonAttr={props.buttonAttr}
 handleShowCalc={props.handleShowCalc}
/>
    
          <h2>Full calculations</h2>

          {props.siUnits ? (
            <div>
              <div className="divForm">
                <Latex>{props.formulaSi}</Latex>
              </div>
              {props.siArray.map((d, index) => {
                return (
                  <li style={{ listStyle: "none" }} key={index}>
                    <div className="divFormZZZ">
                      {props.unitArray[index + 1].name} = {d.form} [
                      {d.selectedUnit}]
                      {d.selectedUnit !== d.initialUnit && (
                        <>
                          &nbsp; =&gt; &nbsp; {props.unitArray[index + 1].name}{" "}
                          = {d.form} &#8226; {d.multiForm} = {d.multiResultForm}{" "}
                          [{d.initialUnit}]
                        </>
                      )}
                    </div>
                  </li>
                );
              })}

              {/* <div className="ltxPnl">
                <Latex>{props.formula}</Latex>
              </div> */}

              <div className="divForm">
                {/* <div className="ltxPnl"> */}
                <Latex>{props.dynamicSiFormula}</Latex>
              </div>
            </div>
          ) : (
            <>
              <div className="divForm">
                <Latex>{props.formulaUs}</Latex>
              </div>
              {props.usArray.map((d, index) => {
                return (
                  <li style={{ listStyle: "none" }} key={index}>
                    <div className="divFormZZZ">
                      {props.unitArray[index + 1].name} = {d.form} [
                      {d.selectedUnit}]
                      {d.selectedUnit !== d.initialUnit /*&& d.val !== 0*/ && (
                        <>
                          &nbsp; =&gt; &nbsp; {props.unitArray[index + 1].name}{" "}
                          = {d.form} &#8226; {d.multiForm} = {d.multiResultForm}{" "}
                          [{d.initialUnit}]
                        </>
                      )}
                    </div>
                  </li>
                );
              })}

              {/* <div className="ltxPnl">
                <Latex>{props.formula}</Latex>
              </div> */}

              <div className="divForm">
                <Latex>{props.dynamicUsFormula}</Latex>
              </div>
            </>
          )}
              <ButtonSeeFullCalc 
 buttonAttr={props.buttonAttr}
 handleShowCalc={props.handleShowCalc}
/>
        </>
      )}
    </>
  );
};

export default FullCalcPanel;
