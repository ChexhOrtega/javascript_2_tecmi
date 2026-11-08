class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    
    return query;
  }

  addHandlerListener(handler) {
    const events = ['click'];

    events.forEach(ev => this._parentEl.addEventListener(ev, handler));
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
}

const searchView = new SearchView();

export default searchView;
