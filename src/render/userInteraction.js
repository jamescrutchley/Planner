import itemCollection from "../manageCollection";
import { confirmEditItem } from "../edit/editItem";
import { clearComplete } from "../delete/clearComplete";


// Display and submit 'Add Item' Form.

const setupInteraction = () => {
    const addItemButton = document.querySelector('#modal-popup-button');
    const addItemForm = document.querySelector('#add-item-form');
    const closeAddItemFormButton = document.querySelector('#close-add-form');
    const submitAddItemFormButton = document.querySelector('#submit-item-button');

    const editItemForm = document.querySelector('#edit-item-form');
    const closeEditItemFormButton = document.querySelector('#close-edit-form');
    const submitEditItemFormbutton = document.querySelector('#edit-item-button');
  
    const clearAllButton = document.querySelector('#clear-all-button');
    const clearCompleteButton = document.querySelector('#clear-complete-button');


    // display 'add item' form:
    // generic open/close modal function? Takes target and open/close params?
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
        addItemForm.style.display = 'none';
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

    clearCompleteButton.addEventListener('click', function() {
        clearComplete();
    });

    closeAddItemFormButton.addEventListener('click', function() {
        addItemForm.style.display = 'none';
    })

    closeEditItemFormButton.addEventListener('click', function() {
        editItemForm.style.display = 'none';
    })

}


export {setupInteraction};