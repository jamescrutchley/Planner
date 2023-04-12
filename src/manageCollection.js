import observeCollection from "./testObserver";
import { itemFactory } from "./create/addItem";

// each method can share a 'check if valid object' function.

const itemCollection = {
    collection: [],
    observers: [observeCollection],

    addObserver: function(observer) {
        this.observers.push(observer);
    },

    notifyObservers: function(selection) {
        this.observers.forEach(observer => observer.update(selection));
      },

    addObject: function(msg, date) {
        const newItem = itemFactory(msg, date);
        this.collection.push(newItem);
        console.log('ADD: ' + newItem, this.collection);
        this.notifyObservers(newItem);
    },

    modifyObject: function(selection, newMsg, newDate) {
        //check if valid argument
        console.log('MODIFY: ' + selection);
        selection.msg = newMsg;
        selection.date = newDate;
        this.notifyObservers(selection);
    },

    deleteAllObjects: function() {
        //are you sure?
        const newCollection = [];
        this.collection = newCollection;
        this.notifyObservers(newCollection);
    },

    deleteObject: function(selection) {
        //check if valid argument
        console.log('DELETE OBJECT: ' + selection);
        const newCollection = this.collection.filter(item => item !== selection);
        this.collection = newCollection;
        this.notifyObservers(selection);
        //console.log('After collection: ' + this.collection);
    }
}




export default itemCollection;