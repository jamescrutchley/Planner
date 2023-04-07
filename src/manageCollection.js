const clearAllButton = document.querySelector('#clear-all-button');

const itemCollection = {
    collection: [],
    clearCollection: function() {
        this.collection = [];
        console.log(this.collection);
    },
    removeSelected: (selection) => {
        collection = collection.filter(item => item !== selection);
    }
}

clearAllButton.addEventListener('click', itemCollection.clearCollection);

export default itemCollection;