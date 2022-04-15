import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';


const MediaCards = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: "320px"
  },
  [theme.breakpoints.up('md')]: {
  },
  [theme.breakpoints.up('lg')]: {
  },
}));

export default function MentorCard({img}) {
  return (
    <MediaCards sx={{ width:"359px", height:"477px", margin:"30px" }}>
      <CardMedia
        component="img"
        height="240"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div" color="text.secondary">
        Next Session on 09/01/2022
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Product design
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ₹ 3000 for 1 month | Monthly Payments | For 12 Months course
        </Typography>
        <br/>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book A Spot</Button>
      </CardActions>
    </MediaCards>
  );
}
