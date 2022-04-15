import React from "react";
import MediaCard from "./common/courseCard";
import "../assets/css/pickCourse.css";
const PickCourse = () => {
  return (
    <div className="pick-course">
      <p className="pick-course-title">Pick a Course to Get Started</p>
      <div className="media-card">
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </div>
  );
};

export default PickCourse;
