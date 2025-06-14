import React from "react";

const Course = ({ image, title, description }) => {
  // const Course = (props) => {
  // const title=props.title
  // const description=props.description

  // const { title, description } = props

  return (
    <>      <img src={image} style={{ width: "400px", height: "200x" }} />
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
};

export default Course;
