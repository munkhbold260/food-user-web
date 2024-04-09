import React, { useContext, createContext, useState } from "react";

const NumberContext = createContext();

export const UseNumber = () => {
  return useContext(NumberContext);
};

const NumberProvider = ({ children }) => {
  const cartFoodList = [];
  const [cartFood, setCartFood] = useState(cartFoodList);
  return (
    <NumberContext.Provider value={{ cartFood, setCartFood }}>
      {children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
