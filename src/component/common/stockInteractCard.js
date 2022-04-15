import { Card } from '@mui/material'
import { styled } from '@mui/system';
import React from 'react'
import "../../assets/css/stockInteractCard.css"

const StockInteractCards = styled(Card)(({ theme }) => ({
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
const StockInteractCard = ({num}) => {
  return (
      <div>
          <div className="num">01</div>
<StockInteractCards
      sx={{
        width: "376px",
        height: "225px",
        display: "flex",
        marginTop: "71px",
        marginLeft: "60px",
        background:"#FFFFFF 0% 0% no-repeat padding-box",
        border:"2px solid #8EDCED",
        borderRadius:"5px",
        opacity:"1",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <div className="item_1">Interact with the best</div>
      <div className="item_2">Go beyond pre-recorded courses with Growth School LIVE and get doubts cleared personally</div>
    </StockInteractCards>
      </div>
    
  )
}

export default StockInteractCard