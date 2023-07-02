import "./CalcCss.css";

const ButtonSeeFullCalc = (props) => {
  return (
    <button className="changeUnitsButton" onClick={props.handleShowCalc}>
      {props.buttonAttr}
    </button>
  );
};

export default ButtonSeeFullCalc;
