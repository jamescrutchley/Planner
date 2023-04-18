import itemCollection from "../manageCollection";


// simply calls the itemCollection's deleteObject method. 
// If I wanted to add an 'Are you sure?' step for the user, would this be a good place to do so?
// In its current form, is this module superfluous, or a valid case of code-splitting?

const clearItem = (id) => {
    let selection = itemCollection.collection.find(item => item.id == id);
    itemCollection.deleteObject(selection);
    console.log(selection, itemCollection.collection);
}

export { clearItem };