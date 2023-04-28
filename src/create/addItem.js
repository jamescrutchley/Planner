import itemCollection from "../manageCollection";
import { validateForm } from "../edit/validateForm";

const addItemForm = document.querySelector('#add-item-form');
const errorMessageSpan = document.querySelector('#add-item-message-error')


const submitAddItemForm = () => {
    // add coercion and error handling here
    let messageInput = document.querySelector('#message');
    let dateInput = document.querySelector('#date');
    if (validateForm(messageInput)) {
        itemCollection.addObject(messageInput.value, dateInput.value);
        addItemForm.style.display = 'none';
    } else {
        errorMessageSpan.textContent = "Field can't be left blank!";
        messageInput.addEventListener('input', function() {
            errorMessageSpan.textContent = '';
        })
    }

}

export { submitAddItemForm }