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

    let selectedItem = null;
    
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
        selectedItem = itemCollection.collection.find(item => item.id == id);
        console.log('the selected item is: ' + selectedItem + id);
        editItemForm.style.display = 'block';
    }

    const submitEditItemForm = () => {
        let messageInput = document.querySelector('#edit-message').value;
        console.log(messageInput);
        itemCollection.modifyObject(selectedItem, messageInput);
    }
    
    addItemForm.addEventListener('submit', event => {
        event.preventDefault();
    });
    editItemForm.addEventListener('submit', event => {
        event.preventDefault();
    })

    editItemButtons.forEach(item => item.addEventListener('click', function() {
        console.log('editItemButton fired')
        let id = item.dataset.id;
        editItem(id);
    }));

    

    submitEditItemFormbutton.addEventListener('click', function() {
        submitEditItemForm();
    });

    submitAddItemFormButton.addEventListener('click', submitAddItemForm);

    addItemButton.addEventListener('click', displayAddItem);
    

}





export {setupModals};