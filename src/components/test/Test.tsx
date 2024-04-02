import { createContext, Dispatch, SetStateAction, useState } from "react";

interface CustomePropsContext {
  foodList: number;
  setFoodList: Dispatch<SetStateAction<number>>;
}

interface customContextProvideProps {
  children: React.ReactNode;
}

const CustomContext = createContext<CustomePropsContext>({
  foodList: number,
  setFoodList: () => {},
});

const CustomContextProvider = ({ children }: customContextProvideProps) => {
  const [foodList, setFoodList] = useState(1);

  return (
    <CustomContext.Provider
      value={{
        foodList,
        setFoodList,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export { CustomContextProvider };
