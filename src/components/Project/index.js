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

function Project(project) {
  console.log(project);
  return (
    <div>
      <Card className="mb-3">
        <CardHeader>
          <a href={project.project.liveApp} target="_blank">
            {project.project.title}
          </a>
        </CardHeader>
        <CardBody>
          <CardImg
            width="300px"
            src={project.project.image}
            alt="Project Preview"
          ></CardImg>
          <CardText>{project.project.description}</CardText>
          <a href={project.project.repo} target="_blank">
            View Repo
          </a>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
}

export default Project;
