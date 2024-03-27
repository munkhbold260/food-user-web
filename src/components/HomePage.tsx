import { Stack } from "@mui/material";

import dummy from "@/utils/dummy.json";
import CardFood from "./card/CardFood";

const HomePage = () => {
  return (
    <Stack>
      <Stack>
        <CardFood data={dummy} />
      </Stack>
    </Stack>
  );
};

export default HomePage;
