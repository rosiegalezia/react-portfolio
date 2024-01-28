import Project from "../Components/Project"
import projects from '../Data/projects.json'

function Projects() {
    return <div>
        <h2 className="p-3">Take a look at my previous projects:</h2>
        <div className="col col-sm-12 col-md-6 col-lg-4">
            {projects.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} tools={project.tools} deployed={project.deployed} github={project.github} />;
            })}
        </div>
    </div>
}

export default Projects