import { Recipe } from "@/app/Interfaces/interfaces";
import styles from "../recipecard.module.css"
import { SignalHigh, SignalMedium} from "lucide-react";


export default function Difficulty({ data }: {data: Recipe}) {
  return (<p className={styles.recipeCardDifficulty}>Difficulty: {data.difficulty} {data.difficulty === "Easy" ? 
  <SignalMedium viewBox="0 -3 24 24" color="green"/> : <SignalHigh viewBox="0 -3 24 24" color="yellow"/>}</p>)
}
