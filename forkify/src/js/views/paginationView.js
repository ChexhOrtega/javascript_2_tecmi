import View from './view.js';
const icons = new URL('../../img/icons.svg', import.meta.url).href;

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  constructor() {
    super();
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const { page, search, resultsPerPage } = this._data;
    const numPages = Math.ceil(
      search.results.length / resultsPerPage,
    );

    if (page === 1 && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next" data-goto="${page + 1}">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
    }

    if (page === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev" data-goto="${page - 1}">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
        </button>`;
    }

    if (page > 1 && page < numPages) {
      return `
        <button class="btn--inline pagination__btn--prev" data-goto="${page - 1}">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
        </button>
        <button class="btn--inline pagination__btn--next" data-goto="${page + 1}">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
    }

    return '';
  }
}

const paginationView = new PaginationView();

export default paginationView;