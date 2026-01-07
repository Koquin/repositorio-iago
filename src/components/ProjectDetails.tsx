import type { Project } from '../data/projects';
import './ProjectDetails.css';

interface ProjectDetailsProps {
  project: Project | null;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  if (!project) {
    return (
      <div className="project-details empty">
        <p>Selecione um projeto para ver os detalhes</p>
      </div>
    );
  }

  return (
    <div className="project-details">
      <div className="project-details-header">
        <h2>{project.title}</h2>
        <p className="project-description">{project.description}</p>
      </div>
      
      {project.sections ? (
        // Projeto com seções (como Saciar)
        project.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="project-section">
            <div className="section-divider">
              <h3 className="section-title">{section.title}</h3>
              <p className="section-description">{section.description}</p>
            </div>
            <div className="project-images-grid">
              {section.images.map((image, index) => (
                <div key={index} className="project-image-container">
                  <p className="image-description">{image.description}</p>
                  <img 
                    src={image.src} 
                    alt={`${section.title} - Tela ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        // Projeto com lista simples de imagens
        <div className="project-images-grid">
          {project.images?.map((image, index) => (
            <div key={index} className="project-image-container">
              <p className="image-description">{image.description}</p>
              <img 
                src={image.src} 
                alt={`${project.title} - Tela ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
