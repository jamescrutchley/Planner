import trashIcon from '../trash.svg';


const setupDeleteButton = () => {
    console.log(trashIcon);

    const deleteOptionsContainer = document.querySelector('#delete-options-container');
    const deleteButtons = document.querySelectorAll('.delete-button');
    const deleteOptionsButton = document.querySelector('#delete-options-button');
    const deleteOptionsButtonIcon = document.createElement('img');
    deleteOptionsButtonIcon.src = trashIcon;
    deleteOptionsButtonIcon.setAttribute('id', 'delete-options-icon');
    deleteOptionsButton.appendChild(deleteOptionsButtonIcon);
    
    const toggleDeleteOptions = ((e) => {

        let initialState = true;

        if (e) {
            e.stopPropagation();
          }
      
        return (where = null, e) => {
          e.stopPropagation();
      
          console.log('Toggle!')
      
          if (where == 'body' && initialState == true) {
            console.log('returning')
            return;
          }
      
          console.log('initial' + initialState)
          initialState = !initialState;
          console.log('final' + initialState);
      
          deleteOptionsButton.classList.toggle('hidden');
          deleteOptionsContainer.classList.toggle('hidden');
          deleteButtons.forEach(button => button.classList.toggle('hidden'));
        };
      })();
      
      deleteOptionsButton.addEventListener('click', function(event) {
        toggleDeleteOptions(null, event);
    });
    
    deleteButtons.forEach(button => button.addEventListener('click', function(event) {
        toggleDeleteOptions(null, event);
    }));
    
    document.body.addEventListener('click', function(event) {
        toggleDeleteOptions('body', event);
    });
}



export default setupDeleteButton;
