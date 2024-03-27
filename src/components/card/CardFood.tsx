import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";

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

const CardFood = ({ data }: { data: [dataType] }) => {
  const categories = ["Main Dish", "Salads", "Breakfast", "Dessert"];

  return (
    <Stack margin={"auto"} gap={"80px"} width={"1200px"} paddingTop={"50px"}>
      {categories.map((cat, id) => {
        return (
          <Stack gap={"24px"} key={id}>
            <Stack
              height={"64px"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Typography>{cat}</Typography>
              <Typography>Бүгдийг харах</Typography>
            </Stack>

            <Stack direction={"row"} gap={"24px"}>
              {data
                .filter((food) => food.category == cat)
                .slice(0, 4)
                .map((e, id) => {
                  return (
                    <Box key={id}>
                      <Card key={id} sx={{ width: "286px" }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="186"
                            image={e.imagePath}
                          />
                          <CardContent>
                            <Typography variant="h5" component="div">
                              {e.foodName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {e.price}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>
                  );
                })}
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default CardFood;
