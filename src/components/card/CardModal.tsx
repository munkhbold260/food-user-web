import {
  Box,
  Button,
  CardMedia,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { SubButton } from "../logos/SubButton";
import { PlusButton } from "../logos/PlusButton";
import { Dispatch, SetStateAction, useState } from "react";

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
  open,
  handleClose,
  data,
}: {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  data: dataType;
}) => {
  const [count, setCount] = useState<number>(1);
  const handleIncrease = () => {
    setCount(count + 1);
    console.log("handle increasee working");
  };
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }

    console.log("handle Deccreasee working");
  };

  return (
    <Modal
      open={open}
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
          <Typography variant="h6" component="h2">
            {data.foodName}
          </Typography>
          <Typography>{data.price} ₮</Typography>
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
            <Button onClick={handleDecrease}>
              <SubButton />
            </Button>
            <Typography>{count}</Typography>
            <Button onClick={handleIncrease}>
              <PlusButton />
            </Button>
          </Stack>
          <Button>Сагслах</Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default CardModal;
