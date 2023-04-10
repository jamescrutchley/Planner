import itemCollection from "../manageCollection";

const editItemMessage = (selection, newMessage) => {
    //coercion/ required checks here.
    const selectedItem = itemCollection.collection.find(item => item.id === selection);
    //selection - itemCollection.collection[id]
    console.log(selection);
    selectedItem.edit(newMessage);
}

export { editItemMessage }