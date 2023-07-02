import "./CalcCss.css";

import ButtonSeeFullCalc from "./ButtonSeeFullCalc";

const ResultPanel = (props) => {
  return (
    <>
      {!props.seeCalc && (
        <>
          {" "}
          {/* <h1>tylko pelne</h1> */}
          <div className="divFormResult">
            {/* <Latex>{props.dynamicUsFormula}</Latex> */}
            <h3>
            <ButtonSeeFullCalc
            buttonAttr={props.buttonAttr}
            handleShowCalc={props.handleShowCalc}
          />
              <div>
                Result: <br />
                {props.unitArray[0].name} ={" "}
                {props.siUnits ? (
                  <span>
                    {/* {props.resultSi && props.resultSi } - */}
                    {props.resultSi}
                    {props.unitArray[0].si !== false && (
                      <span> [{props.unitArray[0].si}] </span>
                    )}
                    {/* [{props.siUnitArray[0][0].text}] */}
                    {/* {props.resultSi} */}
                  </span>
                ) : (
                  <span>
                    {props.resultUs}

                    {/* [{props.usUnitArray[0][0].text}] */}

                    {props.unitArray[0].us !== false && (
                      <span> [{props.unitArray[0].us}] </span>
                    )}
                    {/* {{props.usUnitArray[0][0].us} !== false && <span> [{d.us}] </span>} */}
                    {/* {props.resultUs} */}
                  </span>
                )}
              </div>
            </h3>
          </div>
          <ButtonSeeFullCalc
            buttonAttr={props.buttonAttr}
            handleShowCalc={props.handleShowCalc}
          />
        </>
      )}
    </>
  );
};

export default ResultPanel;
