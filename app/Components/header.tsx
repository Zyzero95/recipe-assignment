import styles from "./header.module.css";
import NavigationLinks from ./navigationlinks.tsx

export default function Header() {


    return (
        <header className={styles.header}>
            <h1>Titel?</h1>

            <nav className={styles.navMenu}>
                <NavigationLinks />
            </nav>

        </header>
    )
}