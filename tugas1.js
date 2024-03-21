const { Console } = require('console');
const readline = require('readline');
const validator = require("validator")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function dataName(){
rl.question('what is your name? ', (name) => {
    if(!validator.isAlpha(name)) {
        dataName()
    }else{
        isiNoHp(name)
    }
})
}

function isiNoHp(name){
rl.question('what is your number Hp? ', (number) => {
    if(!validator.isMobilePhone(number)) {
        isiNoHp(number)
    }else{
        isiEmail(name,number)
}})
}

function isiEmail(name,number){
rl.question('what is your email?', (email) => {
    if(!validator.isEmail(email)) {
        isiEmail(name,number)
    }else{
        console.log(`Hi, ${name}!. Your number is ${number} and your email is ${email}`);

        rl.close();
    }
})


}
dataName();