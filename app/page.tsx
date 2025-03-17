import RecipeCard from "./Components/RecipeCard";
import fetchRecipes from "./Scripts/fetch";

export default async function Home() {

  const data = await fetchRecipes();
  return (
    <main>
      <section>
        <form>
          <label htmlFor="mealName">Meal name:</label>
          <input></input>
        </form>
      </section>
      <ul>
        <li>{data?.map((recipe) => <RecipeCard key={recipe.id} data={recipe}/>)}</li>
      </ul>
    </main>
  );
}