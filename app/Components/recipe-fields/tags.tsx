import { Recipe } from "@/app/Interfaces/interfaces";
import TagBubble from "../tagbubble";
import styles from "./tags.module.css";

export default function Tags({data}: {data: Recipe}){
    let tagCount: number = 1;
    return(<ul className={styles.tagList}>
        <TagBubble tagName={data.cuisine} key={`recipe${data.id}-tag-cuisine`} color="var(--tag-color-cuisine)"/>
        {data.mealType.map((r) => <TagBubble tagName={r} key={`recipe${data.id}-tag-${tagCount++}`} color="var(--tag-color-meal)"/>)}
        {data.tags.map((r) => <TagBubble tagName={r} key={`recipe${data.id}-tag-${tagCount++}`} color="var(--tag-color-default)"/>)}
    </ul>)
}