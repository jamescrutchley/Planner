import renderItems from "../render/renderCollection";
import itemCollection from "../manageCollection";
import dayjs from "dayjs";


//This module sets up a sort button the user can set to date ascending or descending.
//The setting at 'render' time will determine the order in which collection items are rendered in the render module.



let orderDescending = true;
const sortButton = document.querySelector('#sort-button');

const toggleRenderListOrder = () => {
    console.log('togglerenderlistorder' + orderDescending)
    orderDescending = !orderDescending;
    sortButton.classList.toggle('descending');
    renderItems();
};

const setupSortButton = () => {
    sortButton.addEventListener('click', toggleRenderListOrder);
}

const getRenderList = () => {
    let renderList = itemCollection.collection;
    orderDescending ? 
    renderList = renderList.sort((a, b) => dayjs(b.date) - dayjs(a.date)) :
    renderList = renderList.sort((a, b) => dayjs(a.date) - dayjs(b.date))
    
    return renderList;
};

export {getRenderList, setupSortButton};
