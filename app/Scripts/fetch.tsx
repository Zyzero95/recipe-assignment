import { Recipe, RecipeResponse } from "../Interfaces/interfaces";
let recipeCache: Recipe[] = [];
let lastUpdate: number = 0;
const MAX_AGE: number = 3600000; //1 hour in ms
const API_ENDPOINT: string = "https://dummyjson.com/recipes";
async function getPage(current: number): Promise<RecipeResponse | null>{
  console.log(current);
  try {
    const res: Response = await fetch(`${API_ENDPOINT}?skip=${current}`);
    if (!res.ok){
        throw new Error(`Response status: ${res.status}`);
    }
    const json = await res.json();
    return json;
  } catch (error: unknown){
    console.error(error);
  }
  return null
}