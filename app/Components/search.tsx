"use client"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce";

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

// const handleSearch = useDebouncedCallback((value: string) => {
//   const params = new URLSearchParams(searchParams);
//   setIsTyping(value.trim() !== "");
//       if(value) {
//           params.set("query", value);
//       }
//       else {
//           params.delete("query");
//       }
//       replace(`${pathName}?${params.toString()}`, {scroll: false});
// }, 300);