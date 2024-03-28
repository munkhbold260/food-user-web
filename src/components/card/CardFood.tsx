import {
  Box,
  CardActionArea,
  CardMedia,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("daaataaa", data);
  return (
    <Stack width={"256px"} height={"282px"}>
      <CardActionArea onClick={handleOpen}>
        <Stack position={"relative"}>
          <CardMedia
            sx={{ borderRadius: "16px" }}
            component="img"
            height="186"
            image={data.imagePath}
          />
        </Stack>
        <Stack>
          <Typography>{data.foodName}</Typography>
          <Stack gap={"20px"} direction="row">
            <Typography>{data.price - data.price * 0.1}₮</Typography>
            <Typography color={"#18B951"}>{data.price}₮</Typography>
            <Stack>{data.sale}%</Stack>
          </Stack>

          <Typography>{data.category}</Typography>
        </Stack>
      </CardActionArea>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia component={"img"} image={data.imagePath} />
          <Typography variant="h6" component="h2">
            {data.foodName}
          </Typography>
          <Typography sx={{ mt: 2 }}>{data.price}"₮"</Typography>
          <Typography sx={{ mt: 2 }}>{data.ingredients}</Typography>
        </Box>
      </Modal>
    </Stack>
  );
};

export default CardFood;
