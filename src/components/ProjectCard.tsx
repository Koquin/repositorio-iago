import type { Project } from '../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

const ProjectCard = ({ project, isActive, onClick }: ProjectCardProps) => {
  return (
    <div 
      className={`project-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="project-card-image">
        <img src={project.logo} alt={project.title} />
      </div>
      <h3 className="project-card-title">{project.title}</h3>
    </div>
  );
};

export default ProjectCard;
