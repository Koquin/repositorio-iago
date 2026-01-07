import { useState } from 'react';
import type { Project } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Carousel.css';

interface CarouselProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
  selectedProjectId: string | null;
}

const Carousel = ({ projects, onProjectSelect, selectedProjectId }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      Math.min(projects.length - itemsPerPage, prev + itemsPerPage)
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex + itemsPerPage < projects.length;

  return (
    <div className="carousel">
      <button 
        className="carousel-button prev" 
        onClick={handlePrevious}
        disabled={!canGoPrevious}
      >
        ‹
      </button>
      
      <div className="carousel-container">
        <div className="carousel-track">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={project.id === selectedProjectId}
              onClick={() => onProjectSelect(project)}
            />
          ))}
        </div>
      </div>
      
      <button 
        className="carousel-button next" 
        onClick={handleNext}
        disabled={!canGoNext}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
