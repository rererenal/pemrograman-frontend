import { useState } from "react";
import Footer from "../components/footer/Footer.js";
import Form from "../components/form/Form.js";
import Hero from "../components/hero/Hero.js";
import Movies from "../components/movies/Movies.js";
import Navbar from "../components/navbar/Navbar.js";
import data from "../utils/constants/data.js";

function Main(){

    const [movies, setMovies] = useState(data);

    return(
        <main>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} />
            <Form movies={movies} setMovies={setMovies} />
        </main>
    );
}

function Home() {
    return(
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default Home;