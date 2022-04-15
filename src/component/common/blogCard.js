import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pick_course from "../../assets/images/pick-course.jpeg";
import { styled } from "@mui/system";
import "../../assets/css/blogCard.css";
import "../../assets/css/pickCourse.css";
import { IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const BlogCards = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "320px",
    height:"410px",
    margin: "0px 0px 35px 0px",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export default function BlogCard({img}) {
  return (
    <BlogCards sx={{ width: "400px", height: "400px", margin: "30px" }}>
      <CardMedia
        component="img"
        height="165"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ color:"#1E494A"}}>
          Headline (Title)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Back to makerverse after a short hiatus 🙌 Every life is unique and
          everyone approaches it…
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          Published by Shreya Saxena
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Jun 15, 2021 . 2 min read
        </Typography>
      </CardContent>
      <div className="courseCard-separator" style={{ marginTop:"0px", marginLeft:"18px"}}></div>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color:"#2E384D"}} />
        </IconButton>
      <IconButton >
          <ModeCommentIcon style={{ color:"#2E384D"}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon style={{ color:"#2E384D"}}/>
        </IconButton>
      </CardActions>
      
    </BlogCards>
  );
}
