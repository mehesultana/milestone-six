//36_5-3 Understanding closure and return multiples from function

/* 
const bank = (owner) => {
    balance = 0;
    return (amount) => {
        //balance = balance + amount;
        balance += amount;
        return balance;
    };
}; 
*/

const bank = (owner) => {
    balance = 0;
    return {
        deposit: (amount) => {
            //balance = balance + amount;
            balance += amount;
            return balance;
        },
        withdraw: (amount) => {
            //balance = balance - amount;
            balance -= amount;
            return balance;
        },
    };
};

const mofijBank = bank('Mofij');
console.log(mofijBank.deposit(100));
console.log(mofijBank.deposit(200));
console.log(mofijBank.deposit(300));
console.log(mofijBank.deposit(140));
console.log(mofijBank.withdraw(400));
console.log(mofijBank.withdraw(100));
