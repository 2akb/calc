"use client";

import { useContext } from "react";
import { AppContext } from "./SearchContext.js";
import AppProvider from "./SearchContext.js";
import Link from "next/link.js";
import { records } from "./base.js";
import "./Navigation3.css";

const SubSearchResult = () => {
  const { recentResultsArr1, handleBlur1 } = useContext(AppContext);

  return (
    <span
      onClick={handleBlur1} // TO NIE BLUR ale CLICK
    >
      <ul className="mainmenu">
        <AppProvider>
          {/* {recentResultsArr1.map((elem, index) => (
            <li style={{ listStyle: "none" }} key={index}>
              <Link href={records[elem].navTo}>{records[elem].title}</Link>
            </li>
          ))} */}
          {/* <div main> */}

          {recentResultsArr1.map((elem, index) => (
            <li style={{ listStyle: "none" }} key={index}>
              <Link href={records[elem].navTo}>{records[elem].title}</Link>
            </li>
          ))}

          {/* </div> */}
        </AppProvider>
      </ul>

      {/* <h2>End of result</h2> */}
    </span>
  );
};

export default SubSearchResult;
