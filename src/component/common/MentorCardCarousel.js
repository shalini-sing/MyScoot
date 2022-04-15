import { Card } from '@mui/material'
import React from 'react'
import Carousel from "react-elastic-carousel"
import MediaCard from './courseCard'
import "../../assets/css/mentorCard.css"
import { ITEMS } from "../../resources/mentorCardData"
import MentorCard from './mentorCard'
const breakpoints = [
    { width: 1, itemToShow: 1},
    { width: 550, itemToShow: 2, itemsToScroll: 2},
    { width: 768, itemToShow: 3},
    { width: 1200, itemToShow: 4},
]
const MentorCardCarousel = () => {
  return (
    <>
    <div className="carousel-wrapper">
    <Carousel
    itemsToShow={3}
    pagination={true}
    showArrows={false}
    breakPoints={breakpoints}
    >
    {
      ITEMS.map((item) => (
        
          <MentorCard img={item.image}/>
        
      ))
    }
    </Carousel>
    </div>
    
    </>
  )
}

export default MentorCardCarousel