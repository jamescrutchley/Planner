import "./style.scss";
import {itemFactory} from './create/addItem';
import renderItems from './render/renderCollection';
import itemCollection from './manageCollection';
import { setupInteraction } from './render/userInteraction';
import { elementSelection } from './edit/selectItem';
import setupDeleteButton from "./render/deletionOptions";
import {setupSortButton} from "./read/sortButton";
import renderMiscIcons from "./render/miscIcons";


// example items
itemCollection.collection.push(itemFactory('feed the ducks', '2023-04-09'));
itemCollection.collection.push(itemFactory('start a scheme', '2023-04-11'));
itemCollection.collection.push(itemFactory("rock climbing", '2023-04-09'));
itemCollection.collection.push(itemFactory('forest clearing', '2022-04-09'));
itemCollection.collection.push(itemFactory('Discover a new animal', '2023-04-12'));


// call these here? 
// set up an onload event listener in each module?
// renderItems needs to go first.
renderItems();
setupInteraction();
elementSelection();
setupDeleteButton();
setupSortButton();
