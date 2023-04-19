import trashIcon from "../assets/trash.svg";

// delete button options popup. 

//Expand to have a dedicated 'modal controller' module?
//Several 'popup' elements to manage - edit form, add form, delete button options, etc. Best way to manage?


const setupDeleteButton = () => {

  const deleteOptionsContainer = document.querySelector(
    "#delete-options-container"
  );
  const deleteButtons = document.querySelectorAll(".delete-button");
  const deleteOptionsButton = document.querySelector("#delete-options-button");
  const deleteOptionsButtonIcon = document.createElement("img");
  deleteOptionsButtonIcon.src = trashIcon;
  deleteOptionsButtonIcon.setAttribute("id", "delete-options-icon");
  deleteOptionsButton.appendChild(deleteOptionsButtonIcon);

  const toggleDeleteOptions = ((e) => {
    let initialState = true;

    // prevent bubbling. Best practice?
    if (e) {
      e.stopPropagation();
    }

    return (where = null, e) => {
      e.stopPropagation();

      console.log("Toggle!");

      // do nothing when body is clicked and delete options aren't visible.
      if (where == "body" && initialState == true) {
        console.log("returning");
        return;
      }

      console.log("initial" + initialState);
      initialState = !initialState;
      console.log("final" + initialState);

      deleteOptionsButton.classList.toggle("hidden");
      deleteOptionsContainer.classList.toggle("hidden");
      deleteButtons.forEach((button) => button.classList.toggle("hidden"));
    };
  })();


  //event listeners for delete buttons.

  deleteOptionsButton.addEventListener("click", function (event) {
    toggleDeleteOptions(null, event);
  });

  deleteButtons.forEach((button) =>
    button.addEventListener("click", function (event) {
      toggleDeleteOptions(null, event);
    })
  );

  // document body. 

  document.body.addEventListener("click", function (event) {
    toggleDeleteOptions("body", event);
  });
};

export default setupDeleteButton;
