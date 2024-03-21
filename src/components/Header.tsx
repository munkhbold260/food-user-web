import { Button, Container, Stack, TextField } from "@mui/material";
import { HeaderLogo } from "./logos/header/HeaderLogo";
import { Search } from "@mui/icons-material";
import { HeaderSags } from "./logos/header/HeaderSags";
import { HeadaerLogin } from "./logos/header/HeaderLogin";

const Header = () => {
  return (
    <Container>
      <Stack height={"57px"} direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"}>
          <HeaderLogo />
          <Button>НҮҮР</Button>
          <Button>ХООЛНЫ ЦЭС</Button>
          <Button>ХҮРГЭЛТИЙН БҮС</Button>
        </Stack>
        <Stack gap={2} direction={"row"} alignItems={"center"}>
          <Stack direction={"row"} alignItems={"center"}>
            <Search />
            <TextField size="small" color="secondary" placeholder="Search" />
          </Stack>
          <Stack
            width={"102px"}
            px={"16px"}
            direction={"row"}
            alignItems={"center"}
          >
            <HeaderSags />
            Сагс
          </Stack>
          <Stack
            width={"102px"}
            px={"16px"}
            direction={"row"}
            alignItems={"center"}
          >
            <HeadaerLogin /> Нэвтрэх
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Header;

// export default Header;
