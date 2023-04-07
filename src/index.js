import {counter, itemFactory} from './addItem';
import renderItems from './renderCollection';
import itemCollection from './manageCollection';

itemCollection.collection.push(itemFactory('duck', new Date()));
itemCollection.collection.push(itemFactory('fox', new Date()));

renderItems();
// initial render

// listen for changes and call refresh function
