import "./style.scss";
import {itemFactory} from './create/addItem';
import renderItems from './render/renderCollection';
import itemCollection from './manageCollection';
import { setupInteraction } from './render/userInteraction';
import { elementSelection } from './edit/selectItem';
import setupDeleteButton from "./render/deleteButton";

itemCollection.collection.push(itemFactory('feed the ducks', '2023-04-09'));
itemCollection.collection.push(itemFactory('start a scheme', '2023-04-11'));
itemCollection.collection.push(itemFactory("rock climbing", '2023-04-09'));
itemCollection.collection.push(itemFactory('forest clearing', '2022-04-09'));
itemCollection.collection.push(itemFactory('dentist', '2023-04-12'));



renderItems();
setupInteraction();
elementSelection();
setupDeleteButton();
