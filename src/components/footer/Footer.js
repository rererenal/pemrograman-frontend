import styles from "./Footer.module.css";

function Footer(){
    return(
        <div className = {styles.container}>
            <footer className = {styles.footer}>
                <h1 className = {styles.footer__title}>Free Movie Apps</h1>
                <p className = {styles.footer__author}>Develop by My Self</p>
            </footer>
        </div>
    );
}

export default Footer;