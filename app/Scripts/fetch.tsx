import { Recipe, RecipeResponse } from "../Interfaces/interfaces";
let recipeCache: Recipe[] = [];
let lastUpdate: number = 0;
const MAX_AGE: number = 3600000; //1 hour in ms
const API_ENDPOINT: string = "https://dummyjson.com/recipes";
    if (!res.ok){
        throw new Error(`Response status: ${res.status}`);
    }

    const json = await res.json();
    const data: Recipe[] = json.recipes;
    return data;
  } catch (error: unknown){
    console.error(error);
  }

}

export async function fetchRecipe(id: number) {

}