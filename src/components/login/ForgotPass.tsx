import { Stack } from "@mui/material";
import { StepOne, StepThree, StepTwo } from ".";
import { useState } from "react";

export const ForgotPass = () => {
  const [progress, setProgress] = useState<number>(1);
  const [email, setEmail] = useState<string>("");

  return (
    <Stack>
      {progress == 1 && (
        <StepOne setProgress={setProgress} setEmail={setEmail} />
      )}
      {progress == 2 && <StepTwo setProgress={setProgress} email={email} />}
      {progress == 3 && <StepThree email={email} />}
    </Stack>
  );
};
