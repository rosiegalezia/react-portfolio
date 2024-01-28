import Project from "../Components/Project"
import projects from '../Data/projects.json'

function Projects() {
    return <div>
        <h2 className="p-3">Take a look at my previous projects:</h2>
        <div>
            {projects.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} />;
            })}
        </div>
    </div>
}

export default Projects