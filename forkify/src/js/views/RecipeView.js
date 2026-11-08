import View from './view.js';

class RecipeView extends View {
  _parentElement;

  constructor() {
    super();
    this._parentElement = document.querySelector('.recipe');
  }

  addHandlerRender(handler) {
    const events = ['hashchange', 'load'];

    events.forEach(ev => window.addEventListener(ev, handler));
  }
}

const recipeView = new RecipeView();

export default recipeView;
