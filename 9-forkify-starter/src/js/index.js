const { default: Search } = require("../models/Search");
const { elements, renderLoader, clearLoader } = require("../views/base");
import * as searchView from "../views/searchView"
import * as recipeView from "../views/recipeView"
import * as listView from "../views/listView"
import * as likeView from "../views/likeView"
import Recipe from "../models/Recipe";
import List from "../models/List";
import Like from "../models/Like";

const state = {};
// window.state = state;

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

    if(id){
        
        //Highlight selector of each search item
        if(state.search) searchView.highlightSelected(id);

        //1. Prepare for the UI changes
        renderLoader(elements.recipe);
        recipeView.clearRecipe();

        //2.Create a new recipe obj
        state.recipe = new Recipe(id);

        try {
            //3. Get recipe data
            await state.recipe.getRecipe();
            await state.recipe.parseIngredients();

            //4. Calculate servings + time

            //5. Render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe, state.like.isLike(id));

        } catch (error) {
            alert('Error processing recipe');
        }

    }
}
// window.addEventListener('hashchange', controllerRecipe);
// window.addEventListener('load', controllerRecipe)

['hashchange','load'].forEach(e => window.addEventListener(e,controllerRecipe));


/* ----------------------------------------SHOPPING------------------------------------- */


const controllerList = () => {
    // Create a new list if it's not yet
    if(!state.list) state.list = new List();

    // Add each ingredient to the list & UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    })
}

// Handle delete and update list shopping event
elements.shoppingList.addEventListener('click', e => {

    //User click to wherever in the item, it will recognize this class
    const id = e.target.closest('.shopping__item').dataset.itemid;

    //Delete button
    if (e.target.matches('.shopping__delete, .shopping__delete *')){
        // Delete from the state
        state.list.deleteItem(id);

        // Delete from the UI
        listView.deleteItem(id);

    //Update count  
    } else if (e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id,val);
    }
})

/* ----------------------------------------LIKE CONTROLLER------------------------------------- */

const controllerLike = () => {
    if (!state.like) state.like = new Like();

    const id = state.recipe.id;

    // If the button is NOT liked
    if (!state.like.isLike(id)){
        // Add like to the state
        const newLike = state.like.addLike(id, state.recipe.title, state.recipe.img);

        //  Toggle the like button
        likeView.toggleLikeButton(true);

        // Add to the UI
        likeView.renderLike(newLike);

    // If the button is liked
    } else{
        // Remove like to the state
        state.like.deleteLike(id);

        //  Toggle the like button
        likeView.toggleLikeButton(false);

        // Remove to the UI
        likeView.deleteLike(id)

    }

    likeView.toggleLikeMenu(state.like.getNumLikes());

}

// Restore like recipes whenever the page is loaded
window.addEventListener('load', () => {
    state.like = new Like();

    // Restore likes
    state.like.readStorage();

    // Toggle the button
    likeView.toggleLikeMenu(state.like.getNumLikes());

    // Render the existing likes
    state.like.likes.forEach(el => likeView.renderLike(el));
})

//Handling recipe button + -
elements.recipe.addEventListener('click', (e) => {
    if(e.target.matches('.btn-dec, .btn-dec *')){
        //Decrease button
        if (state.recipe.serving > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }

    } else if (e.target.matches('.btn-inc, .btn-inc *')){
        // Increase button
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);

    } else if (e.target.matches('.recipe__btn, .recipe__btn *')){
        // Add to cart button
        controllerList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')){
        // Like button
        controllerLike();
    }
})
