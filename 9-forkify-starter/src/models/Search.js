export default class Search{
    constructor(query){
        this.query = query;
    }
    async getResult(){
        const key = 'a85dc4d68ef346cba2dbd31680f8eced';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
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