import { Card, CardContent, Stack, Typography } from "@mui/material";

type dataType = {
  id: number;
  category: string;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: Array<string>;
  stock: number;
  sale: number;
};

import * as React from "react";
// import CardMedia from "@mui/material/CardMedia";

const CardFood = ({ data }: { data: [dataType] }) => {
  const categories = ["Main Dish", "Salads", "Breakfast", "Dessert"];

  const qwer = categories.map((cat) => {
    return data
      .filter((b) => b.category == cat)
      .map((food) => {
        return food.foodName;
      });
  });
  console.log("qwer", food.foodName);

  // const qwert = categories.map((cat) => {
  //   return data.filter((b) => b.category == cat);
  // });
  // console.log("data", data);
  // console.log("bbbbbbb", qwert);

  // console.log("dataaaaa", filtered);
  // const maindish = data.filter((b) => b.category == "Main Dish");
  // const salads = data.filter((b) => b.category == "Salads");
  // const breakfast = data.filter((b) => b.category == "Breakfast");
  // const dessert = data.filter((b) => b.category == "Dessert");

  return (
    <Stack>
      {categories.map((cat) => {
        {
          data
            .filter((b) => b.category == cat)
            .map((food, id) => {
              return <Stack key={id}>{food.foodName}</Stack>;
            });
        }
      })}
    </Stack>
  );
};

export default CardFood;
//  <Stack>
//     {categories.map((cat, id) => {
//       {
//         data
//           .filter((b) => b.category == cat)
//           .map((food) => {
//             return <Stack key={id}>{food.foodName}</Stack>;
//           });
//       }
//     })}
//   </Stack>
