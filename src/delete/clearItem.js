import itemCollection from "../manageCollection";

const clearItem = (id) => {
    let selection = itemCollection.collection.find(item => item.id == id);
    itemCollection.deleteObject(selection);
    console.log(selection, itemCollection.collection);
}

export { clearItem };