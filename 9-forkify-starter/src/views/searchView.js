const { elements } = require("./base");

export const getInput = () => {
    return elements.searchInput.value;
};

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

export const highlightSelected = (id) => {
    const arrDOM = Array.from(document.querySelectorAll('.results__link'));
    arrDOM.forEach((cur) => {
        cur.classList.remove('results__link--active');
    })

    document.querySelector(`a[href="#${id}"]`).classList.add('results__link--active');
};

export const limitRecipeTitle = (title, limit = 17) => {
    const title2 = [];
    if (title.length > limit){
        title.split(' ').reduce((acc,cur) => {
            if (acc + cur.length <= limit){
                title2.push(cur);
            }
            return acc + cur.length;
        },0)
        return `${title2.join(' ')}...`;
    }
    return title;
}

const renderRecipe = (recipe) => {
    const markup = `
    <li>
        <a class="results__link" href="#${recipe.id}">
            <figure class="results__fig">
                <img src="${recipe.image}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)} </h4>
                <p class="results__author">Nam Đại Nhân</p>
            </div>
        </a>
    </li>`;
    elements.searchList.insertAdjacentHTML('beforeend',markup);
}

const createButton = (page, type) => {
    return `
        <button class="btn-inline results__btn--${type}" data-goto="${type === 'prev' ? page - 1 : page + 1}">
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
            </svg>
            <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        </button>`;
}

const renderButtons = (page, numberRes, resPerPage) => {
    const pages = Math.ceil(numberRes / resPerPage);
    
    let btn;

    // Page 1 should have 1 button: Next Page
    if (page === 1 && pages > 1){
        btn = createButton(page,'next');
    }
    else if (page < pages){
        // 2 button: Next + Previous
        btn = `
            ${createButton(page,'next')}
            ${createButton(page,'prev')}
        `;
    }
    else if (page === pages && pages > 1){
        // Last page should have 1 button: Previous Page
        btn = createButton(page,'prev');
    }      
    
    elements.searchResPages.insertAdjacentHTML('afterbegin',btn);
    
};

export const renderResults = (recipes, page = 1, resPerPage = 4) => {

    // Render results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start,end).forEach((cur) =>{
        renderRecipe(cur);
    })

    // Render paging button
    renderButtons(page,recipes.length,resPerPage);
};