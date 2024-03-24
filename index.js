#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number between 1 to 6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You Guess Correct Number: ");
}
else {
    console.log("Try Again! You Guess Wrong Number");
}
;
