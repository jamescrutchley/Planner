//event:

const editItem = (selection, newMessage) => {
    //coercion/ required checks here.
    const selectedItem = itemCollection.collection.find(item => item.id === selection);
    //selection - itemCollection.collection[id]
    selectedItem.edit(newMessage);
}

