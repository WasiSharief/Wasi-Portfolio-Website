import React, { createContext, useState } from "react";

export const HideTopContext = createContext();

export const HideTopProvide = ({ children }) => {
  const [HideTop, setHideTopContext] = useState(false);

  return (
    <HideTopContext.Provider value={{ HideTop, setHideTopContext }}>
      {children}
    </HideTopContext.Provider>
  );
};
