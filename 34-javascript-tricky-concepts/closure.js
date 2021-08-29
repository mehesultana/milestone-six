//34-7 (advanced) Closure, encapsulation, private variable
function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    };
}
let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
