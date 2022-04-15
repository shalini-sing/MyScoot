import React from "react";
import yoga from "../assets/images/about.jpeg";
import "../assets/css/about.css";
import PickCourse from "./pickCourse";
import WorkshopCard from "./common/workshopCard";
import StockInteractCard from "./common/stockInteractCard";
import PortfolioImageList from "./common/imageList";
import MediaCard from "./common/courseCard";
import BlogCard from "./common/blogCard";
import MentorCard from "./common/MentorCardCarousel";
import MentorCardCarousel from "./common/MentorCardCarousel";
import blog1 from "../assets/images/recentBlog1.jpeg"
import blog2 from "../assets/images/recentBlog2.jpeg"
import blog3 from "../assets/images/recentBlog3.jpeg"
const About = () => {
  return (
    <div>
      {/* <div className="dot-pattern"/> */}

      <div className="abouts">
        <div>
          <img className="about-img" src={yoga} />
          <div className="dot-pattern" />
        </div>
        <div className="about-stock-parent">
          <div className="about-stock">About Stock School</div>
          <p className="about-stock-desc">
            Stock School does what colleges still don’t provide- an engaging
            learning experience. We stay relevant by co-creating hands-on
            programs with the top professionals who find bookish knowledge as
            dull as we do.
          </p>
          <div style={{ display: "flex" }}>
            <div className="about-social"></div>
            <div className="about-social"></div>
            <div className="about-social"></div>
            <div className="about-social"></div>
            <div className="about-social"></div>
          </div>
          <PickCourse />
          <div className="join">
            <p style={{ marginBottom: "3px" }}>Join a community </p>
            <p style={{ marginTop: "-5px" }}>With a strong drive to excel</p>
          </div>
          <div className="workshop">
            <WorkshopCard />
            <WorkshopCard />
            <WorkshopCard />
            <WorkshopCard />
          </div>
          <div className="line"></div>
          <div className="join">
            <p style={{ marginBottom: "3px" }}>
              New age mentors to help you grow, learn and upskill{" "}
            </p>
          </div>
          {/* <div style={{ display:"flex", width:"1000px", marginTop:"34px" }}>
          <MentorCardCarousel/>
          </div> */}
          <div className="line"></div>
          <div className="stock-title">
            <p>How Stock School Shaks It Up</p>
          </div>
          <div className="stock-card">
            <StockInteractCard />
            <StockInteractCard />
            <StockInteractCard />
          </div>
          <div className="line"></div>
          <div className="stock-title">
            <p>Our students love what we do</p>
          </div>
          {/* <div style={{ display:"flex", }}> 
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
          </div> */}
          <div className="line"></div>
          <div className="stock-title">
            <p style={{ marginBottom: "3px" }}>Portfolio</p>
          </div>
          <PortfolioImageList />
          <div className="line"></div>
          <div className="stock-title">
            <p style={{ marginBottom: "3px" }}>Recent Blog Post</p>
          </div>
          <div className="blog">
            <BlogCard img={blog1}/>
            <BlogCard img={blog2}/>
            <BlogCard img={blog3}/>
          </div>
          <div className="blog-post-link">
            <p style={{ marginBottom: "3px", textDecoration: "underline" }}>
              View More Blog Post
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
