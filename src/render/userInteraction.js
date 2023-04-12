import itemCollection from "../manageCollection";
import { confirmEditItem, editItem } from "../edit/editItem";


//separate the permanent buttons from the buttons generated on refresh.

const setupInteraction = () => {
    const addItemButton = document.querySelector('#modal-popup-button');
    const addItemForm = document.querySelector('#add-item-form');
    const editItemForm = document.querySelector('#edit-item-form');
    const submitAddItemFormButton = document.querySelector('#submit-item-button');
    const submitEditItemFormbutton = document.querySelector('#edit-item-button');
    const editItemButtons = Array.from(document.querySelectorAll('.open-edit-button'));
    const clearAllButton = document.querySelector('#clear-all-button');

    
    const displayAddItem = () => {
        addItemForm.style.display = 'block';
        editItemForm.style.display = 'none';
    }
    
    const submitAddItemForm = () => {
        // add coercion and error handling here
        let messageInput = document.querySelector('#message').value;;
        let dateInput = document.querySelector('#date').value;
        itemCollection.addObject(messageInput, dateInput);
    }

    // const editItem = function(id) {
    //     selectedItem = itemCollection.collection.find(item => item.id == id);
    //     console.log('item selected: ' + selectedItem);
    //     editItemMsgInput.value = selectedItem.msg;
    //     editItemDateInput.value = selectedItem.date;
    //     console.log('the selected item is: ' + selectedItem + id);
    //     editItemForm.style.display = 'block';
    // }

    // const submitEditItemForm = () => {
    //     let messageInput = document.querySelector('#edit-message').value;
    //     console.log(messageInput);
    //     itemCollection.modifyObject(selectedItem, messageInput);
    // }
    
    addItemForm.addEventListener('submit', event => {
        event.preventDefault();
    });
    editItemForm.addEventListener('submit', event => {
        event.preventDefault();
    })

    // editItemButtons.forEach(item => item.addEventListener('click', function() {
    //     console.log('editItemButton fired')
    //     let id = item.dataset.id;
    //     editItem(id);
    // }));

    

    submitEditItemFormbutton.addEventListener('click', function() {
        editItemForm.style.display = 'none';
        confirmEditItem();
    });

    submitAddItemFormButton.addEventListener('click', submitAddItemForm);

    addItemButton.addEventListener('click', displayAddItem);

    clearAllButton.addEventListener('click', function() {
        itemCollection.deleteAllObjects();
    });

}





export {setupInteraction};