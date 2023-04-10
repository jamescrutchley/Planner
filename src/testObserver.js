import itemCollection from "./manageCollection";
import renderItems from "./render/renderCollection";

const observeCollection = {
    update: function(selection) {
        console.log('i will delete the ' + selection);
        console.log(selection.id);

        renderItems();
    }
};

export default observeCollection;