
import { Fanwood_Text } from "next/font/google";
import styles from "./page.module.css";
import Image from "next/image";
import avocado from "../../public/avocado.jpg";

export default function About() {
  return (
    <main className={styles.aboutMain} id="main">
      <h2>About</h2>

      <article className={styles.aboutArticle}>
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer suscipit mi et lacus interdum semper. Donec diam mauris, interdum et velit viverra, iaculis consectetur tortor. 
          Phasellus lacinia justo vitae hendrerit cursus. Duis gravida dolor sed leo sodales tempor. Sed in velit in nisi tincidunt finibus nec at dolor. Praesent congue, velit eu pellentesque commodo, 
          ante nisl pharetra risus, vel laoreet tellus mi egestas erat. Donec sit amet magna rutrum, condimentum quam vel, interdum orci. 
          Nullam scelerisque sodales sagittis.</p>
      </article>

      <article className={styles.aboutArticle}>
        <h3>About This Project</h3>
        <p>Aliquam tincidunt elit mi, non lobortis elit egestas a. Duis vitae lacinia augue. Vestibulum viverra vel quam ultrices suscipit. 
          Pellentesque commodo consectetur neque nec feugiat. Duis vel hendrerit augue. Nullam eleifend, odio quis venenatis placerat, 
          urna tellus tincidunt ante, et efficitur turpis elit ut felis. Fusce dui ex, consequat sed massa non, rutrum ullamcorper mauris. 
          Nullam mollis ex ac est blandit, ut sollicitudin turpis finibus. Nam eu elementum mi. </p>
      </article>

      <Image 
        className={styles.foodImg}
        src={avocado}
        alt="food"
        width={300} 
        height={200}
      />

      

    </main>
  )
}
