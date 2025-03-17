import Link from "next/link";
import Image from "next/image";
import { Recipe } from "../Interfaces/interfaces";

export interface RecipeData{
  data: Recipe
}

function RecipeCard({ data }: RecipeData) {
  return (
    <Link href="">
      <div className="recipeCardWrapper">
        <figure className="imgFig">
          <Image 
            src={data.image}
            alt={`Image depicting ${data.name}`}
            width={500}
            height={500}
          />
        </figure>
        <h2 className="recipeCardHeading">{data.name}</h2>
        <h3 className="recipeCardRating">{data.rating}</h3>
      </div>
    </Link>
  )
}

export default RecipeCard;