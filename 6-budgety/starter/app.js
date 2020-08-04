// BUDGET CONTROLLER
var bugdetController = (function(){
    
    var Expense = function(id,des,val){
        this.id = id;
        this.des = des;
        this.val = val;
    };
    var Income = function(id,des,val){
        this.id = id;
        this.des = des;
        this.val = val;
    };

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.val;
        })
        data.totals[type] = sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    //Public method
    return{
        addItem: function(type,des,val){
            var newItem, ID;

            // Get the ID is the next value of the last value.
            if (data.allItems[type].length === 0){
                ID = 0;
            } else{
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }            

            // Check type
            if (type === 'exp'){
                newItem = new Expense(ID,des,val);
            }
            else if (type === 'inc'){
                newItem = new Income(ID,des,val);
            }      
            
            // Push new Item into array
            data.allItems[type].push(newItem);

            // Return new element
            return newItem;
        },
        deleteItem : function(type, id){
            var ids, index;
            ids = data.allItems[type].map(current => current.id);
            index = ids.indexOf(id);

            if (index !== -1){
                data.allItems[type].splice(index,1);
            }
        },
        calculateBudget : function(){

            // Calculate total Income & Expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // Calculate the budget: Income - Expenses 
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percentage of Income that we spent
            if (data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc)*100);
            }      
            else{
                data.percentage = -1;
            }     

        },
        getBudget : function(){
            return{
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
        testing: function(){
            console.log(data);
        }
    };

})();

// UI CONTROLLER
var UIController = (function(){

    var DOMstring = {
        inputType: '.add__type',
        inputDes: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLable: '.budget__value',
        incLable: '.budget__income--value',
        expLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
    };

    return {
        getInput : function(){
            return{
                type: document.querySelector(DOMstring.inputType).value,
                description: document.querySelector(DOMstring.inputDes).value,
                value: parseFloat(document.querySelector(DOMstring.inputValue).value)
            };
        },
        addListItem : function(obj, type){
            var html, element;

            // Create HTML string with placeholder text
            if (type === 'inc'){
                element = DOMstring.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div></div></div>';
            } else if (type === 'exp'){
                element = DOMstring.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }

            //Replace the placeholder with data
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%', obj.des);
            newHtml = newHtml.replace('%value%',obj.val);

            // Insert HTML to the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);


        },
        deleteListItem : function(selectorID){

            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);

        },
        clearFields : function(){
            var fields, fieldArr;
            fields = document.querySelectorAll(DOMstring.inputDes + ', ' + DOMstring.inputValue);
            
            // Convert list to array
            fieldArr = Array.prototype.slice.call(fields);
            fieldArr.forEach(function(current,index,array){
                current.value = '';
            });
            fieldArr[0].focus();

        },
        displayBudget : function(obj){

            document.querySelector(DOMstring.budgetLable).textContent = obj.budget;
            document.querySelector(DOMstring.incLable).textContent = obj.totalInc;
            document.querySelector(DOMstring.expLabel).textContent = obj.totalExp;        
            if (obj.percentage > 0){
                document.querySelector(DOMstring.percentageLabel).textContent = obj.percentage + '%';
            }
            else{
                document.querySelector(DOMstring.percentageLabel).textContent = '--'
            }

        },
        getDOM : function(){
            return DOMstring;
        }
    };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl){

    var setupEventListener = function(){
        var DOMstring = UICtrl.getDOM();
        document.querySelector(DOMstring.inputBtn).addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress',function(event){
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
        document.querySelector(DOMstring.container).addEventListener('click',ctrlDeleteItem)
    }

    var updateBudget = function(){

        //1. Calculate the Budget
        budgetCtrl.calculateBudget();

        //2. Return the Budget
        var budget = budgetCtrl.getBudget();

        //3. Display the Budget on the UI
        UICtrl.displayBudget(budget);
    }

    var ctrlAddItem = function(){

        var input, newItem;

        //1. Get the field input data
        input = UICtrl.getInput();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0){

            //2. Add the item to the budget controller
            newItem =  budgetCtrl.addItem(input.type, input.description, input.value);

            //3. Add the Item to the UI
            UICtrl.addListItem(newItem,input.type);

            //4. Clear fields
            UICtrl.clearFields();

            //5. Calculate & Update budget
            updateBudget();
        }

    }

    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID){

            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            //1. Delete the item from data structure
            budgetCtrl.deleteItem(type,ID);

            //2. Delete the item from UI
            UIController.deleteListItem(itemID);

            //3. Update budget
            updateBudget();
        }
    }

    return{
        init : function(){
            console.log('This application has stared');
            UICtrl.displayBudget({            
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1})
            setupEventListener();
        }
    };


})(bugdetController,UIController);

controller.init();
