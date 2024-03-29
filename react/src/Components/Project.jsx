function Project(props) {
    // Body
    return <div className="card col col-xs-10 col-sm-10 col-md-5 col-lg-3 m-2 p-3">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>

            <img src={props.image} />

        <div className="card-footer">
            <p className="tools">{props.tools}</p>
            <p><a href={props.deployed} target="_blank">Deployed site</a> <a href={props.github} target="_blank">Github Repository</a></p>
        </div>
    </div>
}

export default Project;