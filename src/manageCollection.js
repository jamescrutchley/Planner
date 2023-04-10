import { editItemMessage } from "./edit/editItemMessage";
import observeCollection from "./testObserver";

// each method can share a 'check if valid object' function.

const clearAllButton = document.querySelector('#clear-all-button');

const itemCollection = {
    collection: [],
    observers: [observeCollection],

    addObserver: function(observer) {
        this.observers.push(observer);
    },

    notifyObservers: function(selection) {
        this.observers.forEach(observer => observer.update(selection));
      },

    modifyObject: function(selection, newMsg) {
        //check if valid argument
        console.log('MODIFY: ' + selection);
        selection.msg = newMsg;
        this.notifyObservers(selection);
    },

    deleteAllObjects: function() {
        //are you sure?
        this.collection = [];
        this.notifyObservers(this.collection);
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

clearAllButton.addEventListener('click', itemCollection.clearCollection);



export default itemCollection;