import itemCollection from "../manageCollection";
import { confirmEditItem, editItem } from "../edit/editItem";


// Display and submit 'Add Item' Form.

const setupInteraction = () => {
    const addItemButton = document.querySelector('#modal-popup-button');
    const addItemForm = document.querySelector('#add-item-form');
    const editItemForm = document.querySelector('#edit-item-form');
    const submitAddItemFormButton = document.querySelector('#submit-item-button');
    const submitEditItemFormbutton = document.querySelector('#edit-item-button');
    const editItemButtons = Array.from(document.querySelectorAll('.open-edit-button'));
    const clearAllButton = document.querySelector('#clear-all-button');


    // display 'add item' form:
    const displayAddItem = () => {
        addItemForm.style.display = 'block';
        editItemForm.style.display = 'none';
    }

    addItemButton.addEventListener('click', displayAddItem);

    
    // submit 'add item' form:
    const submitAddItemForm = () => {
        // add coercion and error handling here
        let messageInput = document.querySelector('#message').value;;
        let dateInput = document.querySelector('#date').value;
        itemCollection.addObject(messageInput, dateInput);
    }

    submitAddItemFormButton.addEventListener('click', submitAddItemForm);


    //prevent default form submission behaviour
    
    addItemForm.addEventListener('submit', event => {
        event.preventDefault();
    });
    editItemForm.addEventListener('submit', event => {
        event.preventDefault();
    })

    //submit edit item form - call external 'confirmation' function:
    submitEditItemFormbutton.addEventListener('click', function() {
        editItemForm.style.display = 'none';
        confirmEditItem();
    });


    // clear all button calls item collection's 'deleteAllObjects' method:
    clearAllButton.addEventListener('click', function() {
        itemCollection.deleteAllObjects();
    });

}


export {setupInteraction};