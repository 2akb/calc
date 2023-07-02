import "./ControlArrayCss.css";

const ControlArray = (props) => {
  let sysOfUnits = "";
  let arr = [];
  props.siUnits ? (sysOfUnits = "SI") : (sysOfUnits = "US");
  props.siUnits ? (arr = [...props.siArray]) : (arr = [...props.usArray]);

  const seeHide = false;
  // let seeHide = true;

  return (
    <>
      {seeHide && (
        <div className="mainDiv">
          <p className="unitSymb">
            <u>
              <b>{sysOfUnits}</b>
            </u>
          </p>

          <table>
            <thead>
              <tr>
                <th className="th"></th>
                <th className="thSymb"> val </th>
                <th className="thSymb">
                  val <br />
                  form
                </th>
                <th className="thSymb">
                  initial
                  <br />
                  Unit
                </th>
                <th> multi </th>
                <th className="thSymb">
                  multi
                  <br />
                  Form
                </th>
                <th className="thSymb">
                  selected
                  <br />
                  Unit
                </th>
                <th className="thSymb">
                  multi
                  <br />
                  Result
                </th>
                <th className="thSymb">
                  multi <br /> Result
                  <br />
                  Form
                </th>
              </tr>
            </thead>

            {arr.map((i, index) => (
              <tbody key={index}>
                <tr>
                  <td className="td">{props.unitArray[index + 1].name}</td>
                  <td className="tdVal">{String(i.val)}</td>
                  <td className="tdForm">{i.form}</td>
                  <td className="tdUnit">{i.initialUnit}</td>
                  <td className="tdVal">{i.multi}</td>
                  <td className="tdForm">{i.multiForm}</td>
                  <td className="tdUnit">{i.selectedUnit}</td>
                  <td className="tdVal">{i.multiResult}</td>
                  <td className="tdForm">{i.multiResultForm}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </>
  );
};

export default ControlArray;
