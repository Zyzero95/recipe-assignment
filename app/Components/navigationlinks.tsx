"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function NavigationLinks() {

  const router = useRouter();

  let randomNr: string = "";

  const Randomize = (e: React.FormEvent) => {
    e.preventDefault();
    const number: number = Math.floor(Math.random() * 50) + 1;
    randomNr = number.toString();

    router.push(randomNr);
  }

  return (
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href={randomNr} onClick={Randomize}>Surprise me!</Link></li>
    </ul>
  )
}
