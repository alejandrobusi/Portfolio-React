import React, { createContext, useState } from "react";

export const UseSpanishContext = createContext();

export const UseSpanishProvider = (props) => {
  const [useSpanish, setUseSpanish] = useState(false);
  return (
    <UseSpanishContext.Provider value={[useSpanish, setUseSpanish]}>
      {props.children}
    </UseSpanishContext.Provider>
  );
};

