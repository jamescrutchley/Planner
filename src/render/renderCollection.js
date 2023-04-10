import itemCollection from '../manageCollection';
import { clearItem } from '../delete/clearItem';
import { editItem } from './userInteraction';

const renderItems = () => {
    const itemList = document.querySelector('#item-list');

    if (itemList) {
        document.body.removeChild(itemList);
    };

    const container = document.createElement('div');
    container.id = 'item-list';
    document.body.appendChild(container);
    itemCollection.collection.forEach(item => {
        container.append(renderItemBox(item));
    })
}

const renderItemBox = (item) => {
    const itemBox = document.createElement('div');

    const itemMessage = document.createElement('p');
    itemMessage.textContent = item.msg;

    const itemDate = document.createElement('p');
    itemDate.textContent = item.date;

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'open-edit-button');
    editButton.setAttribute('data-id', item.id);
    editButton.textContent = 'EDIT';

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-id', item.id);
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', function() {
        let id = deleteButton.getAttribute('data-id');
        clearItem(id);
    });
    

    itemBox.append(itemMessage, itemDate, editButton, deleteButton);
    
    return itemBox;
}


export default renderItems;