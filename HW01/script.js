// Задание 1

const tCelsius = +prompt('Введите температуру в градусах Цельсия');
const tFahrenheit = (9 / 5) * tCelsius + 32;
alert('Цельсий: ${tCelsius}, Фаренгейт: ${tFahrenheit.toFixed(1)}');

// Задание 2
const name = 'Anastasiya';
const admin = name;
console.log(admin)