const { default: Search } = require("../models/Search");
const { elements, renderLoader, clearLoader } = require("../views/base");
import * as searchView from "../views/searchView"
import Recipe from "../models/Recipe";


const state = {};

/* ----------------------------------------SEARCH------------------------------------- */

/*GLOBAL STATE OF APP
- Search obj
- Current recipe obj
- Shopping list obj 
- Liked recipes */

const controllerSearch = async () => {
    //1. Get the query from the view
    // const query = 'tomato';
    const query = searchView.getInput();
    
    if (query){
        //2. New search obj and add to state
        state.search = new Search(query);

        //3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResults);

        try {
            //4. Search for recipes
            await state.search.getResult();

            //5. Render results to UI
            // console.log(state.search.recipe);
            clearLoader();
            searchView.renderResults(state.search.recipe);
        } catch (error) {
            alert('Error processing recipe');
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controllerSearch();
})
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline')
    // console.log(btn);
    if (btn){
        const goToPage = parseInt(btn.dataset.goto);
        searchView.clearResults();       
        searchView.renderResults(state.search.recipe, goToPage);
        // console.log(goToPage);
    }
})

/* ----------------------------------------RECIPE INFO------------------------------------- */
const controllerRecipe = async () => {

    //Get ID from URL
    const id = parseInt(window.location.hash.replace('#',''));
    console.log(id);

    if(id){

        //1. Prepare for the UI changes

        //2.Create a new recipe obj
        state.recipe = new Recipe(id);

        try {
            //3. Get recipe data
            await state.recipe.getRecipe();

            //4. Calculate servings + time

            //5. Render recipe
            console.log(state.recipe);
        } catch (error) {
            alert('Error processing recipe');
        }

    }
}
// window.addEventListener('hashchange', controllerRecipe);
// window.addEventListener('load', controllerRecipe)

['hashchange','load'].forEach(e => window.addEventListener(e,controllerRecipe));


