import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
    </Box>
  );
};

export default Header;
