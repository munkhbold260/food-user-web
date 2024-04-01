import React, { useContext, createContext, useState } from "react";

const NumberContext = createContext();
export const UseNumber = () => {
  return useContext(NumberContext);
};

const NumberProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  return (
    <NumberContext.Provider value={{ count, setCount }}>
      {children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
///////////////////////////////
