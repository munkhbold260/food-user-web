import { Link, Stack, TextField, Typography } from "@mui/material";
import { HeadaerLogin, HeaderLogo, HeaderSags } from "./logos/header";
import { HeaderSearch } from "./logos/header/HeaderSearch";

const Header = () => {
  return (
    <Stack
      margin={"auto"}
      sx={{ maxWidth: "1258px" }}
      height={"57px"}
      direction={"row"}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"} gap={"8px"} alignItems={"center"}>
        <HeaderLogo />
        <Link href="./" underline="none" sx={{ color: "black" }}>
          <Typography color={"black"}>НҮҮР</Typography>
        </Link>
        <Link
          href="./blog"
          px={"16px"}
          underline="none"
          sx={{ color: "black" }}
        >
          <Typography color={"black"}> ХООЛНЫ ЦЭС </Typography>
        </Link>
        <Link px={"16px"} underline="none" sx={{ color: "black" }}>
          <Typography color={"black"}> ХҮРГЭЛТИЙН БҮС</Typography>
        </Link>
      </Stack>
      <Stack gap={2} direction={"row"} alignItems={"center"}>
        <Stack direction={"row"} alignItems={"center"}>
          <HeaderSearch />
          <TextField size="small" color="primary" placeholder="Search" />
        </Stack>
        <Stack px={"16px"} gap={"8px"} direction={"row"} alignItems={"center"}>
          <HeaderSags />
          <Link underline="none">
            <Typography color={"black"}> Сагс</Typography>
          </Link>
        </Stack>
        <Stack px={"16px"} gap={"8px"} direction={"row"} alignItems={"center"}>
          <HeadaerLogin />
          <Link underline="none">
            <Typography color={"black"}> Нэвтрэх</Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
