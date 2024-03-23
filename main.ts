#! /usr/bin/env node

import inquirer from "inquirer";

// let GuessNumber = "18"

let GuessNumber = Math.floor(Math.random() *10 +1)

const guess = await inquirer.prompt([
    { message: "Guess A Number 1-10 : " ,Type: "number" ,name: "UserNumber"  }   
    ])

if(guess.UserNumber === GuessNumber){
    console.log("You Guessed Right")
}

else{
    console.log("You Guessed Wrong")
    console.log(`The Number Was ${GuessNumber}`)
}

