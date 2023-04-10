import itemCollection from "./manageCollection";
import renderItems from "./render/renderCollection";
import { setupInteraction } from "./render/userInteraction";

const observeCollection = {
    update: function(selection) {
        console.log('calling a re-render...');

        renderItems();
        //setupInteraction();
    }
};

export default observeCollection;