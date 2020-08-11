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
    parseIngredients(){

        const unitsLong = ['tablespoons','tablespoon', 'ounce', 'ounces', 'teaspoons', 'teaspoon','cups','pounds', 'kg'];
        const unitsShort = ['tbsp','tbsp','oz','oz','tsp','tsp','cup','pound', 'kg', 'g', 'ml', 'l'];

        // Convert to a array of string
        const arrIngredients = [];
        this.ingredients.forEach((cur) => {
            arrIngredients.push(cur['original'])
        })

        const newIngredients = arrIngredients.map(el => {           
            //1. Uniform unit
            let ingredient = el;
            unitsLong.forEach((unit,i) => {
                ingredient = ingredient.replace(unit,unitsShort[i]);
            });

            //2. Remove parenthese
            ingredient = ingredient.replace(/ *\([^)]*\) */g, "");

            //3. Parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

            let objIng;
            if (unitIndex > -1){
                // There's a unit
                // Ex. 4 1/2 cups => [4 , 1/2] => eval('4+1/2') = 4.5
                // Ex. 4 ounce => [4]
                const arrCount = arrIng.slice(0,unitIndex);
                let count = 0;
                if (arrCount.length === 1){
                    count = arrIng[0];
                }
                else{
                    count = eval(arrIng.slice(0,unitIndex).join('+'));
                }
                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                };
            }
            else if (parseInt(arrIng[0],10)){
                // There's not a unit but a number at first 
                objIng = {
                    count: parseInt(arrIng[0],10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                };
            }
            else if (unitIndex === -1){
                // There's no any unit & number
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                };
            }

            // return ingredient;
            return objIng;
        });
        this.ingredients = newIngredients;
    }
    updateServings(type){

        // Servings
        const newServings = type === 'dec' ? this.serving - 1 : this.serving + 1;       

        // Ingredients
        this.ingredients.forEach((cur) => {
            cur.count *= (newServings / this.serving).toFixed(2);
        })

        this.serving = newServings;
    }
}