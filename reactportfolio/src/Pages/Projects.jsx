import Project from "../Components/Project"
import projects from '../Data/projects.json'

function Projects(){
    console.log(projects)
return <div>
    Take a look at my previous projects.
    <div>
    { projects.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} />;
            })}
    </div>
</div>
}

export default Projects