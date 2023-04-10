import itemCollection from "./manageCollection";
import renderItems from "./render/renderCollection";

const observeCollection = {
    update: function(selection) {
        console.log('calling a re-render...');

        renderItems();
    }
};

export default observeCollection;