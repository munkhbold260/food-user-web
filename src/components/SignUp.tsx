import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  //   Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  Box,
  Button,
} from "@mui/material";

import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      rePassword: data.get("rePassword"),
    });
  };
  return (
    <Container>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        margin={"auto"}
        maxWidth={"384px"}
        gap={"16px"}
      >
        <FormControl sx={{ width: "384px" }}>
          <Typography>Нэр </Typography>
          <TextField
            name="name"
            id="outlined-basic"
            placeholder="Нэрээ оруулна уу"
            variant="outlined"
          />
        </FormControl>
        <FormControl sx={{ width: "384px" }}>
          <Typography>Имэйл </Typography>
          <TextField
            name="email"
            id="outlined-basic"
            placeholder="Имэйл хаягаа оруулна уу"
            variant="outlined"
          />
        </FormControl>
        <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
          <Typography>Нууц үг </Typography>
          <OutlinedInput
            name="password"
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
        <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
          <Typography>Нууц үг давтах</Typography>
          <OutlinedInput
            name="rePassword"
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
        </FormControl>{" "}
        <Button type="submit" variant="outlined">
          Бүртгүүлэх
        </Button>
      </Stack>
    </Container>
  );
};

export default SignUp;
