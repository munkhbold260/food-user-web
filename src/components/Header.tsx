import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div">
          Header
        </Typography>
      </Toolbar>
      {/* <Toolbar id="back-to-top-anchor" /> */}
    </AppBar>
  );
};

export default Header;
