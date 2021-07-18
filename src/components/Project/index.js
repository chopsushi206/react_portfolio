import React from "react";
import "./style.css";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  CardImg,
} from "reactstrap";

function Project(projects) {
  return (
    <div>
      <Card>
        <CardHeader>
          <a href={projects.liveApp} target="_blank">
            {projects.title}
          </a>
        </CardHeader>
        <CardBody>
          <CardImg
            width="300px"
            src={projects.image}
            alt="Project Preview"
          ></CardImg>
          <CardText>{projects.description}</CardText>
          <a href={projects.repo}>View Repo</a>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
}

export default Project;
