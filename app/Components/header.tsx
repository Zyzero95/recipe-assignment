import styles from "./header.module.css";
import NavigationLinks from "./navigationlinks"
export default function Header() {


    return (
        <header className={styles.header}>
            <h1>Welcome to our recipe collection</h1>




            {/* TESTING!!!  */}
            <div className={styles.smallMenu}>
                <input className={styles.sideMenu} type="checkbox" id="side-menu" />
                <label className={styles.hamb} htmlFor="side-menu">
                    {/* Span förvandlas till meny-linjerna */}
                    <span className={styles.hambLine}></span> 
                </label>
                
                <nav className={styles.nav}><NavigationLinks /></nav>
            </div>






            <nav className={styles.navMenu}>
                <NavigationLinks />
            </nav>

        </header>
    )
}