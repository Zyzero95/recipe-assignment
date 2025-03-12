import { Recipe } from "../Interfaces/interfaces";

const API_URL = 'https://dummyjson.com/recipes?limit=10';


export default async function fetchRecipes() {
  
  try {
    const res = await fetch(API_URL);
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