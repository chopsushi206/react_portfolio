import React from "react";
import "./style.css";
import { Card, CardHeader, CardBody, CardText, CardImg } from "reactstrap";

function Project(project) {
  return (
    <Card
      className="m-1 mb-2 col-md-4 col-sm-6"
      style={{ borderColor: "#333" }}
    >
      <CardHeader style={{ backgroundColor: "#c0c0c0", borderColor: "#333" }}>
        <a href={project.project.liveApp} target="_blank" rel="noreferrer">
          {project.project.title}
        </a>
      </CardHeader>
      <CardBody>
        <CardImg src={project.project.image} alt="Project Preview"></CardImg>
        <CardText>{project.project.description}</CardText>
        <a href={project.project.repo} target="_blank" rel="noreferrer">
          View Repo
        </a>
      </CardBody>
    </Card>
  );
}

export default Project;
