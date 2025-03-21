import { Recipe } from "../Interfaces/interfaces";
import { fetchRecipe } from "../Scripts/fetch";
import TagBubble from "../Components/tagbubble";
import Image from "next/image";
import styles from "./page.module.css";
import { ClockFading, Star } from "lucide-react";
import CheckBoxList from "../Components/checkBoxList";

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
    const id: number = (await params).id;
    const activeRecipe: Recipe = await fetchRecipe(id);
    return (<>
        <header className={styles.flexLine}>
            <div className={styles.imageCard}>
                <Image
                src={activeRecipe.image}
                alt={`an image of ${activeRecipe.name}`}
                width={500}
                height={500}/>
            </div>
            <aside className={styles.textCard}>
                <h1>{activeRecipe.name}</h1>
                <ul className={styles.tagList}>
                    {activeRecipe.mealType.concat(activeRecipe.tags).map((mealType) => 
                    <TagBubble tagName={mealType} key={mealType}/>)}
                </ul>
                <h2><Star fill="var(--brown)" color="var(--brown)"/>{`${activeRecipe.rating}(${activeRecipe.reviewCount})`}</h2>
                <h2>{activeRecipe.difficulty} recipe</h2>
                <h2><ClockFading/>{`${activeRecipe.cookTimeMinutes + activeRecipe.prepTimeMinutes} minutes`}</h2>
            </aside>
        </header>
        <main className={styles.flexLine}>
            <section className={styles.textCard}>
                <ul>
                    <CheckBoxList items={activeRecipe.ingredients}/>
                </ul>
            </section>
            <section className={styles.textCard}>
                <ol>
                    <CheckBoxList items={activeRecipe.instructions}/>
                </ol>
            </section>
        </main>
    </>);
}