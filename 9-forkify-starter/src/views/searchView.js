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

const limitRecipeTitle = (title, limit = 17) => {
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
        <a class="results__link results__link--active" href="#${recipe.id}">
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

export const renderResults = (recipes) => {
    recipes.forEach((cur) =>{
        renderRecipe(cur);
    })
}