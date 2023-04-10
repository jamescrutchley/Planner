import {itemFactory} from './create/addItem';
import renderItems from './render/renderCollection';
import itemCollection from './manageCollection';
import { setupInteraction } from './render/userInteraction';
import { elementSelection } from './edit/selectItem';

itemCollection.collection.push(itemFactory('duck', '2023-04-09'));
itemCollection.collection.push(itemFactory('fox', '2023-04-11'));
itemCollection.collection.push(itemFactory("boon's climbing adventures", '2023-04-09'));
itemCollection.collection.push(itemFactory('fox', '2022-04-09'));


renderItems();
setupInteraction();
elementSelection();
