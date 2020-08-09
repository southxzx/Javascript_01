const { elements } = require("./base");

export const getInput = () => {
    return elements.searchInput.value;
};

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchList.innerHTML = '';
}

const renderRecipe = (recipe) => {
    const markup = `
    <li>
        <a class="results__link results__link--active" href="#${recipe.id}">
            <figure class="results__fig">
                <img src="${recipe.image}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">Nam Đại Nhân</p>
            </div>
        </a>
    </li>`;
    elements.searchList.insertAdjacentHTML('beforeend',markup);
}

export const renderResults = (recipes) => {
    recipes.forEach((cur) =>{
        renderRecipe(cur);
    })
}