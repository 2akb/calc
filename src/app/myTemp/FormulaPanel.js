import ButtonChangeUnit from "./ButtonChangeUnit";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import "./CalcCss.css";

const FormulaPanel = (props) => {
  return (
    <>
      <div className="title">
        <h2> {props.calcSubject}</h2> <span>is expressed by the formula:</span>
      </div>

      {/* <div className="ltxPnlBorder" style={{ width: props.formWidth }}>
        <Latex>{props.formula}</Latex>
      </div> */}
      {props.siUnits ? (
        <div className="divForm">
          <Latex>{props.formulaSi}</Latex>
        </div>
      ) : (
        <div className="divForm">
          <Latex>{props.formulaUs}</Latex>
        </div>
      )}
      <div className="formulaWhereBlock">
        <p>where:</p>
        {/* <div> */}
        <ButtonChangeUnit
          handleUnits={props.handleUnits}
          unitButtAttr={props.unitButtAttr}
        />
        {/* </div> */}
      </div>
      {/* ********************************************* */}
      {/* ********************************************* */}
      {/* ********************************************* */}
      {/* <div className="allFormDiv2"> */}
      <div>
        {props.siUnits
          ? props.unitArray.map((d, index) => {
              return (
                <li style={{ listStyle: "none" }} key={index}>
                  <div className="flex-container1">
                    <div>
                      <p>{d.name}</p>
                    </div>
                    <p>
                      - &nbsp; {d.expl}
                      {d.si !== false && <span> [{d.si}] </span>}
                    </p>
                  </div>
                </li>
              );
            })
          : // {/* ********************************************* */}
            // {/* ********************************************* */}
            props.unitArray.map((d, index) => {
              return (
                <li style={{ listStyle: "none" }} key={index}>
                  <div className="flex-container1 ">
                    <div>{d.name}</div>
                    <p>
                      - &nbsp; {d.expl}{d.us !== false && <span> [{d.us}] </span>}
                    </p>
                  </div>
                </li>
              );
            })}
      </div>

      {/* ********************************************* */}
      {/* ********************************************* */}
      {/* ********************************************* */}
    </>
  );
};

export default FormulaPanel;

// https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_flex-wrap_nowrap8
// wpisz po 1. div'ie <p>coś tu długiego wpisz</p>
