import {
  FormControl,
  Input,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";

export const Login = () => {
  // const handleSubmit = (e) => {
  //   const login = {
  //     email: e.target.email.value,
  //   };
  //   console.log("login", login);
  // };
  return (
    <Stack>
      <Typography>Нэвтрэх</Typography>
      {/* <form onSubmit={handleSubmit}> */}
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" name="email" required />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" name="password" required type="password" />
      </FormControl>
      <Input type="submit" value={"Нэвтрэх"} />
      {/* </form> */}
    </Stack>
  );
};

export default Login;
