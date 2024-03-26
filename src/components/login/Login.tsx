import { Visibility, VisibilityOff } from "@mui/icons-material";

import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const Newtreh = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log("pressed login button", email, password);
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
        <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
          <Typography>Нууц үг </Typography>
          <OutlinedInput
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="password"
          />
        </FormControl>
        <Link underline="none" href="/forgot-pass">
          <Typography textAlign={"end"} color={"black"}>
            Нууц үг сэргээх
          </Typography>
        </Link>

        <Button onClick={handleLogin} variant="outlined">
          Нэвтрэх
        </Button>
        <Typography>Эсвэл</Typography>
        <Button href="/sign-up" onClick={handleLogin} variant="outlined">
          Бүртгүүлэх
        </Button>
      </Stack>
    </Container>
  );
};
