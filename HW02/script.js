// Задание 1

let num1 = Number(prompt(''));
let num2 = Number(prompt(''));
alert((num1 === 1 || num1 < 1)? 'переменная num1 равна или меньше 1' : 'другое');
alert((num2 > 3 || num2 === 3)? 'переменная num2 равна или больше 3' : 'другое');


// Задание 2

let test = true
if (test === true) {
    console.log('+++')
} else {
    console.log('---')
}

// Задание 3

let nember = Math.ceil(Math.random() * 31);
if (number <= 10) {
    alert(`${number} - Первая декада`)
} else if (number >= 11 && number <=20) {
    alert(`${number} - Вторая декада`)
} else {
    alertalert(`${number} - Третья декада`) 
}

// Задание 4

const userNumber = +prompt('Введите число');
const units = userNumber % 10;
const tens = Math.trunc(userNumber / 10) % 10;
const hundreds = Math.trunc(userNumber / 10) % 10;
console.log('В числе ${userNumber} количество соте: ${hundreds}, десятков: ${tens}, единиц: ${units}.');