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
                <div className={styles.navigationContainer}>
                    <h3>Pages on the site</h3>
                    <NavigationLinks />
                </div>
            </section>
        </footer>
    )
}