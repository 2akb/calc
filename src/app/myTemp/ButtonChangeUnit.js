import "./CalcCss.css";

const ButtonChangeUnit = (props) => {
  return (
    <button className="changeUnitsButton" onClick={props.handleUnits}>
      {props.unitButtAttr}
    </button>
  );
};

export default ButtonChangeUnit;
