"use client"
import Link from "next/link";
import Image from "next/image";
import { Recipe } from "../Interfaces/interfaces";
import styles from "./recipecard.module.css"
import { CookingPot, CircleGauge, Utensils, Star, MessageSquare, Tag } from "lucide-react";

export interface RecipeData{
  data: Recipe
}

function RecipeCard({ data }: RecipeData) {
  return (
    <Link className={styles.recipeCardLink} href="">
      <div className={styles.recipeCardWrapper}>
        <figure className={styles.imgFig}>
          <Image 
            src={data.image}
            alt={`Image depicting ${data.name}`}
            fill={true}
          />
        </figure>
        <h2 className={styles.recipeCardTitle}>{data.name}</h2>
        <h3 className={styles.recipeCardRating}>{data.rating}<Star size={16} fill="yellow" color="yellow"/>{data.reviewCount}<MessageSquare size={16}/></h3>
        <section className={styles.recipeCardTagWrapper}>
          <h3 className={styles.recipeCardTagHeading}><Tag size={16}/></h3>
          {data.tags.map((tag) => <h4 className={styles.recipeCardTag} key={tag}>{tag}</h4>)}
        </section>
        <section className={styles.recipeCardMealWrapper}>
          <h3 className={styles.recipeCardMealHeading}>Meal Type:</h3>
          {data.mealType.map((type) => <h4 className={styles.recipeCardMeal} key={type}>{type}</h4>)}
        </section>
        <p className={styles.recipeCardCookTime}><CookingPot/> {data.prepTimeMinutes + data.cookTimeMinutes}min</p>
        <p className={styles.recipeCardDifficulty}>Difficulty: <CircleGauge size={20} color={data.difficulty == "Easy"? "green" : (data.difficulty == "Medium" ? "yellow" : "red")}/></p>
        <p className={styles.recipeCardCuisine}><Utensils size={20}/> {data.cuisine}</p>
      </div>
    </Link>
  )
}

export default RecipeCard;