import styles from "../home.module.css";
import Search from "../Components/search";

export default function SearchAndFilter() {
  return (
    <section className={styles.searchAndFilterSection}>
        <form>
          <Search/>
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
  )
}

