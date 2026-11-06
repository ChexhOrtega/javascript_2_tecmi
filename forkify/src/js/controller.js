import * as model from './model.js';
import recipeView from './views/RecipeView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    console.log('Valor de id:', id);

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
}

const events = ['hashchange', 'load'];

events.forEach(ev => window.addEventListener(ev, controlRecipes));