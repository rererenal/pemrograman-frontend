import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../alert/Alert";
import styles from "./Form.module.css";

function Form(props){

    const {movies, setMovies} = props;

    const [title, setTitle] = useState("");

    const [date, setDate] = useState("");

    const [poster, setPoster] = useState("")

    const [isTitleEmpty, handleTitleEmpty] = useState(false);

    const [isDateEmpty, handleDateEmpty] = useState(false);

    const [isPosterEmpty, handlePosterEmpty] = useState(false);

    function handleTitle(e){
        setTitle(e.target.value);
    }

    function handleDate(e){
        setDate(e.target.value)
    }

    function handlePoster(e){
        setPoster(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();

        if(title === ""){
            handleTitleEmpty(true);
            handleDateEmpty(true);
            handlePosterEmpty(true);
        }
        else if(date ===""){
            handleTitleEmpty(true);
            handleDateEmpty(true);
            handlePosterEmpty(true);
        }
        else {
            const movie = {
                id: nanoid(10),
                title: title,
                year: date,
                type: "Movie",
                poster: poster
    
            }
            setMovies([...movies,movie]);
            handleTitleEmpty(false);
            handleDateEmpty(false);
            handlePosterEmpty(false);
        }

        
    }

    return(
        <div className={styles.container}>
        <section className={styles.form}>
            <div className={styles.form__left}>
                <img className={styles.form__image} src="https://picsum.photos/300/250" alt="" />
            </div>
            <form className={styles.form__right} onSubmit={handleSubmit}>
                <h2 className={styles.form__title}>Add Movie</h2>
                <label className={styles.form__labelTitle} htmlFor="">Title</label>
                <input className={styles.form__inputTitle} 
                type="text" name="" id="title" value={title} 
                onChange={handleTitle}/> 
                {
                    isTitleEmpty && <Alert>*Title wajib di isi</Alert>
                }
                <label className={styles.form__labelYear} htmlFor="">Year</label>
                <input className={styles.form__inputYear} 
                type="number" name="" id="date" value={date}
                onChange={handleDate}/>
                {
                    isDateEmpty && <Alert>*Date wajib di isi</Alert>
                }
                <label htmlFor="" className={styles.form__labelType}>Genre</label>
                <select name="" id="genre" className={styles.form__inputGenre}>
                    <option value=""></option>
                    <option value="">Action</option>
                    <option value="">Drama</option>
                    <option value="">Horror</option>
                    <option value="">Comedy</option>
                </select>
                <label htmlFor="" className={styles.form__labelPoster}>Link Poster</label>
                <input type="text" id="poster" value={poster} className={styles.form__inputPoster}
                onChange={handlePoster} />
                {
                    isPosterEmpty && <Alert>*Link poster wajib di isi</Alert>
                }
                <button className={styles.form__button}>Submit</button>
            </form>
        </section>
    </div>
    );
}

export default Form;