import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css"

function Movies({ title}) {

    const movies = useSelector((state) => state.movies.movies.default);

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>{title}</h2>
                <div className={styles.movie__container}>
                    {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
                </div>
            </section>
        </div>
    );
}

export default Movies