import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Weather App</h3>
        <p>A React-based weather forecasting app with API integration.</p>
        <a href="#">View Project</a>
      </div>
      <div className="project-card">
        <h3>Task Manager</h3>
        <p>A task management web app built with React and Redux for state management.</p>
        <a href="#">View Project</a>
      </div>
    </section>
  );
}

export default Projects;
