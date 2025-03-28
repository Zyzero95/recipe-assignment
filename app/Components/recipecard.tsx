"use client"
import Link from "next/link";
import Image from "next/image";
import { Recipe } from "../Interfaces/interfaces";
import styles from "./recipecard.module.css"
import Difficulty from "./recipe-fields/difficulty";
import Preptime from "./recipe-fields/preptime";
import Title from "./recipe-fields/title";
import Tags from "./recipe-fields/tags";
import Ratings from "./recipe-fields/rating";

export interface RecipeData{
  data: Recipe
}

// Component for rendering recipes
function RecipeCard({ data }: RecipeData) {
  return (
    <Link className={styles.recipeCardLink} href={`/${data.id}`}>
      <section className={styles.recipeCardWrapper}>
        <figure className={styles.imgFig}>
          <Image 
            src={data.image}
            alt={`Image depicting ${data.name}`}
            fill={true}
          />
        </figure>
        <section className={styles.recipeCardTitle}><Title data={data}/></section>
        <section className={styles.recipeCardTags}><Tags data={data}/></section>
        <section className={styles.recipeCardRating}><Ratings data={data}/></section>
        <section className={styles.recipeCardDifficulty}><Difficulty data={data}/></section>
        <section className={styles.recipeCardCookTime}><Preptime data={data}/></section>
      </section>
    </Link>
  )
}

export default RecipeCard;