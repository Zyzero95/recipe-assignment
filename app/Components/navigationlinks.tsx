"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavigationLinks() {


  const router = useRouter();

  const randomNr: string = "";


  //e.preventDefault();
  // const number: number = Math.floor(Math.random() * 50) + 1;
  // const randomNr: string = number.toString();
  // console.log("RANDOM", randomNr);

  const Randomize = (e: any) => {
    e.preventDefault();
    const number: number = Math.floor(Math.random() * 50) + 1;
    const randomNr: string = number.toString();
    console.log("RANDOM", randomNr);

    router.push(randomNr);

  }
  // random = Math.floor(Math.random() * 50) +1;



  return (
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href={randomNr} onClick={Randomize}>Surprise me!</Link></li>
    </ul>
  )
}
