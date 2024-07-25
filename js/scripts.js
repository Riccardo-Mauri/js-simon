
//metto delle variabili da riutilizzare
const minNumber = 1;
const maxNumber = 30;
const randomNumbers = [];
//creo un ciclo delle mie variabili in questo caso i numeri
for (let i = 0; i < 5; i++) {
    const num = getRandomNumber(minNumber, maxNumber);
    console.log('num', num, typeof num);
    randomNumbers.push(num);
}
console.log('randomNumbers', randomNumbers, typeof randomNumbers);










/*
FUNZIONI 
*/

//genero i numeri random che mi servono
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }