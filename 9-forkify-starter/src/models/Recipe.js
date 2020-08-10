import { proxy, key } from "../js/config";


export default class Recipe{
    constructor(id){
        this.id = id;
    }
    async getRecipe(){
        try {
            const res = await fetch(`${proxy}https://api.spoonacular.com/recipes/${this.id}/information?apiKey=${key}`);
            const data = await res.json();
            // console.log(data);
            this.title = data.title;
            this.img = data.image;
            this.url = data.sourceUrl;
            this.ingredients = data.extendedIngredients;
            this.time = data.cookingMinutes;
            this.serving = data.servings;
        } catch (error) {
            alert(error);
        }
    }
}