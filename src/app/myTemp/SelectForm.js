import React from "react";
import "./CalcCss.css";

const SelectForm = (props) => {
  return (
    <div>
      {/* <p>hjhg</p> */}
      <select
        key={props.index1}
        className={"blockOfForm_SelectForm"}
        onChange={props.onSelectChange}
      >
        {props.array[props.index1].map((el) => (
          // musiałem wprowadzić "k" bo taki sam text się pojawiał 2x (czas)
          <option key={el.k} value={el.value} text={el.text}>
            {el.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
