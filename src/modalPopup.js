import { itemFactory } from "./addItem";
import itemCollection from "./manageCollection";

const modalPopupButton = document.querySelector('#modal-popup-button');
const addItemForm = document.querySelector('#add-item-form');
const submitAddItemFormButton = document.querySelector('#submit-item-button');

const modalPopup = () => {
    addItemForm.style.display = 'block';
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
modalPopupButton.addEventListener('click', modalPopup);

export {modalPopupButton, submitAddItemFormButton};