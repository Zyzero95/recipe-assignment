import styles from "./footer.module.css";
import NavigationLinks from "./navigationlinks"
import NewsletterSignup from './newslettersignup'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.newsletter}>
                <NewsletterSignup />
            </section>
            <section className={styles.navigation}>
                <h4>Pages on the site</h4>
                <NavigationLinks />
            </section>
        </footer>
    )
}