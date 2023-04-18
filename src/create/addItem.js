
// factory function to create object instances. 
// 'complete' always false on object creation.
// counter simply reflects the number of times itemFactory is called. Better ways to uniquely identify objects?

let counter = 0; 

const itemFactory = (msg, date, complete=false) => {
    const proto = {
    msg,
    date,
    complete,
  }
    const item = {msg, date, complete, id: counter++};
    return Object.assign(proto, item);
}

export {counter, itemFactory};
