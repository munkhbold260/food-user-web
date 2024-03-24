import * as React from "react";
import { Link, Container, Typography, Stack } from "@mui/material";
import {
  FooterFb,
  FooterInsta,
  FooterLogo,
  FooterX,
} from "@/components/footer";

const Blog = () => {
  return (
    <Container
      sx={{
        height: "600px",
        maxWidth: "2000px",
        bgcolor: "green",
      }}
    >
      <Stack>
        <FooterLogo />
        <Stack
        // direction={"row"}
        // justifyContent={"space-between"}
        // justifyItems={"center"}
        >
          <Link underline="none" href="./" color={"white"}>
            Нүүр
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
          <Link color={"white"} underline="none">
            <Typography color={"white"}> Хүргэлтийн бүс</Typography>
          </Link>
          <Link color={"white"} underline="none">
            <Typography color={"white"}> Нууцлалын бодлого</Typography>
          </Link>
        </Stack>
        <Stack direction={"row"}>
          <FooterFb />
          <FooterInsta />
          <FooterX />
        </Stack>
        <Typography color={"white"} paddingTop={"30px"}>
          © 2024 Pinecone Foods LLC{" "}
        </Typography>
        <Typography color={"white"}>
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Typography>
      </Stack>
    </Container>
  );
};

export default Blog;
