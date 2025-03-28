import { Recipe } from "@/app/Interfaces/interfaces"
import { Clock } from "lucide-react"

export default function Preptime({ data }: {data: Recipe}) {
  return (<p><Clock/> {data.cookTimeMinutes + data.prepTimeMinutes} min.</p>)
}
