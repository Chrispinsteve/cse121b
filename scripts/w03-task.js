/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value)
    let addNumber2 = Number(document.querySelector("#add2").value)

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector("#subtract1").value)
    let subtractNumber2 = Number(document.querySelector("#subtract2").value)

    document.querySelector("#difference").value= subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
}

function multiplyNumbers(){
    let multiplyNumber1 = Number(document.querySelector("#factor1").value)
    let multiplyNumber2 = Number(document.querySelector("#factor2").value)

    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)

/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return  number1 / number2
}

function divideNumbers(){
    let dividend = Number(document.querySelector("#dividend").value)
    let divisor = Number(document.querySelector("#divisor").value)

    document.querySelector("#quotient").value = divide(dividend, divisor);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers)

/* Decision Structure */
function getTotal() {
    let subTotal = parseFloat(document.getElementById("subtotal").value);
    
    if (document.getElementById("member").checked) {
        subTotal = subTotal - subTotal * 0.2; 
    }

    document.getElementById("total").textContent = subTotal.toFixed(2)
}

document.querySelector("#getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
const arrayElement = document.getElementById("array");
arrayElement.textContent = numbersArray;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);
const oddsElement = document.getElementById("odds");
oddsElement.textContent = oddNumbers;

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
const evenElement = document.getElementById("evens");
evenElement.textContent = evenNumbers;

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sumOfArrayElement = document.getElementById("sumOfArray");
sumOfArrayElement.textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number * 2);
const multipliedElement = document.getElementById("multiplied");
multipliedElement.textContent = multiplied;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multiplied.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sumOfMultipliedElement = document.getElementById("sumOfMultiplied");
sumOfMultipliedElement.textContent = sumOfMultiplied;
