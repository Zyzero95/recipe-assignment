import styles from "./loading.module.css";
import Image from "next/image";
import pizza from "../../public/pizza-loader.png";

export default function Loading() {
    return (
        <main className={styles.loadingMain}>
            <section>
                <span className={styles.loader}>
                  <Image 
                  className={styles.pizzaloader}
                  src={pizza}
                  alt="loader"
                  width={100} 
                  height={98}  
                  />
                </span>
            </section>
        </main>
    )
}