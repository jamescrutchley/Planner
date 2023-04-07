import {itemFactory} from './addItem';
import renderItems from './renderCollection';
import itemCollection from './manageCollection';
import { modalPopupButton } from './modalPopup';
import { elementSelection } from './selectItem';

itemCollection.collection.push(itemFactory('duck', new Date()));
itemCollection.collection.push(itemFactory('fox', new Date()));
console.log(itemCollection.collection);

renderItems();

elementSelection();
// initial render

// listen for changes and call refresh function
