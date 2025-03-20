import { Recipe } from "../Interfaces/interfaces";
import RecipeCard from "./recipecard";

// Handles user input from Input field and filters the API array to render recipes that has user input included in their name
export default async function Query({searchParams, data}: {searchParams: Promise<{query: string | undefined}>, data: Recipe[]}) {
    const query = (await searchParams)?.query || '';

    const queryByName = Array.isArray(data) ? data.filter((recipe) => {
        return recipe.name.toLowerCase().includes(query.toLowerCase());
      }) : [];

  return (
    <div>
      {queryByName?.map((recipe) => <RecipeCard key={recipe.id} data={recipe}/>)}
    </div>
  )
}
