const itemCollection = {
    collection: [],
    clearCollection: () => {
        collection = [];
        //render collection
    },
    removeSelected: (selection) => {
        collection = collection.filter(item => item !== selection);
    }
}
