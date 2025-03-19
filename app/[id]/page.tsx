import { Recipe } from "../Interfaces/interfaces";
import { fetchRecipe } from "../Scripts/fetch";
import TagBubble from "../Components/tagbubble";
import Image from "next/image";
import styles from "./page.module.css";

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
    const id: number = (await params).id;
    const activeRecipe: Recipe = await fetchRecipe(id);
    return (<main className={styles.mainPage}>
        <header>
            <Image
            src={activeRecipe.image}
            alt={`an image of ${activeRecipe.name}`}
            width={400}
            height={400}/>
            <h1>{activeRecipe.name}</h1>
            <ul className={styles.tagList}>{activeRecipe.mealType.map((mealType) => <TagBubble tagName={mealType} key={mealType}/>)}</ul>         
        </header>
    </main>);
}