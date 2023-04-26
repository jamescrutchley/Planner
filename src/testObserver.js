import renderItems from "./render/renderCollection";


// simply calls a re-render at this stage.
const observeCollection = {
    update: function(selection) {
        console.log('calling a re-render...');

        renderItems();
        //setupInteraction();
    }
};

export default observeCollection;