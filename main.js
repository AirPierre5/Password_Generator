const result = document.querySelector('.password');
const passwordLength = document.querySelector('#passwordLength').value;
const lowercaseEL = document.querySelector('#lowercase');
const uppercaseEL = document.querySelector('#uppercase');
const numberEL = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const specialCharsEl = document.querySelector('#specialChars');
const generateBtn = document.querySelector('#generateBtn');

let password = '';

getRandomLower();
console.log(getRandomLower());

function generatePassword(getRandomUpper, getRandomNumber, getRandomSymbol, getRandomSpecialChar) {

}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random * 9) + 48);
}

function getRandomSymbol () {

}

function getRandomSpecialChar() {

}