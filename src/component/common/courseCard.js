import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pick_course from "../../assets/images/pick-course.jpeg";
import { styled } from "@mui/system";

const MediaCards = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "320px",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
const ArtButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  color: "#2F6A67",
  width: "98px",
  height: "29px",
  borderRadius: "5px",
  opacity: "1",
  textTransform: "none",
  marginLeft: "8px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
}));
const FillingButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#EA0A0A",
  color: "#FFFFFF",
  width: "90px",
  height: "29px",
  borderRadius: "5px",
  opacity: "1",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#EA0A0A",
  },
}));
const BookButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#225251",
  color: "#FFFFFF",
  width: "360px",
  height: "40px",
  borderRadius: "5px",
  opacity: "1",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#225251",
  },
}));
export default function MediaCard() {
  return (
    <MediaCards sx={{ width: "400px", height: "490px", margin: "30px" }}>
      <div className="media">
        <CardActions>
          <ArtButton variant="contained" size="small">
            Art & Design
          </ArtButton>
          <FillingButton variant="contained" size="small">
            Filling Fast
          </FillingButton>
        </CardActions>
      </div>

      {/* <CardMedia
        component="img"
        height="240"
        image={pick_course}
        alt="green iguana"
      > */}
      {/* </CardMedia> */}
      <CardContent>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          color="text.secondary"
        >
          Next Session on 09/01/2022
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            color: "#1E494A",
            font: "font: normal normal bold 18px/16px Helvetica Neue",
          }}
        >
          Product design
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹ 3000 for 1 month | Monthly Payments | For 12 Months course
        </Typography>
        <div className="courseCard-separator"></div>
        <Typography variant="body2">
          <h3
            style={{
              font: "normal normal bold 30px/16px",
              color: "#1E494A",
              marginBottom: "0px",
            }}
          >
            ₹3000/-
          </h3>
        </Typography>
      </CardContent>
      <CardActions style={{ margin: "0px 10px 0px 10px" }}>
        <BookButton variant="contained" size="medium">
          Book A Spot
        </BookButton>
      </CardActions>
    </MediaCards>
  );
}
