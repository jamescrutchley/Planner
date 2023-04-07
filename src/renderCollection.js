import itemCollection from './manageCollection';

const renderItems = () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    itemCollection.collection.forEach(item => {
        const textElement = document.createElement('p');
        textElement.textContent = item.msg;
        container.appendChild(textElement);
    })
}


export default renderItems;