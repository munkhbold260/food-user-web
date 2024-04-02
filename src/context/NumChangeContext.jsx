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
  const [foodCount, setFoodCount] = useState(1);
  return (
    <NumberContext.Provider value={{ foodCount, setFoodCount }}>
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
