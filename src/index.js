import {itemFactory} from './addItem';
import renderItems from './renderCollection';
import itemCollection from './manageCollection';
import { setupModals } from './modalPopup';
import { elementSelection } from './selectItem';

itemCollection.collection.push(itemFactory('duck', new Date()));
itemCollection.collection.push(itemFactory('fox', new Date()));
itemCollection.collection.push(itemFactory("boon's climbing adventures", new Date()));
console.log(itemCollection.collection);

renderItems();
setupModals();

elementSelection();
// initial render

// listen for changes and call refresh function
