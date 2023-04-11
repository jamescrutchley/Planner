import renderItems from "../render/renderCollection";
import itemCollection from "../manageCollection";
import dayjs from "dayjs";

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
    switch (orderDescending) {
        case true:
            renderList = renderList.sort((a, b) => dayjs(b.date) - dayjs(a.date));
            break;
        case false:
            renderList = renderList.sort((a, b) => dayjs(a.date) - dayjs(b.date));
            break;
        default:
            return renderList;
            break;
    }
    return renderList;
};

export {getRenderList, setupSortButton};
