//35-3 Keys, values, entities, delete, seal, freeze
const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true,
};
// getting all properties names
const keys = Object.keys(bottle);
console.log(keys);

// get all values
const values = Object.values(bottle);
console.log(values);

//get key & value
const pairs = Object.entries(bottle);
console.log(pairs);

//delete poperty
/* delete bottle.isCleaned;
console.log(bottle); */

//seal poperty
Object.seal(bottle); //can't add or delete poperty but can change poperty value

Object.freeze(bottle); //can't change , add  or delete
bottle.price = 100;
bottle.height = 16;
console.log(bottle);

delete bottle.isCleaned;
console.log(bottle);
