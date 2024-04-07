import inquirer from "inquirer";
const currencies:any ={USD:1,EUR:0.92,GBP:0.79,AED:3.67,PKR:278};

const userInput = await inquirer.prompt([
    {
        name:'fromCurrency',message:'Select From Currency: ',type:"list",choices:['USD','EUR','GBP','AED','PKR']
    },
    {
        name:'toCurrency',message:'Select To Currency: ',type:"list",choices:['USD','EUR','GBP','AED','PKR']
    },
    {
        name:'amount',message:'Enter Amount to convert:  ',type:"number"
    }
]);
let fromCurrency = currencies[userInput.fromCurrency],
    toCurrency = currencies[userInput.toCurrency],
    amountInUSD = userInput.amount/fromCurrency,
    result = amountInUSD*toCurrency;
console.log(`By converting ${userInput.fromCurrency} ${userInput.amount} in ${userInput.toCurrency} you get ${userInput.toCurrency} ${result}`);    