import styles from "./Hero.module.css";

function Hero(){
    return(
        <div className = {styles.container}>
            <section className = {styles.hero}>
                <div className = {styles.hero__left}>
                    <h2 className = {styles.hero__title}>Spiderman</h2>
                    <h3 className = {styles.hero__genre}>Genre : Drama, Sci-Fi, Action</h3>
                    <p className = {styles.hero__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi dolorum voluptates recusandae quaerat eaque consequatur ipsam eius vel ullam.</p>
                    <button className = {styles.hero__button}>Watch</button>
                </div>
                <div className = {styles.hero__right}>
                    <img src="https://picsum.photos/seed/picsum/600/400" alt="" className = {styles.hero__image}/>
                </div>
            </section>
        </div>
    );
}

export default Hero;