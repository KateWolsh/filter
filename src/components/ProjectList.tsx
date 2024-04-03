import Project from "../project"

interface ProjectListProps {
  projects: Project[];
}

function ProjectList( {projects}:ProjectListProps  ) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
        <img 
        key={index} 
        src={project.img} 
        alt={project.category} 
        className={`w-full h-auto ${index % 1 === 0 ? 'mt-4' : ''}`}/>
      ))}
      </div>
    )
  }
  
  export default ProjectList