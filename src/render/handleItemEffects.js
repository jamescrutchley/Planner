// Attempt at improving UI.


const calculateHeightOfListContainer = () => {
    const listItems = document.querySelectorAll('#item-box-outer');

    console.log(listItems);

    const firstListItem = Array.from(listItems)[0];
    console.log(firstListItem);
    let heightofListItem = firstListItem.clientHeight;
    const styleTag = document.createElement('style');
    document.body.prepend(styleTag);
    styleTag.innerHTML = `.list-container{
        height: ${heightofListItem}px;
    }`;

    setTimeout(function() {
        styleTag.innerHTML += `#item-box-outer {
          transition: all 0.6s ease-out;
        }`;
      }, 0);
};

// export { calculateHeightOfListContainer };