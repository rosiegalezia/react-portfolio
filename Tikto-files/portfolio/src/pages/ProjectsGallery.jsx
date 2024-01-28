import Project from '../components/Project';
import projects from '../data/projects.json';

function ProjectsGallery() {
    // Body
    return <div>
        This is list of my past projects
        <div>
            { projects.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} />;
            })}
        </div>
    </div>
}

export default ProjectsGallery;