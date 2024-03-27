import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
// import { v4 as uuidv4 } from "uuid";

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
    // const userId = uuidv4();
    const data = new FormData(event.currentTarget);
    const datas = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      // id: userId,
    };

    if (data.get("password") != data.get("rePassword")) {
      alert("email different");
    } else {
      console.log("datas", datas);
    }
  };
  return (
    <Container>
      <Stack
        paddingY={"110px"}
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
            placeholder="Нэрээ оруулна уу"
            variant="outlined"
            required
          />
        </FormControl>
        <FormControl sx={{ width: "384px" }}>
          <Typography>Имэйл </Typography>
          <TextField
            name="email"
            placeholder="Имэйл хаягаа оруулна уу"
            variant="outlined"
            required
          />
        </FormControl>
        <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
          <Typography>Нууц үг </Typography>
          <OutlinedInput
            required
            name="password"
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
            required
            name="rePassword"
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
        <Button type="submit" variant="outlined">
          Бүртгүүлэх
        </Button>
      </Stack>
    </Container>
  );
};

export default SignUp;