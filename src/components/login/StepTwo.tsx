import {
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export const StepTwo = ({
  setProgress,
  email,
}: {
  setProgress: Dispatch<SetStateAction<number>>;
  email: string;
}) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("email", email);
    const form = new FormData(event.currentTarget);
    const login = {
      email: email,
      password: form.get("code"),
    };
    console.log("step two login", login);

    const res = await fetch("http://localhost:4000/api/login", {
      body: JSON.stringify(login),
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data.token) {
      // localStorage.setItem("userToken", data.token);
      // console.log(data.token);
      setProgress(3);
    } else {
      alert("wrong email or password");
    }
  };

  return (
    <Container>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        paddingY={"110px"}
        margin={"auto"}
        maxWidth={"384px"}
        gap={"16px"}
      >
        <Typography variant="h5">Нууц үг сэргээх</Typography>
        <FormControl sx={{ width: "384px" }}>
          <Typography>Нууц үг сэргээх код </Typography>
          <TextField
            name="code"
            id="outlined-basic"
            placeholder="Нууц үг сэргээх код оруулна уу"
            variant="outlined"
          />
        </FormControl>
        <Button type="submit" variant="outlined">
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Container>
  );
};
