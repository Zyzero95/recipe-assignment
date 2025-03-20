import styles from "./footer.module.css";
import NavigationLinks from "./navigationlinks"
import NewsletterSignup from './newslettersignup'
export default function footer() {


    return (
        <footer className={styles.footer}>
            <section className="newsletter">
                <NewsletterSignup />
            </section>
            <section className="navigation">
                <h4>Pages on the site</h4>
                <NavigationLinks />
            </section>
        </footer>
    )
}