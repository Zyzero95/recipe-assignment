import fetchRecipes from "./Scripts/fetch";
import styles from "./home.module.css";
import SearchAndFilter from "./Components/searchandfilter";
import Query from "./Components/query";

export default async function Home({searchParams}:  {searchParams?: {query?: string;}}) {
  
  const data = await fetchRecipes();

  return (
    <main className={styles.main}>
      <SearchAndFilter />
      <ul>
        <li><Query searchParams={searchParams} data={data}/></li>
      </ul>
    </main>
  );
}