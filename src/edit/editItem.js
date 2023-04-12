import itemCollection from "../manageCollection";

const editItemMsgInput = document.querySelector('#edit-message');
const editItemDateInput = document.querySelector('#edit-date');
const editItemForm = document.querySelector('#edit-item-form');


let selectedItem = null;

const editItem = function(id) {
    selectedItem = itemCollection.collection.find(item => item.id == id);
    console.log('item selected: ' + selectedItem);
    editItemMsgInput.value = selectedItem.msg;
    editItemDateInput.value = selectedItem.date;
    console.log('the selected item is: ' + selectedItem + id);
    editItemForm.style.display = 'block';
};

const confirmEditItem = () => {
    let messageInput = editItemMsgInput.value;
    let dateInput = editItemDateInput.value;
    itemCollection.modifyObject(selectedItem, messageInput, dateInput);
};

export { editItem, confirmEditItem };