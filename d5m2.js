/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
    let sum = num1 + num2
    if(num1 === num2) {
        return sum*3
    }
    return sum
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(num) {
    if((num >=20 && num <=100) || num === 400) {
        return true
    }
    return false
}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(str) {
    let inverseStr = "";

    for(let c of str) {
        inverseStr = c + inverseStr
    }

    return inverseStr
}

console.log(reverseString("macchina")) // test della funzione reverseString

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
    let result = [];

    let parole = str.split(' ')

    for(let parola of parole) {
        let chars = parola.split('')
        chars[0] = chars[0].toUpperCase()
        parola = chars.join('')

        result.push(parola)
    }
    return result.join(' ')
}

console.log(upperFirst("la mia casa")) //test della funzione upperFirst

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let numbers = []
    for(let i=0;i<n;i++) {
        numbers.push(Math.floor(Math.random()*11))
    }

    return numbers
}

console.log(giveMeRandom(3)) //test della funzione giveMeRandom

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return l1 * l2
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n) {
    let absDiff = Math.abs(n - 19)
    if(absDiff > 19) return absDiff*3
    return absDiff
}


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(str) {
    if(str.substring(0,4).toLowerCase() === 'code') return str

    return 'code' + str
}

console.log(codify('codesasa'))
console.log(codify('andrei'))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
    if (n <= 0) return

    if(n % 3 === 0  || n % 7 === 0) return true
    return false
}

console.log(check3and7(5))
console.log(check3and7(42))
console.log(check3and7(21))
console.log(check3and7(2))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
    return str.substring(1, str.length -1)
}

console.log(cutString('macchina'))
