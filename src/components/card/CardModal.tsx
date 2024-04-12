import {
  Box,
  Button,
  CardMedia,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
// import { SubButton } from "../logos/SubButton";
// import { PlusButton } from "../logos/PlusButton";
import { Dispatch, SetStateAction } from "react";
// import { SubButton } from "../logos/SubButton";
// import { PlusButton } from "../logos/PlusButton";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "917px",
  outerHeight: "500px",
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

const CardModal = ({
  opener,
  handleClose,
  data,
}: {
  opener: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  data: dataType;
}) => {
  // const { foodCount, setFoodCount } = UseNumber();

  // const handleIncrease = () => {
  //   setFoodCount(foodCount + 1);
  // };

  // const handleDecrease = () => {
  //   setFoodCount(foodCount - 1);
  // };
  // const foodCartCount: FoodCartCount = [];

  const handlePush = () => {
    // console.log(
    //   "foodname",
    //   data.foodName,
    //   "food price",
    //   data.price - (data.price / 100) * data.sale,
    //   "food count",
    //   // foodCount,
    //   // "food id",
    //   data.id
    // );
    handleClose(false);
  };

  return (
    <Modal
      open={opener}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack direction={"row"} padding={"32px"} gap={"33px"} sx={style}>
        <Box width={"500px"} height={"500px"}>
          <CardMedia
            component={"img"}
            image={data.imagePath}
            width={"500px"}
            height={"500px"}
          />
        </Box>
        <Stack width={"384px"} height={"398"} gap={"32px"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h6" component="h2">
              {data.foodName}
            </Typography>
            <Button
              onClick={() => {
                handleClose(false);
              }}
            >
              x
            </Button>
          </Stack>

          <Typography>
            {data.price - (data.price / 100) * data.sale} ₮
          </Typography>
          <Stack gap={"12px"}>
            <Typography variant="h6">Орц</Typography>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              bgcolor={"#F6F6F6"}
              color={"#767676"}
              height={"38px"}
              borderRadius={"8px"}
            >
              {/* {data.ingredients} */}
              <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                {data.ingredients.map((a, id) => {
                  return <Typography key={id}>{a},</Typography>;
                })}
              </Stack>
            </Stack>
          </Stack>

          <Typography variant="h6">Тоо</Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* <Button onClick={handleDecrease}>
              <SubButton />
            </Button>
            <Typography>{foodCount}</Typography>
            <Button onClick={handleIncrease}>
              <PlusButton />
            </Button> */}
          </Stack>
          <Button onClick={handlePush}>Сагслах</Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default CardModal;
