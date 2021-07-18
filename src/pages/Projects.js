import React from "react";
import { useState } from "react";
import Project from "../components/Project";
import PokemonImg from "../images/pokemon.jpg";
import TechBlog from "../images/techblog.jpg";

function Projects() {
  const [projectList] = useState([
    {
      title: "Who's That Pokemon?",
      image: PokemonImg,
      liveApp: "https://whos-the-pokemon.herokuapp.com/",
      repo: "https://github.com/chopsushi206/Whos-That-Pokemon",
      description:
        "Second Group project. Uses Node, MySQL, 3rd Party APIs, Express, Sequelize, Handlebars, SocketIO,  and CSS/HTML.",
    },
    {
      title: "Tech Blog",
      image: TechBlog,
      liveApp: "https://calm-hamlet-00362.herokuapp.com/",
      repo: "https://github.com/chopsushi206/TechBlog",
      description: "Uses Node, MySQL, Handlebars, and CSS/HTML.",
    },
  ]);

  return (
    <div className="container-md">
      {projectList.map((project, id) => {
        return <Project project={project} key={id} />;
      })}
    </div>
  );
}

export default Projects;
