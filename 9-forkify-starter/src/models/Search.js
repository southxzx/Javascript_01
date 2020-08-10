import { proxy, key } from "../js/config";

export default class Search{
    constructor(query){
        this.query = query;
    }
    async getResult(){
        try {
            const res = await fetch(`${proxy}https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${this.query}`);
            const data = await res.json();
            const recipe = data.results;
            this.recipe = recipe;
        } catch (error) {
            alert(error);
        }
    }
}