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
