"use client"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce";

// uses hooks to find out when user input is coming in, and storing that data for the Query component to use
const Search = () => {
  const searchparams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((searchTerm: string) => {
    const params = new URLSearchParams(searchparams);
    if (searchTerm) {
      params.set("query", searchTerm);
    }
    else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <label htmlFor="mealName">Meal name:</label>
      <input type="text" name="mealName" id="mealName" defaultValue={searchparams.get("query")?.toString()} onChange={(e) => {handleSearch(e.target.value)}}></input>
    </div>
  )
}

export default Search