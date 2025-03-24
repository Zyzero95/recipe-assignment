import styles from "./searchandfilter.module.css";
import Search from "../Components/search";
import Filter from "../Components/filter";

// Component that renders Search and Filter features.
export default function SearchAndFilter() {
  return (
    <section className={styles.searchAndFilterSection}>
        <form>
          <label htmlFor="mealName" className={styles.searchLabel}>Meal name:</label>
          <Search/>
          <label htmlFor="filterSelect" className={styles.filterLabel}>Filter</label>
          <Filter/>
        </form>
      </section>
  )
}

