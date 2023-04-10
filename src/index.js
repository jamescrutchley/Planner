import {itemFactory} from './create/addItem';
import renderItems from './render/renderCollection';
import itemCollection from './manageCollection';
import { setupInteraction } from './render/userInteraction';
import { elementSelection } from './edit/selectItem';

itemCollection.collection.push(itemFactory('duck', new Date()));
itemCollection.collection.push(itemFactory('fox', new Date()));
itemCollection.collection.push(itemFactory("boon's climbing adventures", new Date()));
console.log(itemCollection.collection);

renderItems();
setupModals();

elementSelection();
// initial render

// listen for changes and call refresh function
