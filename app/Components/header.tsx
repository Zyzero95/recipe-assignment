import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {


    return (
        <header className={styles.header}>
            <h1>Titel?</h1>

            <nav className={styles.navMenu}>
                <ul>
                    <li><Link href={`./`}>Home</Link></li>
                    <li><Link href="#">About</Link></li>
                </ul>
            </nav>

        </header>
    )
}