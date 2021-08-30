//35-2 Object method property review
const student = {
    id: 101,
    money: 5000,
    name: 'Mehe',
    major: 'Zoology',
    isRich: false,
    subject: ['English', 'Botany', 'Chemistry'],
    bestFriend: {
        name: 'Trish',
        major: 'Zoology',
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expence, tips) {
        this.money = this.money - expence - tips;
        return this.money;
    },
};
student.takeExam();
const remaining1 = student.treatDey(900, 100);
console.log(remaining1);

const remaining2 = student.treatDey(900, 50);
console.log(remaining2);
