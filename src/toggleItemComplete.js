//toggle event

const toggleItem = (selection) => {
    //coercion and required checks here
    (selection.complete == false) ? selection.complete = true : selection.complete = false;
};