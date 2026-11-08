import * as model from './model.js';
import paginationView from './views/paginationView.js';
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
  paginationView.addHandlerClick(ControlPagination);
}

async function ControlSearchResults() {
  try {
    resultView.renderSpinner();

    const query = searchView.getQuery();

    if (!query) return;

    await model.loadSearchResults(query);

    resultView.render(model.getSearchResultsPage());

    paginationView.render(model.state);
  } catch (err) {
    console.log(err);
  }
}

function ControlPagination(page) {
  resultView.render(model.getSearchResultsPage(page));
  paginationView.render(model.state);
}

init();
