import RecipeCard from "./Components/RecipeCard";
import fetchRecipes from "./Scripts/fetch";

export default async function Home() {

  const data = await fetchRecipes();
  return (
    <main>
      {data?.map((recipe) => <RecipeCard key={recipe.id} data={recipe}/>)}
    </main>
  );
}