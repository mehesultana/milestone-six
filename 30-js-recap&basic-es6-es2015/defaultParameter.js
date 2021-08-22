//30-4 Function default parameter for not provided values
function add(num1, num2 = 33) {
    // option 2
    //num2 = num2 || 0;
    // option 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}
