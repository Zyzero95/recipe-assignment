"use client";
import styles from "./header.module.css";
import NavigationLinks from "./navigationlinks"




export default function Header() {

 


    const Checking = (e: any) => {
        if (e.keyCode === 13) {
            e.preventDefault();

            console.log("checked?");
            
            let checkbox = document.getElementById('side-menu');
          
        }

    }



    return (
        <header className={styles.header}>

            <a className={styles.skipLink} href="#main">Skip to content</a>

            <h1>The Fabulous Recipe Collection</h1>

            {/* Mobile menu */}
            <div className={styles.smallMenu} tabIndex={0} onKeyDown={Checking}>
                <input className={styles.sideMenu} type="checkbox" id="side-menu" />
                <label className={styles.hamb} htmlFor="side-menu">
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