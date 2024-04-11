import { Stack } from "@mui/material";
import { StepOne, StepThree, StepTwo } from ".";
import { useState } from "react";

export const ForgotPass = () => {
  const [progress, setProgress] = useState<number>(1);
  return (
    <Stack>
      {progress == 1 && <StepOne setProgress={setProgress} />}
      {progress == 2 && <StepTwo setProgress={setProgress} />}
      {progress == 3 && <StepThree setProgress={setProgress} />}
    </Stack>
  );
};
