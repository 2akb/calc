"use client";

import Wynik from "./Wynik";
import AppProvider from "./SearchContext";
import _ from "lodash";
import Bucik from "./SearchForm";

const SubSearch = () => {
  return (
    <span
      // onAbort={() => {
      //   alert(`onAbort z "./SubHead4/SubSearch"`);
      // }}
      // onBlur={() => {
      //   alert(`onBlur z "./SubHead4/SubSearch"`);
      // onLoadStart={}
      // }}
      style={{ /*height: "50px",*/ backgroundColor: "lightgreen" }}
    >
      <AppProvider>
        <Bucik />
        <Wynik />
      </AppProvider>
  
    </span>
  );
};

export default SubSearch;
