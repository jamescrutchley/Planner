// Validation module.

// May need to modify app structure/flow.

// 'userInteraction' module is responsbible for submitting and toggling form visibility.
// 'edit form' logic exists in 'editItem' module and is again called from userInteraction. 

// intended behaviour:
    // user opens 'edit item' form with inputs appropriately pre-filled
    // form will display warning if user attempts to submit form with empty inputs
    // warning message will be cleared when user inputs data/closes form.
    // if inputs are valid form will then toggle to invisible and array will be updated.

//  possible implementation:
    // userInteraction: open 'edit form'.
    // call edit-item pre-fill form function.
    // call validateForm function and pass back to (userInteraction? editItem?) to submit data and toggle form visibility if/when successful.


