const { EventEmitter } = require('events');

// Object Param
const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}!`);
}

// Regular Param
const birthdayEvent2Listener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

const myEventEmitter = new EventEmitter();

myEventEmitter.on('birthday', birthdayEventListener);
myEventEmitter.on('birthday2', birthdayEvent2Listener);

myEventEmitter.emit('birthday', { name: 'Ian' });
myEventEmitter.emit('birthday2', 'Ian');