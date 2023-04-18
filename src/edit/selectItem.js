
// unused/unfinished module. Was originally planning to have a globally 'active' item to facilitate user interaction.
// now using data-ids attached to interactive elements instead

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