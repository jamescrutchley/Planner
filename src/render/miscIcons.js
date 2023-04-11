import headerIconSVG from '../diary.svg'


const header = document.querySelector('#header');
const headerIcon = document.createElement('img');
headerIcon.src = headerIconSVG;
header.appendChild(headerIcon);

export default header;