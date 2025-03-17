import RecipeCard from "./Components/RecipeCard";
import fetchRecipes from "./Scripts/fetch";
import styles from "./home.module.css";

export default async function Home() {

  const data = await fetchRecipes();
  return (
    <main className={styles.main}>
      <section className={styles.searchAndFilterSection}>
        <form>
          <label htmlFor="mealName">Meal name:</label>
          <input type="text" name="mealName" id="mealName" placeholder="Ex. Vegetarian Stir-Fry"></input>
          <label htmlFor="filterSelect" className={styles.filterLabel}>Filter</label>
          <select>
            <option>filter by name</option>
            <option>filter by tag</option>
            <option>filter by mealtype</option>
            <option>filter by difficulty</option>
            <option>filter by cuisine</option>
          </select>
        </form>
      </section>
      <ul>
        <li>{data?.map((recipe) => <RecipeCard key={recipe.id} data={recipe}/>)}</li>
      </ul>
    </main>
  );
}