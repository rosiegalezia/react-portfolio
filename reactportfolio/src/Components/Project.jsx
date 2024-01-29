function Project(props) {
    // Body
    return <div className="card col p-3 m-5">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p className="tools">{props.tools}</p>
        <p><a href={props.deployed} target="_blank">Deployed site</a> <a href={props.github} target="_blank">Github Repository</a></p>
    </div>
}

export default Project;