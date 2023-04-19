import itemCollection from "../manageCollection";

const editItemMsgInput = document.querySelector('#edit-message');
const editItemDateInput = document.querySelector('#edit-date');
const editItemForm = document.querySelector('#edit-item-form');
const addItemForm = document.querySelector('#add-item-form');

// selectedItem matches DOM element to object instance via a data-id property assigned at element creation.
let selectedItem = null;


// let selected item properties pre-fill form inputs.
const editItem = function(id) {
    selectedItem = itemCollection.collection.find(item => item.id == id);
    console.log('item selected: ' + selectedItem);
    editItemMsgInput.value = selectedItem.msg;
    editItemDateInput.value = selectedItem.date;
    console.log('the selected item is: ' + selectedItem + id);
    editItemForm.style.display = 'block';
    addItemForm.style.display = 'none';
};

//toggles at item's 'complete' attribute.
const toggleComplete = function(id) {
    selectedItem = itemCollection.collection.find(item => item.id == id);
    console.log('toggle complete');
    itemCollection.modifyObject(selectedItem, selectedItem.msg, selectedItem.date, true);
}


// handle submission of edit form - get latest input values and pass them into the modifyObject method.
const confirmEditItem = () => {
    let messageInput = editItemMsgInput.value;
    let dateInput = editItemDateInput.value;
    itemCollection.modifyObject(selectedItem, messageInput, dateInput);
};

export { editItem, confirmEditItem, toggleComplete };