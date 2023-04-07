const clearAllButton = document.querySelector('#clear-all-button');

const itemCollection = {
    collection: [],
    clearCollection: function() {
        this.collection = [];
        console.log(this.collection);
    },
    removeSelected: function(selection) {
        console.log('Before collection: ' + this.collection);
        const newCollection = this.collection.filter(item => item !== selection);
        this.collection = newCollection;
        console.log('After collection: ' + this.collection);
    }
}

clearAllButton.addEventListener('click', itemCollection.clearCollection);

export default itemCollection;