import fetchRecipes from "./Scripts/fetch";
import styles from "./home.module.css";
import SearchAndFilter from "./Components/searchandfilter";
import Query from "./Components/query";

// Home Page. Using components to render it on page.
export default async function Home({searchParams}:  {searchParams: Promise<{query: string | undefined; filter: string | undefined;}>}) {
  
  const data = await fetchRecipes();

  return (
    <main className={styles.main} id="main">
      <SearchAndFilter />
      <ul>
        <li><Query searchParams={searchParams} data={data}/></li>
      </ul>
    </main>
  );
}