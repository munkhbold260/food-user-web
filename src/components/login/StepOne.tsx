import {
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const StepOne = ({
  setProgress,
}: {
  setProgress: (value: number) => void;
}) => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = { email: form.get("email") };
    try {
      const response = await fetch("http://localhost:4000/api/reset-pass", {
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",

        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      if (responseData) setProgress(1);
    } catch (err) {
      console.error(err);
      alert("Zuw emailee oruulna uu ");
    }
  }

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
          <Typography>Имэйл </Typography>
          <TextField
            name="email"
            id="outlined-basic"
            placeholder="Имэйл хаягаа оруулна уу"
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
