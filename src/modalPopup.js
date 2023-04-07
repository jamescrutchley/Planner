import { itemFactory } from "./addItem";
import itemCollection from "./manageCollection";

const setupModals = () => {
    const addItemButton = document.querySelector('#modal-popup-button');
    const addItemForm = document.querySelector('#add-item-form');
    const editItemForm = document.querySelector('#edit-item-form');
    const submitAddItemFormButton = document.querySelector('#submit-item-button');
    const editItemButtons = Array.from(document.querySelectorAll('.open-edit-button'))
    
    const addItem = () => {
        addItemForm.style.display = 'block';
    }
    
    const editItem = (id) => {
        const selection = itemCollection.collection.find(item => item.id == id);
        console.log(selection);
        const editMessageInput = document.querySelector('#edit-message');
        const editDateInput =  document.querySelector('#edit-date');
        editMessageInput.value = (selection.msg).toString();
        editDateInput.value = selection.date;
        editItemForm.style.display = 'block';
    }
    
    const submitAddItemForm = () => {
        // add coercion and error handling here
        let messageInput = document.querySelector('#message').value;;
        let dateInput = document.querySelector('#date').value;
        itemCollection.collection.push(itemFactory(messageInput, dateInput));
        console.log(itemCollection.collection);
    }
    
    addItemForm.addEventListener('submit', event => {
        event.preventDefault()
    });
    submitAddItemFormButton.addEventListener('click', submitAddItemForm);
    addItemButton.addEventListener('click', addItem);
    
    editItemButtons.forEach(item => item.addEventListener('click', function() {
        console.log('editItemButton fired')
        let id = item.dataset.id;
        editItem(id);
    }));
}





export {setupModals};