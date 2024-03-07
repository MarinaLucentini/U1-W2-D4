/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area = function (l1, l2) {
  let rectArea = l1 * l2;
  return rectArea;
};
console.log(area(2, 5));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum = function (num1, num2) {
  let Sum = 0;
  if (num1 + num2 !== num1 && num1 + num2 !== num2) {
    Sum = num1 + num2;
    return Sum;
  } else if (num1 + num2 === num1 || num1 + num2 === num2) {
    Sum = (num1 + num2) * 3;
    return Sum;
  } else {
    console.log("Qualcosa è andato storto!");
  }
};
console.log("Il risultato è " + crazySum(4, 0));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const crazyDiff = function (numFornito) {
  let absnum = 0;
  if (numFornito - 19 <= 19) {
    absnum = numFornito - 19;
    return absnum;
  } else {
    absnum = (numFornito - 19) * 3;
    return absnum;
  }
};
console.log(crazyDiff(40));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function (n) {
  let trueOrFalse = 0;
  if ((n >= 20 && n <= 100) || n === 400) {
    trueOrFalse = true;
  } else {
    trueOrFalse = false;
  }
  return trueOrFalse;
};
console.log(boundary(101));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const epify = function (stringChange) {
  let indexLetter = stringChange.indexOf("EPICODE");
  if (indexLetter === 0) {
    return stringChange;
  } else {
    return "EPICODE " + stringChange;
  }
};
console.log(epify("EPICODE è una grande scuola!"));
console.log(epify("è una grande scuola!"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
const check3and7 = function (num) {
  let multiplo = 0;
  if (num % 3 === 0 || num % 7 === 0) {
    multiplo = true;
    return "Il valore è multiplo di 3 o di 7";
  } else {
    multiplo = false;
    return "Il valore non è multiplo di 3 o di 7";
  }
};
console.log(check3and7(15));
console.log(check3and7(55));
console.log(check3and7(14));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function (stringToChange) {
  let Change = stringToChange.split("").reverse().join();
  return Change;
};
console.log(reverseString("EPICODE"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/*const upperFirst = function (stringToChange) {
  let change = 0;
  stringToChange.split();
  for (let i = 0; i < stringToChange.length; i++) {
    if (stringToChange[i] === " ") {
      stringToChange[i++] = stringToChange[i].toUpperCase();
    } else {
    }
  }
  return change;
};
console.log(upperFirst("ciao a tutti"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
  La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/*const cutString = function (stringToChange) {
  let changeString = stringToChange.split("").splice(0, 1).splice(-1, 1).join();
  return changeString;
};
console.log(cutString("Ciao a tutti"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n 
 numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  const randomArray = [];
  let randomNumber = 0;
  while (n <= 10) {
    if (n <= 10) {
      randomNumber = randomArray.push(randomNumber);
    } else {
    }
  }
  return randomArray;
};
console.log(giveMeRandom(9));
/* SCRIVI QUI LA TUA RISPOSTA */
