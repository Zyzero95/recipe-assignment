import { Recipe } from "../Interfaces/interfaces";
import RecipeCard from "./recipecard";

// Handles user input from Input field and filters the API array to render recipes that has user input included in their name
export default async function Query({searchParams, data}: {searchParams: Promise<{query: string | undefined; filter: string | undefined;}>, data: Recipe[]}) {
    const query = (await searchParams)?.query || '';
    const filter = (await searchParams)?.filter || '';

    let sortByFilter: Recipe[] = [];

    if(filter !== "default" && sortByFilter.length === 0){
      sortByFilter = data;
      sortByFilter.sort((a, b) => {
        if( filter === "name"){
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if(nameA < nameB) {
           return -1;
          }
          if(nameA > nameB){
            return 1;
          }
          return 0;
          }
        else if( filter === "difficulty"){
          const diffA = a.difficulty.toLowerCase();
          const diffB = b.difficulty.toLowerCase();
          if(diffA < diffB){
            return -1;
          }
          if(diffA > diffB){
            return 1;
          }
          return 0;
        }
        else if( filter === "cuisine"){
          const cuisineA = a.cuisine.toLowerCase();
          const cuisineB = b.cuisine.toLowerCase();
          if(cuisineA < cuisineB){
            return -1;
          }
          if(cuisineA > cuisineB){
            return 1;
          }
          return 0;
        }
      })
    }
    else {
      sortByFilter = [];
    }

    const queryByName = Array.isArray(data) ?  
    (sortByFilter.length === 0 ?
      data.filter((recipe) => {
        return recipe.name.toLowerCase().includes(query.toLowerCase());
      }) : 
      sortByFilter.filter((recipe) => {
        return recipe.name.toLowerCase().includes(query.toLowerCase());
      })): [];

  return (
    <div>
      {queryByName?.map((recipe) => <RecipeCard key={recipe.id} data={recipe}/>)}
    </div>
  )
}
