
let counter = 0; 

const itemFactory = (msg, date, complete=false) => {
    const proto = {
    msg,
    date,
    complete,
    edit(input) {
        this.msg = input;
    },
    toggle: () => console.log('toggle function'),
  }
    const item = {msg, date, complete, id: counter++};
    return Object.assign(proto, item);
}