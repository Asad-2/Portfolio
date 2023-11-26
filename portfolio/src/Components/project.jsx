import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/project/1.jpg",
      gLink: "https://github.com/Asad-2",
    },
    {
      title: "Project 2",
      img: "/project/2.webp",
      gLink: "https://github.com/Asad-2",
     
    },
    {
      title: "Project 3",
      img: "/project/3.jpg",
      gLink: "https://github.com/Asad-2",
      
    },
    {
      title: "Project 4",
      img: "/project/4.jpg",
      gLink: "https://github.com/Asad-2",
      
    },
    {
      title: "Project 5",
      img: "/project/5.jpg",
      gLink: "https://github.com/Asad-2",
      
    },
    {
      title: "Project 6",
      img: "/project/6.png",
      gLink: "https://github.com/Asad-2",
      
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Asad-2"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
              Explore a Java-driven solution meticulously designed for streamlining data processing tasks. This project harnesses Java's capabilities to optimize backend operations and implement intricate algorithms, catering to the efficient management and analysis of large datasets with precision and speed.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;