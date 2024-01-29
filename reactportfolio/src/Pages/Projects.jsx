import Project from "../Components/Project"
import projects from '../Data/projects.json'

import '../Pages/Styles.css'


function Projects() {
    return <div className="background">
        <h2 className="p-5">Take a look at my previous projects:</h2>
        <div className="d-flex flex-wrap">
            {projects.map((project) => {
                return <Project key={project.id} title={project.title} image={project.image} description={project.description} tools={project.tools} deployed={project.deployed} github={project.github} />;
            })}
        </div>
    </div>
}

export default Projects