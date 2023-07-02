import { useState } from "react";
//import NumberFormat from "react-number-format"; // https://codepen.io/s-yadav/pen/bpKNMa  // ??
import { NumericFormat } from "react-number-format";
//https://github.com/s-yadav/react-number-format/blob/master/documentation/v4.md

// https://s-yadav.github.io/react-number-format/
import { mwPrettyFloat } from "./mwPrettyFloat";
import ButtonChangeUnit from "./ButtonChangeUnit";
import { widthValueCap } from "./valueHandlers";
import SelectForm from "./SelectForm";

import "./CalcCss.css";

const InsertDataPanel = (props) => {
  const [rowNumber, setRowNumber] = useState();

  const selectClickUs = (e) => {
    const newArr = props.usArray.map((some, index) => {
      if (index === rowNumber) {
        const temp0 = e.target.value.replaceAll(",", "");
        const temp = parseFloat(temp0); // multi
        const temp_ = mwPrettyFloat(temp0, 1); //  multiForm
        const temp1 = temp * some.val; // multiResult
        return {
          ...some,
          multi: temp,
          multiForm: temp_,
          selectedUnit: e.target[e.target.selectedIndex].text, // selectedUnit
          multiResult: temp1,
          multiResultForm: mwPrettyFloat(temp1, 1),
        };
      }
      return some;
    });
    props.setUsArray(newArr);
  };

  const selectClickSi = (e) => {
    let newArr = props.siArray.map((some, index) => {
      if (index === rowNumber) {
        const temp0 = e.target.value.replaceAll(",", "");
        const temp = parseFloat(temp0); // multi
        const temp_ = mwPrettyFloat(temp0, 1); //  multiForm
        const temp1 = temp * some.val; // multiResult

        return {
          ...some,
          multi: temp,
          multiForm: temp_,
          selectedUnit: e.target[e.target.selectedIndex].text, // selectedUnit
          multiResult: temp1,
          multiResultForm: mwPrettyFloat(temp1, 1),
        };
      }
      return some;
    });
    props.setSiArray(newArr);
  };

  

  return (
    <>
      {/* <h1>Inserta Data Panel 3+</h1> */}
      <h2 className="calculateInvit ">Go ahead - calculate it ...</h2>



      <div className="allFormDiv2">

      <div className="titleConteiner ">
          <div className="insertDataTitle ">
            <h2>INSERT DATA PANEL</h2>{" "}
          </div>
        </div>
      <div className="blockOfForm_element2">
          <div className="blockOfForm_symbol21">actual unit sys.:</div>
          {props.siUnits ? (
            <div className="blockOfForm_NumFormat221 ">
              <h3>SI</h3>
            </div>
          ) : (
            <>
              <div className="blockOfForm_NumFormat221 ">
                <h3>US</h3>{" "}
              </div>
            </>
          )}
          <div className="divUS3">
            <ButtonChangeUnit
              handleUnits={props.handleUnits}
              unitButtAttr={props.unitButtAttr}
            />
          </div>
        </div>
        <div className="blockOfForm_element2">


          <div className="blockOfForm_symbol22">S</div>
          <div className="blockOfForm_NumFormat22">insert value &#10549; </div>
          <div className="blockOfForm_NumFormat223">change unit &#10549; </div>
        </div>

        {props.siArray.map((value, index) => {
          // to value musi zostać pomimo podkreślenia
          return (
            //  <div  className="blockOfForm_element2">gfhghf</div>

            <span
              key={index}
              className="blockOfForm_element2"
              onFocus={() => {
                // onFocus bo musi wyłapywać od samego początku
                // onFocus bo onClick pominie TAB
                setRowNumber(index);
              }}
            >
              <div className="blockOfForm_symbol2">
                <p>{props.unitArray[index + 1].name} =</p>
              </div>
              {/* -------------------------------------------- */}
              <NumericFormat
                className="blockOfForm_NumFormat2"
                placeholder={
                  `${props.unitArray[index + 1].expl}`
                }
                thousandSeparator={`,`}
                decimalSeparator={"."}
                allowNegative={true}
                isAllowed={widthValueCap}
                onValueChange={(values) => {
                  // props.siUnits && (
                  const { formattedValue, floatValue } = values;

                  if (props.siUnits) {
                    let newArr = props.siArray.map((some, index) => {
                      // nie ma znaczenia że to siArray.map bo są sobie równe
                      if (index === rowNumber /* && !isNaN(e.target.value )*/) {
                        return {
                          ...some,
                          val: floatValue,
                          form: formattedValue,
                          multiResult: floatValue * some.multi,
                          multiResultForm: mwPrettyFloat(
                            floatValue * some.multi,
                            1
                          ),
                        };
                      }
                      return some;
                    });
                    props.setSiArray(newArr);
                  } else {
                    let newArr = props.usArray.map((some, index) => {
                      // nie ma znaczenia że to siArray.map bo są sobie równe
                      if (index === rowNumber /* && !isNaN(e.target.value )*/) {
                        return {
                          ...some,
                          val: floatValue,
                          form: formattedValue,
                          multiResult: floatValue * some.multi,
                          multiResultForm: mwPrettyFloat(
                            floatValue * some.multi,
                            1
                          ),
                        };
                      }
                      return some;
                    });
                    props.setUsArray(newArr);
                  }
                }}
              />
              {/* -------------------------------------------- */}
              {props.siUnits ? (
                <SelectForm
                  index1={index}
                  array={props.siUnitArray}
                  onSelectChange={selectClickSi}
                />
              ) : (
                <SelectForm
                  index1={index}
                  array={props.usUnitArray}
                  onSelectChange={selectClickUs}
                />
              )}

              {/* -------------------------------------------- */}
            </span>
          );
        })}
        {/* ************************************************* */}
        {/* NIE WYRZUCAJ - przyda się do kontroli nr wiersza*/}
        {/* ************************************************* */}
        {/* <h4
          style={{ backgroundColor: "rgb(252, 164, 233)", paddingLeft: "15px" }}
        >
          wybrano wiersz nr {rowNumber}
        </h4>
        <h4
      */}
      </div>
    </>
  );
};

export default InsertDataPanel;
