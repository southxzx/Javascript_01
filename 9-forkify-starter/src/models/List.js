import uniqid from 'uniqid';

export default class List{
    constructor(){
        this.items = [];
    }
    addItem(count,unit,ingredients){
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredients
        }
        this.items.push(item);
        return item;
    }
    deleteItem(id){
        // [2,3,8].splice(1,1) => return 3, original array = [2,8]

        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index,1);
    }
    updateCount(id, newCount){
        this.items.find(el => el.id === id).count = newCount;
    }
}