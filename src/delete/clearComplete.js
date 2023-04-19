import itemCollection from "../manageCollection";


// with current set up, each time deleteObject is called a re-render takes place.
// Could set up a new method that involves simply passing a new array to the item collection to replace the current one?
// Could improve the 'Always re-render everything' solution to updating the page.

const clearComplete = () => {
    console.log('clear complete called');
    let completedItems = itemCollection.collection.filter(item => item.complete === true);
    console.log(completedItems);
    completedItems.forEach(item => itemCollection.deleteObject(item));

}

export { clearComplete };