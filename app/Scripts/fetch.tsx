import { Recipe, RecipeResponse } from "../Interfaces/interfaces";
let recipeCache: Recipe[] = [];
let lastUpdate: number = 0;
const MAX_AGE: number = 3600000; //1 hour in ms
const API_ENDPOINT: string = "https://dummyjson.com/recipes";
export async function fetchRecipe(id: number): Promise<Recipe> {
  await updateRecipeData();
  if(id >= recipeCache.length)
    throw new Error("Invalid ID");
  return recipeCache[id];
}

//Will update the recipe data if the current data is old or missing.
async function updateRecipeData() {
  if(((Date.now() - lastUpdate) > MAX_AGE ) && (lastUpdate !== 0))
    return;
  let complete: boolean = false;
  let recipeCounter = 0;
  const recipes: Recipe[] = [];
  while(!complete){
    const response: RecipeResponse | null = await getPage(recipeCounter);
    if (response === null)
    {
      console.error("Something went wrong with the file updating");
      return;
    }
    recipeCounter += response.limit;
    response.recipes.map((r) => {recipes.push(r)});
    if(response.total === (response.skip + response.limit))
      complete = true;
  }
  lastUpdate = Date.now();
  recipeCache = recipes;
}

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