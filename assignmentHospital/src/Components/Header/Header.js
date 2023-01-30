import * as React from "react";
import { useLocation, useNavigate } from "react-router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { alignRight } from "./Header.style";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "40px" }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Patients List
          </Typography>
          <Button
            sx={alignRight}
            color="inherit"
            onClick={() => {
              navigate("/");
            }}
          >
            {location.pathname === "/" ? "Login" : "Logout"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
