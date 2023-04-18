import headerIconSVG from '../diary.svg'

//import image sources, create images.

const header = document.querySelector('#header');
const headerIcon = document.createElement('img');
headerIcon.src = headerIconSVG;
header.appendChild(headerIcon);

export default header;