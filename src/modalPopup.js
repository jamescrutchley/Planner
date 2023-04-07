const modalPopupButton = document.querySelector('#modal-popup-button');
const addItemForm = document.querySelector('.add-item-form');

const modalPopup = () => {
    addItemForm.style.display = 'block';
}

modalPopupButton.addEventListener('click', modalPopup);

export {modalPopupButton};