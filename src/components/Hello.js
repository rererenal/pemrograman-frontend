function Hello(props){

    const {name} = props;
    return(
        <div className="hello">
            <h2>
                Ayo Belajar React
            </h2>
            <p>{name}</p>
        </div>
    );
    
}

export default Hello;