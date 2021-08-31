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

// expected output: Array [8, 6, 7, 9]

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
