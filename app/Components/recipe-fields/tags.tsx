import { Recipe } from "@/app/Interfaces/interfaces";
import TagBubble from "../tagbubble";

export default function Tags({data}: {data: Recipe}){
    let tagCount: number = 1;
    return(<>
        <TagBubble tagName={data.cuisine} key={`recipe${data.id}-tag-cuisine`} color="var(--tag-color-cuisine)"/>
        {data.mealType.map((r) => <TagBubble tagName={r} key={`recipe${data.id}-tag-${tagCount++}`} color="var(--tag-color-meal)"/>)}
        {data.tags.map((r) => <TagBubble tagName={r} key={`recipe${data.id}-tag-${tagCount++}`} color="var(--tag-color-default)"/>)}
    </>)
}