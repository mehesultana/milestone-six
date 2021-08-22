//30-3 Breakup with var to have a relationship with Let and const
// break up with var
let balance = 1240;
balance = 1340;

const numbers = [45, 23, 89, 60];
// numbers = [99, 145, 3]; // not allowed
numbers.push(555);
numbers[1] = 333;

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
}

const student = { roll: 101, name: 'mofij', job: 'intern' };
student.name = 'MOfazzol';
// student = { name: 'mofazzol' };
