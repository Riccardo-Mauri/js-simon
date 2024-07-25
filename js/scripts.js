
//metto delle variabili da riutilizzare
const minNumber = 1;
const maxNumber = 30;
const randomNumbers = [];
const randomnumContainer = document.getElementById('numbers-container');
const timeWait = 30;


//creo un ciclo delle mie variabili in questo caso i numeri
for (let i = 0; i < 5; i++) {
    const num = getRandomNumber(minNumber, maxNumber);
    console.log('num', num, typeof num);
    randomNumbers.push(num);
    //salvo i numeri in pagina
    randomnumContainer.innerHTML += `<span>${num}</span>`

}
console.log('randomNumbers', randomNumbers, typeof randomNumbers);

//inizializzo un countdown per poi far scomparire i numeri
setTimeout(function(){
    console.log('timer finito')
    randomnumContainer.innerHTML = '';
},
(timeWait - 1) * 1000);

setTimeout(function(){
//creo una variabile che mi tiene salvato i numeri indovinati
    let guessNumber = 0;
    const guessedNumberList = [];
//creo un ciclo per l'inserimeto dei numeri che l'utente metterà
    for (let i = 0; i < randomNumbers.length; i++) {
        const UserNumber = parseInt(prompt(`inserisci il ${i + 1}° che hai appena visto`));
        console.log('UserNumber', UserNumber, typeof UserNumber);
        if (UserNumber == randomNumbers[i]) {
            guessNumber++;
            guessedNumberList.push(UserNumber);
         }
    }
    alert(`Hai indovinato ${guessNumber} numeri. precisamente : ${guessedNumberList}`);
},
timeWait * 1000);









/*
FUNZIONI 
*/

//genero i numeri random che mi servono
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }