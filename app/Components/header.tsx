import styles from "./header.module.css";
import NavigationLinks from "./navigationlinks"
export default function Header() {


    return (
        <header className={styles.header}>
            <h1>The Fabulous Recipe Collection</h1>

            {/* Mobile menu */}
            <div className={styles.smallMenu}>
                <input className={styles.sideMenu} type="checkbox" id="side-menu" />
                <label className={styles.hamb} htmlFor="side-menu">
                    {/* Span becomes "burge lines" */}
                    <span className={styles.hambLine}></span> 
                </label>

                <nav className={styles.nav}><NavigationLinks /></nav>
            </div>

            {/* Desktop menu */}
            <nav className={styles.navMenu}>
                <NavigationLinks />
            </nav>

        </header>
    )
}