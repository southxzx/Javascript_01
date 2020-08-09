const { default: Search } = require("../models/Search");
const { elements, renderLoader, clearLoader } = require("../views/base");
import * as searchView from "../views/searchView"

/*GLOBAL STATE OF APP
- Search obj
- Current recipe obj
- Shopping list obj 
- Liked recipes */
const state = {};

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

        //4. Search for recipes
        await state.search.getResult();

        //5. Render results to UI
        // console.log(state.search.recipe);
        clearLoader();
        searchView.renderResults(state.search.recipe);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controllerSearch();
})

