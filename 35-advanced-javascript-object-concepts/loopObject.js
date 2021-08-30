//35-4 Loop through an object using for in, for of, object entries
const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true,
};

/* 
for(let i = 0; i<10;i++){}
for(const num of numbers){} // array
for(const prop in student){} // object
*/

for (const property in bottle) {
    //console.log(property, bottle[property]);
}

const keys = Object.keys(bottle);
//console.log(keys);
for (const prop of keys) {
    console.log(prop, bottle[prop]);
}

//Advance
const entries = Object.entries(bottle);
console.log(entries);
// const [key, value] = ['color', 'yellow'];
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}

//
// const arr = ['color', 'jeans', 'tom']
// arr['color']
