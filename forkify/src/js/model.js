import { API_URL } from '../../config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    let recipe = data.data.recipe;

    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    state.recipe = recipe;

    console.log('Valor de recipe:', state.recipe);
  } catch (err) {
    console.log(`${err} 💥💥💥💥`);
  }
};
