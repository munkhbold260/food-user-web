import { Stack, Typography } from "@mui/material";

type dataType = { title: string; text: string };

const Card = ({ data }: { data: dataType }) => {
  return (
    <Stack width={"265px"} height={"155"}>
      <Typography>{data.title}</Typography>
      <Typography>{data.text}</Typography>
    </Stack>
  );
};

export default Card;
