import { Recipe } from "@/app/Interfaces/interfaces"
import { Clock } from "lucide-react"
import homeStyle from "../recipecard.module.css"
import idStyle from "../../[id]/page.module.css"

export default function Preptime({ data, cssClass }: {data: Recipe, cssClass: string}) {
  return (<p className={cssClass === "recipeCardCookTime" ? homeStyle.recipeCardCookTime : idStyle.cssClass}><Clock/> {data.cookTimeMinutes + data.prepTimeMinutes} min.</p>)
}
