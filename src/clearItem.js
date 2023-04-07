import itemCollection from "./manageCollection";

const clearItem = (id) => {
    let selection = itemCollection.collection.find(item => item.id == id);
    itemCollection.removeSelected(selection);
    console.log(selection, itemCollection.collection);
}

export { clearItem };