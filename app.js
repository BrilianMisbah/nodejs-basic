// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

const coffee = require("./coffee");
const { firstName, lastName } = require('./user');

console.log(coffee);
console.log(firstName);
console.log(lastName);
