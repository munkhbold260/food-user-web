import { Box, Stack, Container, Typography, Button } from "@mui/material";
import * as React from "react";
import {
  FormControl,
  useFormControlContext,
  Input,
  inputClasses,
} from "@mui/base";

import { styled } from "@mui/system";
import clsx from "clsx";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LogIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Container
      sx={{
        width: "448px",
        height: "649px",
        paddingTop: "100px",
        justifyContent: "center",
      }}
    >
      <Stack
        width="384px"
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
      >
        <Box>Нэвтрэх</Box>
        <Stack gap={2}>
          <FormControl defaultValue="" required>
            <Label>Имэйл </Label>

            <StyledInput placeholder="Имэйл хаягаа оруулна уу" />
          </FormControl>

          <Stack>
            <FormControl defaultValue="" required>
              <Label>Нууц үг</Label>
              <StyledInput
                placeholder="Нууц үг"
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
              />
            </FormControl>
            <Stack alignItems={"end"}>
              <Typography
                color={"gray"}
                fontWeight={"400"}
                lineHeight={"normal"}
                fontSize={"14px"}
              >
                Нууц үг сэргээх
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={"324px"} gap={4}>
          <Stack bgcolor={"#18BA51"} borderRadius={"4px"}>
            <Button>
              <Typography color={"white"}>Нэвтрэх</Typography>
            </Button>
          </Stack>
          <Typography textAlign={"center"}>Эсвэл</Typography>
          <Stack
            bgcolor={"#FFFFFF"}
            borderRadius={"4px"}
            border={"1px #18BA51 solid"}
          >
            <Button>
              <Typography color={"#272727"}>Бүртгүүлэх</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
const StyledInput = styled(Input)(
  ({ theme }) => `
  
    .${inputClasses.input} {
      width: 320px;
      font-size: 0.875rem;
      padding: 8px 12px;
      border-radius: 4px;
  
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[700] : grey[200]
      };
      box-shadow: 0px 2px 2px ${
        theme.palette.mode === "dark" ? grey[900] : grey[50]
      };
  
      &:hover {
        border-color: ${blue[400]};
      }
  
      &:focus {
        outline: 0;
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${
          theme.palette.mode === "dark" ? blue[600] : blue[200]
        };
      }
    }
  `
);
const Label = styled(
  ({
    children,
    className,
  }: {
    children?: React.ReactNode;
    className?: string;
  }) => {
    const formControlContext = useFormControlContext();
    const [dirty, setDirty] = React.useState(false);

    React.useEffect(() => {
      if (formControlContext?.filled) {
        setDirty(true);
      }
    }, [formControlContext]);

    if (formControlContext === undefined) {
      return <>{children}</>;
    }

    const { error, required, filled } = formControlContext;
    const showRequiredError = dirty && required && !filled;

    return (
      <Box
        className={clsx(className, error || showRequiredError ? "invalid" : "")}
      >
        {children}
        {required ? " " : ""}
      </Box>
    );
  }
)`
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

export default LogIn;
