//35-1 Module introduction Different way to Create Object
// 1. using object literal
const student = { name: 'Sakib AL Hasaan', job: 'cricketer' };
// 2. constructor
const person = new Object();
console.log(person);

// 3.
//const human = Object.create(null);
const human = Object.create(student);
console.log(human.job);

//4. class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const people1 = new People('Manush', 12);
console.log(people1);

// 5. function
function Manush(name) {
    this.name = name;
}
const man = new Manush('kader');
console.log(man);
