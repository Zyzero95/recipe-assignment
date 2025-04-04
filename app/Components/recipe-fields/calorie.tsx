import { Recipe } from "@/app/Interfaces/interfaces";
import { Utensils } from "lucide-react";

export default function Calories({data}: {data: Recipe}){
    return (<p><Utensils height="20px" width="20px"/>{`${data.caloriesPerServing} calories per serving`}</p>)
}