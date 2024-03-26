import * as React from "react";

import { Stack, Link, Typography } from "@mui/material";
import { FooterFb, FooterInsta, FooterLogo, FooterX } from ".";

const Footer = () => {
  return (
    <Stack height={"545px"} bgcolor={"#18B951"} alignItems={"center"}>
      <Stack
        maxWidth={"1200px"}
        height={545}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"40px"}
      >
        <Stack>
          <FooterLogo />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          height={19}
        >
          <Link underline="none" href="./">
            <Typography color={"white"}>Нүүр</Typography>
          </Link>
          <Link color={"white"} underline="none" href="./blog">
            <Typography color={"white"}> Холбоо барих</Typography>
          </Link>
          <Link color={"white"} underline="none">
            <Typography color={"white"}> Хоолны цэс</Typography>
          </Link>
          <Link color={"white"} underline="none">
            <Typography color={"white"}> Үйлчилгээний нөхцөл</Typography>
          </Link>
          <Link href="/delivery-area" color={"white"} underline="none">
            <Typography color={"white"}> Хүргэлтийн бүс</Typography>
          </Link>
          <Link color={"white"} underline="none">
            <Typography color={"white"}> Нууцлалын бодлого</Typography>
          </Link>
        </Stack>
        <Stack direction={"row"} gap={"18px"} alignItems={"center"}>
          <FooterFb />
          <FooterInsta />
          <FooterX />
        </Stack>
        <Stack border={0.1} borderColor={"white"} width={1200}></Stack>
        <Stack alignItems={"center"}>
          <Typography color={"white"}>© 2024 Pinecone Foods LLC </Typography>
          <Typography color={"white"}>
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
