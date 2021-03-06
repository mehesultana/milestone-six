//1. object with property ( string, boolean , number, object, array, method which will return a property)
const mySelf = {
    name: 'Mehe',
    id: 357,
    isStudent: true,
    money: 500,
    bestFriend: {
        name: 'you',
        id: 436,
    },
    subject: ['English', 'Botany', 'Chemistry'],
    buyBook: function (taka) {
        this.money = this.money - taka;
        return this.money;
    },
};

const myMoney = mySelf.buyBook(100);
console.log(myMoney);

// template string. minimum 3 property will be dynamic (nested object property, array second element, another property)

const user = {
    id: 404,
    info: {
        name: 'Kibria',
        address: {
            country: 'Bangladesh',
            city: 'Sylhet',
        },
    },
};
const friends = ['abul', 'babul', 'kabul', 'sabul'];

const favouritePlace = ['kajir bazar', 'audi'];

const fullInfo = `This is ${user.info.name}. My friend is ${friends[1]} . our favourite place is ${favouritePlace[1]}`;

console.log(fullInfo);

//(3.1) no parameter arrow function . return 89

//(3.2)single parameter arrow function . will divide input by 7

const doMath = (x) => {
    const divide = x / 7;
    return divide;
};
const result = doMath(490);
console.log(result);

//(3.3) arrow function with two parameters

const doMath2 = (a, b) => {
    const sum = a + b;
    const divide2 = sum / 2;
    return divide2;
};

const result2 = doMath2(100, 234);
console.log(result2);

//(3.3) multi-line arrow function . two parameters

const doMath3 = (p, q) => {
    const plusP = p + 7;
    const plusQ = q + 7;
    const sum = plusP + plusQ;
    return sum;
};
const result3 = doMath3(14, 83);
console.log(result3);

//4. map divide each element by 7
const numbers = [49, 14, 28, 35, 42, 54, 35, 34, 76];
const output = numbers.map((number) => number / 7);
console.log(output);

// 5. map forEach, filter, find
//map forEach
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },
];
products.forEach((product) => console.log(product));
const productPrices = products.map((product) => product.price);
console.log(productPrices);

//filter
const numbers2 = [74, 86, 85, 12, 56, 15, 83, 74, 25, 56];
const bigNumber = numbers2.filter((number) => number > 70);
console.log(bigNumber);

//find
const products2 = [
    { name: 'phone', price: 20000, color: 'gray' },
    { name: 'leptop', price: 100000, color: 'black' },
    { name: 'bottle', price: 10, color: 'white' },
    { name: 'watch', price: 200, color: 'gray' },
];
const grayItem = products2.find((product) => product.color == 'gray');
console.log(grayItem);

// 6. declare a object & destructuring a object
const company = {
    name: 'Robi',
    ceo: { id: 57, name: 'mehe' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js',
        },
    },
};
const { work } = company.web;
const { first, third } = company.web.tech;
console.log(work, first, third);
