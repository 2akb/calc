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
      <div className="searchResult">
        {/* wyniki wyszukiwania */}
        <AppProvider>
          {recentResultsArr1.map((elem, index) => (
            <Link href={records[elem].navTo} key={index}>
              {records[elem].title}
            </Link>
          ))}
        </AppProvider>
      </div>
      {/* <h2>End of result</h2> */}
    </span>
  );
};

export default SubSearchResult;
