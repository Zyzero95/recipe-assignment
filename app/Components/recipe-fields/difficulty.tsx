import { Recipe } from "@/app/Interfaces/interfaces";
import { SignalHigh, SignalMedium} from "lucide-react";


export default function Difficulty({ data }: {data: Recipe}) {
  return (<p>Difficulty: {data.difficulty} {data.difficulty === "Easy" ? 
  <SignalMedium viewBox="0 -3 24 24" color="green"/> : <SignalHigh viewBox="0 -3 24 24" color="yellow"/>}</p>)
}
