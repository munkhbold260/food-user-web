import {
  Container,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { HeadaerLogin, HeaderLogo, HeaderSags, HeaderSearch } from ".";

const Header = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ bgcolor: theme.palette.primary.light }}>
      <Container maxWidth={"lg"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} gap={"8px"} alignItems={"center"}>
            <HeaderLogo />
            <Link href="./" underline="none" sx={{ color: "black" }}>
              <Typography
                color={"black"}
                // variant="subtitle1"
                fontFamily={"SF Pro Text"}
              >
                НҮҮР
              </Typography>
            </Link>
            <Link
              href="./blog"
              px={"16px"}
              underline="none"
              sx={{ color: "black" }}
            >
              <Typography color={"black"} variant="subtitle2">
                ХООЛНЫ ЦЭС
              </Typography>
            </Link>
            <Link
              href="/delivery-area"
              px={"16px"}
              underline="none"
              sx={{ color: "black" }}
            >
              <Typography color={"black"}> ХҮРГЭЛТИЙН БҮС</Typography>
            </Link>
          </Stack>
          <Stack gap={2} direction={"row"} alignItems={"center"}>
            <Stack direction={"row"} alignItems={"center"}>
              <HeaderSearch />
              <TextField size="small" color="primary" placeholder="Search" />
            </Stack>
            <Stack
              px={"16px"}
              gap={"8px"}
              direction={"row"}
              alignItems={"center"}
            >
              <HeaderSags />
              <Link underline="none">
                <Typography color={"black"}> Сагс</Typography>
              </Link>
            </Stack>
            <Stack
              px={"16px"}
              gap={"8px"}
              direction={"row"}
              alignItems={"center"}
            >
              <HeadaerLogin />
              <Link href="/login" underline="none">
                <Typography color={"black"} fontFamily={"sf pro text"}>
                  {" "}
                  Нэвтрэх
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
