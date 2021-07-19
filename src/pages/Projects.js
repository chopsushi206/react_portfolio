import React from "react";
import { useState } from "react";
import Project from "../components/Project";
import PokemonImg from "../images/pokemon.jpg";
import TechBlog from "../images/techblog.jpg";
import shot from "../images/WorthaShot.jpg";
import quiz from "../images/quiz.jpg";
import dashboard from "../images/dashboard.jpg";

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
    {
      title: "Worth A Shot",
      image: shot,
      liveApp: "https://chopsushi206.github.io/project_1/",
      repo: "https://github.com/chopsushi206/project_1",
      description: "First attempt at a group project. Uses 2 separate APIs.",
    },
    {
      title: "Javascript Quiz",
      image: quiz,
      liveApp: "https://chopsushi206.github.io/JavascriptQuiz/",
      repo: "https://github.com/chopsushi206/JavascriptQuiz",
      description: "Quiz app to test fundamental knowledge of Javascript.",
    },
    {
      title: "WeatherDashboard",
      image: dashboard,
      liveApp: "https://chopsushi206.github.io/WeatherDashboard/",
      repo: "https://github.com/chopsushi206/WeatherDashboard",
      description:
        "App to lookup weather forecast by city name. Uses Javascript, CSS and HTML, with one API ",
    },
  ]);

  return (
    <div className="container-md d-flex flex-wrap justify-content-between">
      {projectList.map((project, id) => {
        return <Project project={project} key={id} />;
      })}
    </div>
  );
}

export default Projects;
