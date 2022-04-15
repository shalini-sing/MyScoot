import { ThemeProvider } from "@emotion/react";
import {
  AppBar,
  Button,
  createTheme,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import * as React from "react";
import "../assets/css/header.css";
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#2F6A67",
    },
  },
  button: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
  },
});
const CustomAppBar = styled(AppBar)(
  ({ theme }) => `
  background-color: ${theme.palette.primary.main};`
);
const CustomButton = styled(Button)(({ theme }) => ({
  // color: theme.palette.getContrastText("#2F6A67"),
  backgroundColor: "#FFFFFF",
  color: "#2F6A67",
  width: "80px",
  height: "40px",
  borderRadius: "5px",
  opacity: "1",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
  [theme.breakpoints.down("md")]: {
    width: "79px",
    height: "36px",
  },
  [theme.breakpoints.up("md")]: {
    width: "80px",
    height: "40px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "80px",
    height: "40px",
  },
}));
export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={customTheme}>
      <Box className="mob-prevent">
        <CustomAppBar position="static">
          <Toolbar>
            <Grid
              item
              xs={6}
              md={4}
              style={{
                font: "normal normal bold 26px/39px 'Poppins', sans-serif",
                width: "183px",
                height: "auto",
                top: "15px",
                left: "24px",
                color: "#FFFFFF",
                opacity: "1",
                letterSpacing: "0.42px",
                textAlign: "left",
              }}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Stock School.
            </Grid>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <Grid className="about">About</Grid>
              <Grid className="about">Offerings</Grid>
              <Grid className="about">Testimonials</Grid>
              <Grid className="about"> Portfolio</Grid>
              <Grid className="about">Blog</Grid>
              <CustomButton variant="contained">Login</CustomButton>
            </Grid>
          </Toolbar>
        </CustomAppBar>
      </Box>
      {/* Mobile view */}
      <Box className="desk-prevent">
        <CustomAppBar position="static">
          <Toolbar>
            <Grid
              item
              xs={6}
              md={4}
              style={{
                font: "normal normal bold 20px/39px 'Poppins', sans-serif",
                width: "141px",
                height: "auto",
                top: "15px",
                left: "24px",
                color: "#FFFFFF",
                opacity: "1",
                letterSpacing: "0.32px",
                textAlign: "left",
              }}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Stock School.
            </Grid>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <CustomButton variant="contained">MENU</CustomButton>
            </Grid>
          </Toolbar>
        </CustomAppBar>
      </Box>
    </ThemeProvider>
  );
}
