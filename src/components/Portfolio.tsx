import Toolbar from '../components/Toolbar'
import ProjectList from '../components/ProjectList'
import portfolioLists from "../data/portfolio-list"
import { useState } from 'react'


function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(portfolioLists)
  const onSelectFilter = (filter: string) => {
    setSelectedFilter(filter)
    if (filter === "All") {
      setFilteredProjects(portfolioLists)
    } else {
      const newFilteredProjects = portfolioLists.filter((project) =>
      (project.category === filter))
      setFilteredProjects(newFilteredProjects)
    }
  } 
    return (
      <>
        <Toolbar
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected={selectedFilter}
            onSelectFilter={onSelectFilter}
        />
        <ProjectList
            projects={filteredProjects}
        />
      </>
    )
  }
  
  export default Portfolio