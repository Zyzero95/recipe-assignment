import { Recipe } from "../Interfaces/interfaces";
import { fetchRecipe } from "../Scripts/fetch";
import TagBubble from "../Components/tagbubble";
import Image from "next/image";
import styles from "./page.module.css";
import { ClockFading, Star } from "lucide-react";
import CheckBoxList from "../Components/checkBoxList";
import Tags from "../Components/recipe-fields/tags";
import Ratings from "../Components/recipe-fields/rating";
import Difficulty from "../Components/recipe-fields/difficulty";
import Preptime from "../Components/recipe-fields/preptime";
import Title from "../Components/recipe-fields/title";
import Calories from "../Components/recipe-fields/calorie";

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
    const id: number = (await params).id;
    const activeRecipe: Recipe = await fetchRecipe(id);
    return (<>
        <header className={styles.flexLine} id="main">
            <summary className={styles.textCard}>
                <Title data={activeRecipe}/>
                <Tags data={activeRecipe}/>
                <Ratings data={activeRecipe}/>
                <Calories data={activeRecipe} />
                <Difficulty data={activeRecipe}/>
                <Preptime data={activeRecipe}/>
            </summary>
            <aside className={styles.imageCard}>
                <Image
                src={activeRecipe.image}
                alt={`an image of ${activeRecipe.name}`}
                width={500}
                height={500}/>
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