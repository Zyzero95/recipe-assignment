import Link from "next/link";
import styles from './navigationlinks.module.css'

export default function NavigationLinks() {
  return (
    <ul className={styles.navigation}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/search">Search</Link></li>
    </ul>
  )
}
