import React, { useContext, createContext, useState } from "react";

const NumberContext = createContext();
export const UseNumber = () => {
  return useContext(NumberContext);
};

//   id: number;
//   category: string;
//   foodName: string;
//   price: number;
//   imagePath: string;
//   ingredients: Array<string>;
//   stock: number;
//   sale: number;
//   count: number
// };

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
///////////////////////////////
// foodCount = [
//   {
//     foodId: "aksjdgaskd",
//     count: 5,
//   },
//   {
//     foodId: "aksjdgaskd",
//     count: 5,
//   },
//   {
//     foodId: "aksjdgaskd",
//     count: 5,
//   },
// ];
