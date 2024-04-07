import { Box, Container, Stack, Typography } from "@mui/material";
import CardFood from "./card/CardFood";
import { GreenStar } from "./logos/GreenStar";
import Image from "next/image";
import { useEffect, useState } from "react";

type DataType = {
  id: number;
  category: string;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
};

const HomePage = () => {
  const categories = ["Main Dish", "Salads", "Breakfast", "Dessert"];

  const [dummy, setDummy] = useState<DataType[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./dummy.json");
        const data = await response.json();
        setDummy(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("dummy", dummy);
  return (
    <Stack marginTop={"60px"}>
      <Box bgcolor={"#18BA51"} sx={{ backgroundImage: "url(/footerBg.svg)" }}>
        <Container>
          <Stack
            justifyContent={"space-between"}
            direction={"row"}
            alignItems={"center"}
            width={"100%"}
            height={"788px"}
          >
            <Stack width={"384px"} color={"white"} gap={"23px"}>
              <Typography fontSize={"55px"} fontWeight={600} lineHeight={"90%"}>
                Pinecone <br /> Food delivery
              </Typography>
              <Box border={1} borderColor={"white"}></Box>
              <Typography
                fontSize={"22px"}
                fontWeight={700}
                lineHeight={"120%"}
                letterSpacing={"0.22px"}
              >
                Horem ipsum dolor sit amet, consectetur adipiscing elit. Horem
                ipsum dolor sit amet, consectetur adipiscing elit. Horem ipsum
                Horem ipsum dolor sit amet, consectetur adipiscing elit. dolor
                sit amet, consectetur adipiscing elit.
              </Typography>
            </Stack>
            <Box position="relative" right={140}>
              <Image
                src="/foodIcon1.png"
                width={443}
                height={438}
                alt="Picture of the food"
                // layout="fixed"
              />
              <Image
                src="/foodIcon2.png"
                width={313}
                height={313}
                alt="Picture of the food"
                // layout="fixed"
                style={{ position: "absolute", top: 100, left: 270 }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Stack gap={"30px"}>
        <Stack height={"344px"} width={"1200px"} margin={"auto"}>
          <Stack direction={"row"}>
            <GreenStar />
            <Typography>Saled</Typography>
          </Stack>
          <Stack direction={"row"} gap={"24px"} height={"256px"}>
            {dummy
              ?.filter((saled) => saled.sale > 0)
              .sort((a, b) => b.sale - a.sale)
              .slice(0, 4)
              .map((a, id) => {
                return <CardFood key={id} data={a} />;
              })}
          </Stack>
        </Stack>
        {categories.map((a, id) => {
          return (
            <Stack key={id} height={"344px"} width={"1200px"} margin={"auto"}>
              <Stack direction={"row"}>
                <GreenStar />
                <Typography>{a}</Typography>
              </Stack>
              <Stack direction={"row"} gap={"24px"} height={"256px"}>
                {dummy
                  ?.filter((e) => e.category == a)
                  .slice(0, 4)
                  .map((b, id) => {
                    return <CardFood key={id} data={b} />;
                  })}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default HomePage;
