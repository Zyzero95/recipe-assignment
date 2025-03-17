import Link from "next/link";

export default function NavigationLinks() {
  return (
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/search">Search</Link></li>
    </ul>
  )
}
