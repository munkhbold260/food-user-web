import { Stack, Typography } from "@mui/material";
import CardFood from "./card/CardFood";
import dummy from "../utils/dummy.json";
import { GreenStar } from "./logos/GreenStar";

const HomePage = () => {
  const categories = ["Main Dish", "Salads", "Breakfast", "Dessert"];
  const monCat = ["Үндсэн хоол", "Салад ба зууш", "Өглөөний хоол", "Амттан"];

  return (
    <Stack>
      <Stack gap={"80px"}>
        <Stack height={"344px"} width={"1200px"} margin={"auto"}>
          <Stack direction={"row"}>
            <GreenStar />
            <Typography>Saled</Typography>
          </Stack>
          <Stack direction={"row"} gap={"24px"} height={"256px"}>
            {dummy
              .filter((saled) => saled.sale > 0)
              .sort((a, b) => b.sale - a.sale)
              .slice(0, 4)
              .map((a, id) => {
                return <CardFood key={id} data={a} />;
              })}
          </Stack>
        </Stack>
        {monCat.map((a, id) => {
          return (
            <Stack key={id} height={"344px"} width={"1200px"} margin={"auto"}>
              <Stack direction={"row"}>
                <GreenStar />
                <Typography>{a}</Typography>
              </Stack>
              <Stack direction={"row"} gap={"24px"} height={"256px"}></Stack>
            </Stack>
          );
        })}
        <CardFood data={dummy} />
      </Stack>
    </Stack>
  );
};

export default HomePage;
