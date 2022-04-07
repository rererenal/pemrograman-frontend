import Footer from "../components/footer/Footer.js";
import Form from "../components/form/Form.js";
import Hero from "../components/hero/Hero.js";
import Movies from "../components/movies/Movies.js";
import Navbar from "../components/navbar/Navbar.js";

function Main(){
    return(
        <main>
            <Hero />
            <Movies />
            <Form />
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