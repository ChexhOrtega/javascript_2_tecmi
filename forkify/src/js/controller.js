import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultView from './views/resultView.js';
import searchView from './views/searchView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function ControlRecipes() {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError(err);
    throw err;
  }
}

function init() {
  recipeView.addHandlerRender(ControlRecipes);
  searchView.addHandlerSearch(ControlSearchResults);
}

async function ControlSearchResults() {
  try {
    resultView.renderSpinner();

    const query = searchView.getQuery();

    if (!query) return;

    await model.loadSearchResults(query);

    resultView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
}

init();
