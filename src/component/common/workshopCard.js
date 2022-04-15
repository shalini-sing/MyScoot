import { Card } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const WorkshopCards = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: "340px",
    marginTop:"24px",
    marginLeft: "0px",
  },
  [theme.breakpoints.up('md')]: {
  },
  [theme.breakpoints.up('lg')]: {
  },
}));
const WorkshopCard = () => {
  return (
    <WorkshopCards
      sx={{
        width: "266px",
        height: "171px",
        display: "flex",
        marginTop: "71px",
        marginLeft: "60px",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "156px",
          backgroundColor: "#16BEBA",
          borderRadius: "5px",
          margin: "7px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
      >
        <div 
        style={{width: "40px",
        height: "40px",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        borderRadius: "20px",
        boxShadow:"0px 3px 6px #00000014",
        opacity:"1" }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft:"5px"
        }}
      >
        <div
          style={{
            width: "95px",
            height: "51px",
            color: "#225251",
            opacity: "1",
            font: "normal normal bold 36px/39px 'Poppins', sans-serif",
            letterSpacing:"0.58px",
            textAlign:"left"
          }}
        >
          800+
        </div>
        <div 
        style={{
          width: "98px",
          height: "47px",
          color: "#225251",
          opacity: "1",
          font: "normal normal medium 16px/24px 'Poppins', sans-serif",
          letterSpacing:"0.26px",
          textAlign:"left"
        }}
        >Programs & Workshops</div>
      </div>
    </WorkshopCards>
  );
};

export default WorkshopCard;
