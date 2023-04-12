import itemCollection from '../manageCollection';
import { clearItem } from '../delete/clearItem';
import {editItem, toggleComplete} from '../edit/editItem';
import getTime from './getTime';
import dayjs from 'dayjs';
import { getRenderList } from '../read/sortButton';

const renderItems = () => {

    //currently doing a full re-render on change: update to make more efficient.

    const itemList = document.querySelector('#item-list');
    const contentArea = document.querySelector('#content-area');


    //try/catch here is a cosmetic fix only - will add infinite item-list divs if you spam the sort button.
    if (itemList) {
        itemList.classList.add('deleted');
        setTimeout(function() {
            try {
                contentArea.removeChild(itemList);
            } catch {
                //
            }
          }, 500);

    };

    setTimeout( function() {
        
    }, 500);

    const container = document.createElement('div');
    container.id = 'item-list';
    contentArea.appendChild(container);

    let renderList = getRenderList();

    renderList.forEach(item => {
        container.append(renderItemBox(item));
    })
}

const renderItemBox = (item) => {
    const itemBox = document.createElement('div');

    const itemMessage = document.createElement('p');
    itemMessage.textContent = item.msg;
    itemMessage.setAttribute('data-id', item.id);
    if (item.complete) {
        itemMessage.classList.add('complete');
        itemBox.classList.add('complete');
    };
    itemMessage.addEventListener('click', function() {
        let id = itemMessage.getAttribute('data-id');
        toggleComplete(id);
    })

    const itemDate = document.createElement('p');
    itemDate.textContent = getTime(item.date);

    const buttonBox = document.createElement('div');
    buttonBox.setAttribute('id', 'button-box');


    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'open-edit-button');
    editButton.setAttribute('data-id', item.id);
    editButton.addEventListener('click', function() {
        let id = editButton.getAttribute('data-id');
        editItem(id);
    })
    editButton.textContent = 'EDIT';

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-id', item.id);
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', function() {
        let id = deleteButton.getAttribute('data-id');
        clearItem(id);
    });
    

    itemBox.append(itemMessage, itemDate, buttonBox);
    buttonBox.append(editButton, deleteButton)
    
    return itemBox;
}


export default renderItems;