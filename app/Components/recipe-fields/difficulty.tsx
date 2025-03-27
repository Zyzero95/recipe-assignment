import { Recipe } from "@/app/Interfaces/interfaces";
import homeStyle from "../recipecard.module.css"
import idStyle from "../../[id]/page.module.css"
import { SignalHigh, SignalMedium} from "lucide-react";


export default function Difficulty({ data, cssClass }: {data: Recipe, cssClass: string}) {
  return (<p className={cssClass === "recipeCardDifficulty" ? homeStyle.recipeCardDifficulty : idStyle.cssClass}>Difficulty: {data.difficulty} {data.difficulty === "Easy" ? 
  <SignalMedium viewBox="0 -3 24 24" color="green"/> : <SignalHigh viewBox="0 -3 24 24" color="yellow"/>}</p>)
}
