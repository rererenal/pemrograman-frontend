import Movie from "../movie/Movie";
import styles from "./Movies.module.css";
import {nanoid} from "nanoid";

function Movies(props){

    const {movies, setMovies} = props;

    function tambahFilm(){
        const movie = {
            id: nanoid(10),
            title: "Peaky Blinders",
            year: 2013,
            type: "Series",
            poster: "https://picsum.photos/300/400"
        }
        setMovies([...movies, movie]);
    }
    return (
        <div className = {styles.container}>
            <section className = {styles.movies}> 
                <h2 className = {styles.movies__title}>Best Movie</h2>
                <div className = {styles.movie__container}>
                    {
                        // looping data dengan function map
                        // mengirim props ke movie
                        movies.map(function(movie){
                           return <Movie key = {movie.id} movie = {movie} />
                        })
                    }
                    
                </div>
                <button className = {styles.button__add__movie} onClick = {tambahFilm}>Add Movie</button>
            </section>
        </div>
    );
}

export default Movies;