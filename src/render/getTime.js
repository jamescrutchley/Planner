const getTime = (datestring) => {
    let timeSince = Date.now() - datestring;
    switch (true) {
        case (timeSince > 31536000000):
            return `${(Math.round(timeSince / 31536000000))} years ago`;
            break;
        case (timeSince > 2629746000):
            return `${(Math.round(timeSince / 2629746000))} months ago`;
            break;
        case (timeSince > 657436500):
            return `${(Math.round(timeSince / 657436500))} weeks ago`;
            break;
        case (timeSince > 93919500):
            return `${(Math.round(timeSince / 93919500))} days ago`;
            break;
        case (timeSince > 3913312.5):
            return `${(Math.round(timeSince / 3913312.5))} hours ago`;
            break;
        case (timeSince > 60000):
            return `${(Math.round(timeSince / 60000))} minutes ago`;
            break;
        case (timeSince < 60000):
            return `Just now`;
            break;
        default:
            return '';
            break;            
    } 
}

export default getTime;