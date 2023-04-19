import itemCollection from "../manageCollection";


// simply calls the itemCollection's deleteObject method. 
// If I wanted to add an 'Are you sure?' step for the user, would this be a good place to do so?
// In its current form, is this module superfluous, or a valid case of code-splitting?
//  --Given, for eg. the 'clear all' function has no intermediary module - it's called in the same place the listener is added to the button. 

const clearItem = (id) => {
    let selection = itemCollection.collection.find(item => item.id == id);
    itemCollection.deleteObject(selection);
    console.log(selection, itemCollection.collection);
}

export { clearItem };