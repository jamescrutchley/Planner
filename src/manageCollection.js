import observeCollection from "./testObserver";
import { itemFactory } from "./create/addItemFactory";

// to-do: input validation. Right place to do it? "server side"



// itemCollection Object:
// collection array contains 'items'.
// observer calls re-renders when notified. (Superfluous? Call re-render directly? Original plan was to have it work out...
// ... which objects required re-rendering, but it currently just calls a complete re-render.)
const itemCollection = {
    collection: [],
    observers: [observeCollection],

    // Add an observer to observer array. Unused.
    addObserver: function(observer) {
        this.observers.push(observer);
    },

    // notify observers of some change.
    notifyObservers: function(selection) {
        this.observers.forEach(observer => observer.update(selection));
      },

    // construct new item, add it to collection. 
    addObject: function(msg, date) {
        const newItem = itemFactory(msg, date);
        this.collection.push(newItem);
        this.notifyObservers(newItem);
    },

    // modify an object in the collection. 
    // when 'complete' passed in just toggles the complete property. 
    // otherwise, updates the message and date properties.
    modifyObject: function(selection, newMsg, newDate, complete=null) {
        //check if valid argument
        if (complete) {
            selection.complete = !selection.complete;
            console.log(selection.complete);
        }
        console.log('MODIFY: ' + selection);
        selection.msg = newMsg;
        selection.date = newDate;
        this.notifyObservers(selection);
    },

    // clears the collection array.
    deleteAllObjects: function() {
        //are you sure?
        const newCollection = [];
        this.collection = newCollection;
        this.notifyObservers(newCollection);
    },

    //filters out an object from collection, re-assigns collection to filtered array. Good practice?
    deleteObject: function(selection) {
        //check if valid argument
        console.log('DELETE OBJECT: ' + selection);
        const newCollection = this.collection.filter(item => item !== selection);
        this.collection = newCollection;
        this.notifyObservers(selection);
    }
}


export default itemCollection;