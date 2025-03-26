"use client";
import styles from "./header.module.css";
import NavigationLinks from "./navigationlinks"


export default function Header() {

 
    const Checking = (e: any) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            document.getElementById("checkboxLabel")?.click();           
        }
    }


    return (
        <header className={styles.header}>

            <a className={styles.skipLink} href="#main">Skip to content</a>

            <h1>The Fabulous Recipe Collection</h1>

            {/* Mobile menu */}
            <div className={styles.smallMenu} >
                <input className={styles.sideMenu} type="checkbox" id="side-menu" />
                <label className={styles.hamb} id="checkboxLabel" htmlFor="side-menu" tabIndex={0} onKeyDown={Checking} >
                    {/* Span becomes "burger lines" */}
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