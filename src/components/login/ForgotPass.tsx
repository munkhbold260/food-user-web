import {
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const ForgotPass = () => {
  const [email, setEmail] = useState("");

  function handleLogin() {
    console.log("pressed login button", email);
  }
  return (
    <Container>
      <Stack margin={"auto"} maxWidth={"384px"} gap={"16px"}>
        <FormControl sx={{ width: "384px" }}>
          <Typography>Имэйл </Typography>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="outlined-basic"
            placeholder="Имэйл хаягаа оруулна уу"
            variant="outlined"
          />
        </FormControl>

        <Button onClick={handleLogin} variant="outlined">
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Container>
  );
};
