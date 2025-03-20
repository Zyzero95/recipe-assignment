import RecipeCard from "./Components/recipecard";
import fetchRecipes from "./Scripts/fetch";
import styles from "./home.module.css";
import SearchAndFilter from "./Components/searchandfilter";

export default async function Home({searchParams}: {searchParams?: {query?: string;}}) {
  const query = searchParams?.query || '';
  const data = await fetchRecipes();

  const queryByName = Array.isArray(data) ? data.filter((recipe) => {
    return recipe.name.toLowerCase().includes(query.toLowerCase());
  }) : [];


  return (
    <main className={styles.main}>
      <SearchAndFilter />
      <ul>
        <li>{queryByName?.map((recipe) => <RecipeCard key={recipe.id} data={recipe}/>)}</li>
      </ul>
    </main>
  );
}