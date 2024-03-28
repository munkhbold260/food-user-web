import { Stack } from "@mui/material";

import dummy from "@/utils/dummy.json";
import CardFood from "./card/CardFood";

const HomePage = () => {
  // fetch("./dummy.json")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // const dummy = data;
  return (
    <Stack>
      <Stack>
        <CardFood data={dummy} />
      </Stack>
    </Stack>
  );
};

export default HomePage;
