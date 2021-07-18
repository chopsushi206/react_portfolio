import React from "react";
import { useState } from "react";
import Project from "../components/Project";

function Projects() {
  const [projects] = useState([
    {
      title: "Who's That Pokemon?",
      image: "../../images/pokemon.jpg",
      liveApp: "https://whos-the-pokemon.herokuapp.com/",
      repo: "https://github.com/chopsushi206/Whos-That-Pokemon",
      description:
        "Second Group project. Uses Node, MySQL, 3rd Party APIs, Express, Sequelize, Handlebars, SocketIO,  and CSS/HTML.",
    },
    {
      title: "Tech Blog",
      image: "../../images/techblog.jpg",
      liveApp: "https://calm-hamlet-00362.herokuapp.com/",
      repo: "https://github.com/chopsushi206/TechBlog",
      description: "Uses Node, MySQL, Handlebars, and CSS/HTML.",
    },
  ]);

  return (
    <div className="container-md">
      {projects.map((project, id) => {
        return <Project project={project} key={id} />;
      })}
    </div>
  );
}

export default Projects;
