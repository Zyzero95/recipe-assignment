import Link from "next/link";
import Image from "next/image";
import { Recipe } from "../Interfaces/interfaces";
import styles from "./recipecard.module.css"

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
        <h3 className={styles.recipeCardRating}>Rating: {data.rating}/5 Reviews: {data.reviewCount} </h3>
        <section className={styles.recipeCardTagWrapper}>
          <h3 className={styles.recipeCardTagHeading}>Tags:</h3>
          {data.tags.map((tag) => <h4 className={styles.recipeCardTag} key={tag}>{tag}</h4>)}
        </section>
        <section className={styles.recipeCardMealWrapper}>
          <h3 className={styles.recipeCardMealHeading}>Meal Type:</h3>
          {data.mealType.map((type) => <h4 className={styles.recipeCardMeal} key={type}>{type}</h4>)}
        </section>
        <p className={styles.recipeCardPrepTime}>Prep time: {data.prepTimeMinutes}min</p>
        <p className={styles.recipeCardCookTime}>Cook time: {data.cookTimeMinutes}min</p>
        <p className={styles.recipeCardDifficulty}>Diffulty: {data.difficulty}</p>
        <p className={styles.recipeCardCuisine}>Cuisine: {data.cuisine}</p>
      </div>
    </Link>
  )
}

export default RecipeCard;