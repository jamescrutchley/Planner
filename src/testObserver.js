// import itemCollection from "./manageCollection";
import renderItems from "./render/renderCollection";
// import { setupInteraction } from "./render/userInteraction";


// simply calls a re-render at this stage.
const observeCollection = {
    update: function(selection) {
        console.log('calling a re-render...');

        renderItems();
        //setupInteraction();
    }
};

export default observeCollection;