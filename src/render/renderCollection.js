import { clearItem } from '../delete/clearItem';
import {editItem, toggleComplete} from '../edit/editItem';
import getTime from './getTime';
import { getRenderList } from '../read/sortButton';

const renderItems = () => {

    //currently doing a full re-render on change:
    //Ways of making more efficient?
    //Will require modifying existing structure?

    const existingItemList = document.querySelector('#item-list');
    const contentArea = document.querySelector('#content-area');


    //try/catch here is a cosmetic fix only - will add infinite item-list divs if you spam the sort button.
    // easiest solution - disable action buttons for 500ms?
    // If itemList exists, adds a 'deleted' class then deletes the element after 500ms.
    
        // if (existingItemList) {
        //     existingItemList.classList.add('deleted');
        //     setTimeout(function() {
        //         try {
        //             contentArea.removeChild(existingItemList);
        //         } catch {
        //             //
        //         }
        //       }, 500);

        // };

    // Everything functions as it should this way, but doesn't look as good - visible refresh. 

        if (existingItemList) {
            contentArea.removeChild(existingItemList);
        };

    // creates an 'item-list' element
    const itemList = document.createElement('div');
    itemList.id = 'item-list';
    contentArea.appendChild(itemList);


    // get collection to render ordered by date either descending or ascending. 
    let renderList = getRenderList();

    // for each item object, create an 'item box' and append it
    renderList.forEach(item => {
        itemList.append(renderItemBox(item));
    })
}

// create individual 'item-boxes' based on item objects. 
// clickable elements are given data-ids that facilitate selection and modification of the objects.
// event listeners are added to clickable objects here - seemed convenient - should this be done elsewhere?
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