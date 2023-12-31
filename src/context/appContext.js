import React, { useState, createContext, useEffect } from "react";
import { fetchConfigVariable } from "../utils/handleConfigVars";

export const AppContext = createContext();
export const AppProvider = (props) => {
  const REACT_APP_general = fetchConfigVariable("REACT_APP_general");
  const getCurrentPageIndex = () => {
    return setPageLocator(parseInt(localStorage.getItem("PageLocator"), 10));
  };
  const getCasesCount = () => {
    let casesArray = JSON.parse(localStorage.getItem("CaseOrder"));
    return casesArray ? casesArray.length : 0;
  };

  const [PageLocator, setPageLocator] = useState(
    parseInt(localStorage.getItem("PageLocator"), 10) || 0
  );
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [casesCount, setCasesCount] = useState(0);
  const [currentDemonstrationPageIndex, setCurrentDemonstrationPageIndex] = useState(0);

  const rootDirectory = fetchConfigVariable("REACT_APP_FIREBASE_ROOT_DIRECTORY");

  useEffect(() => {
    setPageLocator(getCurrentPageIndex);
    PageLocator && setPageLocator(PageLocator);
  }, [setPageLocator, PageLocator]);

  const value = {
    disableNextButton,
    setDisableNextButton,
    getCurrentPageIndex,
    PageLocator,
    setPageLocator,
    rootDirectory,
    casesCount,
    REACT_APP_general,
    setCasesCount,
    getCasesCount,
    currentDemonstrationPageIndex,
    setCurrentDemonstrationPageIndex,
  };
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};
