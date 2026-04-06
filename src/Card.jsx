function Card(props){
    return (
        <div className= {props.name}>
            <img src={props.path} alt={props.name}/>
            <h2>{props.name}</h2>
            <p>
            {props.paragraph}
            </p>
        </div>
    )
}

export default Card