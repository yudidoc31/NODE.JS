const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is your name? ', (name) => {
rl.question('what is your number Hp? ', (number) => {
rl.question('what is your email? ', (email) => {
    console.log(`Hi, ${name}!. Your number is ${number} and your email is ${email}`);

         rl.close();
        })
    })
});