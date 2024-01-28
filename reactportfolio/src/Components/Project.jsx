function Project(props) {
    // Body
    return <div className="card p-3 m-3">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
}

export default Project;