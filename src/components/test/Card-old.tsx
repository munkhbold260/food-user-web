import { Box, Card, CardActionArea, CardContent } from "@mui/material";
import { CardMedia, Modal, Stack, Typography } from "@mui/material";
import * as React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

const CardFood = ({ data }: { data: dataType[] }) => {
  const categories = ["Main Dish", "Salads", "Breakfast", "Dessert"];
  const monCat = ["Үндсэн хоол", "Салад ба зууш", "Өглөөний хоол", "Амттан"];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack margin={"auto"} gap={"80px"} width={"1200px"} paddingTop={"50px"}>
      {monCat.map((a) => {
        return a;
      })}
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
                        <CardActionArea onClick={handleOpen}>
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
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            foodName
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            price
                          </Typography>
                        </Box>
                      </Modal>
                      {/* <Input type="file" /> */}
                    </Box>
                  );
                })}
            </Stack>
          </Stack>
        );
      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            foodName
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            price
          </Typography>
        </Box>
      </Modal>
    </Stack>
  );
};

export default CardFood;
