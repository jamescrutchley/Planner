import observeCollection from "./testObserver";

// each method can share a 'check if valid object' function.

const clearAllButton = document.querySelector('#clear-all-button');

const itemCollection = {
    collection: [],
    observers: [],

    addObserver: function(observer) {
        this.observers.push(observer);
    },

    notifyObservers: function() {
        this.observers.forEach(observer => observer.update(this));
      },

    modifyObject: function(selection) {
        //
    },

    deleteAllObjects: function() {
        this.collection = [];
        //console.log(this.collection);
    },

    deleteObject: function(selection) {
        console.log('Before collection: ' + this.collection);
        const newCollection = this.collection.filter(item => item !== selection);
        this.collection = newCollection;
        this.notifyObservers(this);
        //console.log('After collection: ' + this.collection);
    }
}

clearAllButton.addEventListener('click', itemCollection.clearCollection);

itemCollection.addObserver(observeCollection);


export default itemCollection;