import { Recipe } from "@/app/Interfaces/interfaces";
import styles from "./rating.module.css";
import { Star } from "lucide-react";

export default function Ratings({data}: {data: Recipe}){
    return(<h3 className={styles.ratingBar}><Star fill="var(--yellow)" color="var(--yellow)"/>{data.rating}{`(${data.reviewCount})`}</h3>)
}