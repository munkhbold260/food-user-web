import { Button, CardMedia, Stack, Typography } from "@mui/material";
import dummy from "@/utils/dummy.json";
import { useState } from "react";
import { SubButton } from "../logos/SubButton";
import { PlusButton } from "../logos/PlusButton";
import { UseNumber } from "@/context/NumChangeContext";

const BagModal = () => {
  const { cartFood } = UseNumber();

  const data = cartFood;

  const [count, setCount] = useState<number>(1);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Stack>
      <Typography variant="h6" margin={"auto"}>
        Таны сагс
      </Typography>
      <Typography variant="h6" margin={"auto"}>
        {data.length}
      </Typography>
      <Stack gap="15px">
        {data.map((a, id) => {
          return (
            <Stack key={id} height={"230px"} bgcolor={"yellow"}>
              {dummy
                .filter((b) => b.id == a.foodId)
                .map((c, id) => {
                  return (
                    <Stack
                      key={id}
                      width={"538px"}
                      height={"230px"}
                      direction={"row"}
                      alignItems={"center"}
                      gap={"16px"}
                      justifyContent={"center"}
                    >
                      <Stack width={"245px"} height={"150px"}>
                        <CardMedia
                          sx={{ borderRadius: "16px" }}
                          component="img"
                          image={c.imagePath}
                        />
                      </Stack>
                      <Stack width={"245px"} height={"150px"}>
                        <Stack>
                          {c.foodName}, {a.foodCount},
                          {c.price - (c.price * c.sale) / 100}
                        </Stack>
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
                      </Stack>
                    </Stack>
                  );
                })}
            </Stack>
          );
        })}
      </Stack>
      <Stack>
        c.price
        {/* {c.foodId} */}
      </Stack>
    </Stack>
  );
};

export default BagModal;
