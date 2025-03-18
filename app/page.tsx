import RecipeCard from "./Components/recipecard";
import fetchRecipes from "./Scripts/fetch";
import styles from "./home.module.css";
import SearchAndFilter from "./Components/searchandfilter";

export default async function Home() {

  const data = await fetchRecipes();
  return (
    <main className={styles.main}>
      <SearchAndFilter />
      <ul>
        <li>{data?.map((recipe) => <RecipeCard key={recipe.id} data={recipe}/>)}</li>
      </ul>
    </main>
  );
}