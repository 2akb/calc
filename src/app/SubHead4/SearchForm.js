// "use client";
import React, { useContext } from "react";
import { AppContext } from "./SearchContext";

const Bucik = () => {
  const {
    /*textInputRef1,*/ searchString1,
    handleSearch1,
    // handleBlur2,
    textInputRef1,
    // handleOnFocus,
    placeholder1,
    // idid,
  } = useContext(AppContext);

  return (
    <>
      {/* <div onBlur={()=>{alert("onBlur z SubHead4/SearchForm")}}> */}
      {/* <h2 style={{ color: "blue" }}>Search form</h2> */}
      {/* <form>  nie wiem po co ten form przełamuje linię */}
      <input
        id="lfname"
        // id={idid}
        name="fname"
        type="text"
        value={searchString1}
        ref={textInputRef1}
        onChange={handleSearch1}
        // onBlur={handleBlur2}
        // placeholder=" 🔎︎ find your calc."
        placeholder={placeholder1}
      />
      {/* </form> */}
    </>
  );
};

export default Bucik;
