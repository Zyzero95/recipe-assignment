"use client"
import Link from "next/link";
import Image from "next/image";
import { Recipe } from "../Interfaces/interfaces";
import styles from "./recipecard.module.css"
import { Utensils, Star, MessageSquare, Tag } from "lucide-react";
import Difficulty from "./recipe-fields/difficulty";
import Preptime from "./recipe-fields/preptime";
import Title from "./recipe-fields/title";
import Tags from "./recipe-fields/tags";

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
        <section className={styles.recipeCardRating}><p className={styles.recipeCardRating}>{data.rating}<Star size={16} fill="yellow" color="yellow"/>{data.reviewCount}<MessageSquare size={16}/></p></section>
        <Difficulty data={data} cssClass="recipeCardDifficulty"/>
        <Preptime data={data} cssClass="recipeCardCookTime"/>
      </section>
    </Link>
  )
}

export default RecipeCard;