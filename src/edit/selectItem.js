
const elementSelection = () => {
    const itemList = Array.from(document.querySelector('#item-list').childNodes);

    const selectItem = (target) => {
        target.classList.toggle('selected');
        //target.style.backgroundColor = 'grey';
    }
    
    if (itemList) {
        itemList.forEach(item => item.addEventListener('click', function() {
            selectItem(item)
        }));
    }
}




export {elementSelection};