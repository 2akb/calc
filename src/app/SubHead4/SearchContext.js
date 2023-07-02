"use client";

import React, { createContext, useState, useRef, useEffect } from "react";
import _ from "lodash";
import { records } from "./base";
// możesz też zastosować do funkcji changeTabElement metodę splice();
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const [oalceholder1, setOalceholder1] = useState();
  const [placeholder1, setPlaceholder1] = useState(" 🔎︎ find your calc.");
  const [searchString1, setSearchString1] = useState("");
  const textInputRef1 = useRef(null);

  // const [textInputRef1, setTextInputRef1] = useState(null);

  const [recordsTagsArr1, setRecordsTagsArr1] = useState([]);
  const [recentResultsArr1, setRecentResultsArr1] = useState([]); // to jest wynik, który
  //... później zostanie przekazany do wyników czyli do SubSearchResult
  const [recentSearchWordsArr1, setRecentSearchWordsArr1] = useState([]);
  const [recordsLength1, setRecordsLength1] = useState(0);
  const [cwiczebny, setCwiczebny] = useState(4);
  // const [idid, setIdid] = useState("idframe");

  useEffect(() => {
    setRecordsLength1(records.length);
    let recordsTagsArr2 = [];
    for (let i = 0; i < records.length; i++) {
      recordsTagsArr2.push(_.words(records[i].tags));
    }
    setRecordsTagsArr1(recordsTagsArr2);
    // textInputRef1.current.focus(); // nie działa - to funkcja  stąd moze eksporuj funkcję ?
  }, []);

  let multiSearchStringArray = [];

  const handleBlur1 = () => {
    // alert("BLUR z SearchContext !!!!");
    //  e.stopPropagation();
    setSearchString1("");
    setRecentResultsArr1([]);
  }; // po wyjściu zerujemy tablicę wyszukanych

  const handleSearch1 = (e) => {
    const _search = e.target.value;

    const search = _search.replace(
      /[!~&\/\\\|#,^\[\]()$~%.'":*?<>{}+-=`_]/g,
      ""
    );
    setSearchString1(search.replace(/\s{3,}/g, "   "));
    multiSearchStringArray = _.words(search.replace(/\s{3,}/g, "   "));

    if (_search === "") {
      setRecentResultsArr1([]);
    }

    let pf = 1;
    if (
      recentSearchWordsArr1[recentSearchWordsArr1.length - 1] ===
      multiSearchStringArray[multiSearchStringArray.length - 1]
    ) {
      pf *= 1;
    } else {
      pf *= 0;
    }

    let pf2 = 1;
    for (let i = 0; i < multiSearchStringArray.length - 1; i++) {
      if (recentSearchWordsArr1[i] === multiSearchStringArray[i]) {
        pf2 *= 1;
      } else {
        pf2 *= 0;
      }
    }

    setRecentSearchWordsArr1(multiSearchStringArray);

    let globalFit = [];

    ///////////////////////////////////////////////////////////////

    if ((pf === 0 && pf2 === 1) || (pf === 1 && pf2 === 0)) {
      for (let i = 0; i < recordsLength1; i++) {
        globalFit.push(1);
      }

      for (let k = 0; k < multiSearchStringArray.length; k++) {
        let localFit = []; // z każdym razem zerujemy tablicę, bo sprawdzamy następne słowo

        for (let i = 0; i < recordsLength1; i++) {
          localFit.push(0);
        }

        for (let i = 0; i < recordsLength1; i++) {
          if (globalFit[i] === 1) {
            for (let j = 0; j < recordsTagsArr1[i].length; j++) {
              if (
                recordsTagsArr1[i][j]
                  .toLowerCase()
                  .match(multiSearchStringArray[k].toLowerCase()) ||
                multiSearchStringArray[k]
                  .toLowerCase()
                  .match(recordsTagsArr1[i][j].toLowerCase())
              ) {
                localFit[i] = 1;
              }
            }
          }
        }

        for (let i = 0; i < recordsLength1; i++) {
          globalFit[i] = globalFit[i] * localFit[i];
        }

        let indexes = [];

        globalFit.forEach((element, index) => {
          if (element > 0) {
            indexes.push(index);
          }
        });
        setRecentResultsArr1(indexes);
      }
    }
    // _search = "";
    //////////////////////////////////////////////////////////////
  };

  const onOn = () => {
    setCwiczebny(cwiczebny + 5);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          searchString1,
          textInputRef1,
          recordsTagsArr1,
          setRecordsTagsArr1,
          recentResultsArr1,
          setRecentResultsArr1,
          recentSearchWordsArr1,
          setRecentSearchWordsArr1,
          recordsLength1,
          setRecordsLength1,
          handleSearch1,
          handleBlur1,
          // ****************************
          cwiczebny,
          onOn,
          // handleOnFocus,
          placeholder1,
          // idid,
          // handleBlur2,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppProvider;
