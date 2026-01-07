import { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import Carousel from '../components/Carousel';
import ProjectDetails from '../components/ProjectDetails';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Meus Projetos</h1>
        <p>Conheça os principais projetos que desenvolvi</p>
      </div>

      <div className="carousel-section">
        <Carousel 
          projects={projects}
          onProjectSelect={handleProjectSelect}
          selectedProjectId={selectedProject?.id || null}
        />
      </div>

      <div className="details-section">
        <ProjectDetails project={selectedProject} />
      </div>
    </div>
  );
};

export default Projects;
