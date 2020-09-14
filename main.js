
const ricardo = require('./modules/ricardo.js');

var  test = ricardo.get('https://www.ricardocuisine.com/recettes/3856-pate-au-poulet').then(client => { console.log(client) });;

console.log(test);