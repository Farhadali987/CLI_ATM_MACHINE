import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 20000;
let myPin = 12345;

console.log(chalk.yellowBright("Welcome To Farhad Ali ATM."));

let ansewePIn = await inquirer.prompt([
  {
    name: "userPin",
    type: "number",
    message: "Enter your pinCode:",
  },
]);

if (ansewePIn.userPin === myPin) {
  console.log(chalk.green("You Entered Correct Pin Code..."));
  let option = await inquirer.prompt([
    {
      name: "selected",
      type: "list",
      message: "Select operator to perfom operation..!",
      choices: ["Withdraw", "Check Balance", "Fast Cash", "Exit"],
    },
  ]);
  if (option.selected === "Withdraw") {
    let amount = await inquirer.prompt([
      {
        message: "Enter your withdraw amount",
        type: "number",
        name: "pay",
      },
    ]);
    if (amount.pay <= myBalance) {
      myBalance -= amount.pay;

      console.log(chalk.yellowBright(`Your remaining balance is ${myBalance}`));
    } else {
      console.log(chalk.red("Your balance is insufficient..!"));
    }
  } else if (option.selected === "Check Balance") {
    console.log(chalk.cyan(`Your current balance is ${myBalance}.`));
  } else if (option.selected === "Fast Cash") {
    let select = await inquirer.prompt([
      {
        message: "Select your withdrawl amount",
        type: "rawlist",
        name: "list",
        choices: [1000, 5000, 10000, 15000, 20000],
      },
    ]);
    myBalance -= select.list;
    console.log(chalk.green(`Your remaining balance is ${myBalance}`))
  }else if(option.selected==="Exit"){
    console.log(chalk.yellowBright("OK Allah Hafiz."))
  }
} else {
  console.log(chalk.red("You have Entered Incorrect Password!"));
}
