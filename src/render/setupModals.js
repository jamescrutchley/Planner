import { itemFactory } from "../create/addItem";
import itemCollection from "../manageCollection";
import { editItemMessage } from "../edit/editItemMessage";

const setupModals = () => {
    const addItemButton = document.querySelector('#modal-popup-button');
    const addItemForm = document.querySelector('#add-item-form');
    const editItemForm = document.querySelector('#edit-item-form');
    const submitAddItemFormButton = document.querySelector('#submit-item-button');
    const submitEditItemFormbutton = document.querySelector('#edit-item-button');
    const editItemButtons = Array.from(document.querySelectorAll('.open-edit-button'))

    const selectedItem = null;
    
    const displayAddItem = () => {
        addItemForm.style.display = 'block';
    }
    
    const submitAddItemForm = () => {
        // add coercion and error handling here
        let messageInput = document.querySelector('#message').value;;
        let dateInput = document.querySelector('#date').value;
        itemCollection.collection.push(itemFactory(messageInput, dateInput));
        console.log(itemCollection.collection);
    }

    const editItem = function(id) {
        const selectedItem = itemCollection.collection.find(item => item.id == id);
        console.log(selectedItem);
        const editMessageInput = document.querySelector('#edit-message');
        const editDateInput =  document.querySelector('#edit-date');
        editMessageInput.value = (selectedItem.msg).toString();
        editDateInput.value = selectedItem.date;
        editItemForm.style.display = 'block';
    }

    const submitEditItemForm = () => {
        const selectedObject = selectedItem;
        let messageInput = document.querySelector('#edit-message');
        let dateInput = document.querySelector('#edit-date');
        console.log(selectedObject.msg);
        editItemMessage(selectedObject, messageInput);
    }
    
    addItemForm.addEventListener('submit', event => {
        event.preventDefault();
    });
    editItemForm.addEventListener('submit', event => {
        event.preventDefault();
    })
    submitEditItemFormbutton.addEventListener('click', submitEditItemForm);
    submitAddItemFormButton.addEventListener('click', submitAddItemForm);
    addItemButton.addEventListener('click', displayAddItem);
    
    editItemButtons.forEach(item => item.addEventListener('click', function() {
        console.log('editItemButton fired')
        let id = item.dataset.id;
        editItem(id);
    }));
}





export {setupModals};