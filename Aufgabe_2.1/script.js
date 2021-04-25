"use strict";
/* Aufgabe 1 - Basics */
/*
function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}
*/
/** a) In der Konsole wird nacheinander Alles, Klar?, Logo ausgegeben.
 * Dürfen aus Buchstaben, Zahlen, Unterstrich und dem Dollarzeichen bestehen. Sie dürfen kein Leezeichen enthalten.
 * b) In Zeile 8 wird die Funktion a1 ausgeführt, zunächst wird x deklariert & initialisiert und anschließend ausgegeben. Daraufhin wird func1 ausgeführt, welche "Klar?" ausgibt.
 * Zum Schluss springt das Programm wieder zurück in a1 und gibt "Logo!" aus.
 */
/**
 * Funktion für 1 c)
 */
/*
function func2(): void {
    console.log("Gute!");
}
*/
/**
 * Aufgabe 2 - Kontinuierliche Variablenmanipulation
 * Vor Ausführung: In der Konsole wird von 9 runter gezählt bis zu 1. Jedesmal nachdem die Variable i ausgegeben wird, wird sie um 1 verringert, solange i > 0 gilt.
 */
/*
function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}

a2();
*/
/**
 * Aufgabe 3 - Fehler erkennen und vermeiden lernen
 *
 * VS gibt direkt an, wenn etwas benutzt wird, was nicht vorhanden ist. (Egal ob Variable oder Zeichen/Syntax)
 * Fehler sind in VS unterstrichen.
 * Fehlermeldungen beim Kompilieren in der Console von VS angegeben.
 */
/*
 function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func2();
    console.log(x)
    func1();
    console.log(x);
    console.log("Logo!");
}

 a1();

 function func1(): void {
    console.log("Klar?");
}
*/
/**
 * Aufgabe 4 - Gobal vs Lokal
 * a) Annahme: Hallo Bla Hallo Blubb Test Hallo
 * Richtig: Hallo Bla Hallo Blubb Test  < Fehler, zu hastig gelesen und übersehen dass func 3 nur Test in x speichert.
 * b) Variablen global: überall sichtbar und nutzbar, lokal: nur innerhalb Kontext, Übergabeparameter: Parameter werden immer mit Typ angegeben und müssen immer bei Funktionsaufruf mitgegeben werden
 * Funktionen: Sind ein Block Code der eine bestimmte Aufgabe erfüllt, ggfs mit Rückgabewert
 * beide haben Namen & Typ, Funktionen enthalten Codeblöcke & Variablen speichern Werte
 */
/*
 let x: string = "Hallo";
 console.log(x);
 func1(x);
 console.log(x);
 func2();
 func3();
 console.log(x);
 
 function func1(y: string): void {
     y = "Bla";
     console.log(y);
 }
 
 function func2(): void {
     let x: string = "Blubb";
     console.log(x);
 }
 
 function func3(): void {
     x = "Test";
 }
 */
/**
 * Aufgabe 5 - Schleifen, Funktionen und andere Kontrollstrukturen
 */
let number1 = 3;
let number2 = 5;
/*a)*/
/*
function multiply(x: number, y: number) {
    return x * y;
}
console.log(multiply(number1, number2));
*/
/*b)*/
/*
function max(x: number, y: number) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(max(number1, number2));
*/
/*c)*/
/*
function sum100(): void {
    let i: number = 100;
    let sum: number = 0;
    while (i > 0) {
        sum += i;
        i--;
    }
    console.log(sum);
}

sum100();
*/
/*d)*/
/*
function randomNums(): void {
    for (let i: number = 0; i < 10; i++) {
        console.log(Math.floor(Math.random() * 101));
    }
}
randomNums();
*/
/*e)*/
/*
function factorial (fac: number): number {
    let factor: number = 1;
    let result: number = 1;

    do {
        result = result * factor;
        factor++;
    } while (factor < fac + 1);
    return result;
}
console.log(factorial(number1));
*/
/*f)*/
/*
let year1: number = 1900;
let year2: number = 2021;

function leapyear(start: number, end: number): void {
    for ( let i: number = start; i < end + 1; i++){
        if ( i % 100 != 0 && i % 4 == 0 || i % 400 == 0) {
            console.log(i);
        }
    }
}
leapyear(year1, year2);
*/
/**
 * Aufgabe 6 - Mehr Schleifen und Funktionen
 */
/*a)*/
/*
let hashtags: string  = "";

for (let i: number = 0; i < 7; i++) {
    hashtags = hashtags + "#";
    console.log(hashtags);
}
*/
/*b)*/
/*
for (let i: number = 0; i < 101; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
*/
/*c)*/
/*
for (let i: number = 0; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
*/
/*d)*/
let blackField = "#";
let whiteField = " ";
let chessboard = "";
/*
for (let i: number = 0; i < 8; i++) {
    if (i % 2 == 0) {
        for (let i: number = 0; i < 4; i++) {
            chessboard += whiteField;
            chessboard += blackField;
        }
        chessboard += "\n";
    }
    else {
        for (let i: number = 0; i < 4; i++) {
            chessboard += blackField;
            chessboard += whiteField;
        }
        chessboard += "\n";
    }
}
console.log(chessboard);
*/
/*e)*/
function drawBoard(boardlenght) {
    for (let i = 0; i < boardlenght; i++) {
        if (i % 2 == 0) {
            for (let i = 0; i < boardlenght / 2; i++) {
                chessboard += whiteField;
                chessboard += blackField;
            }
            chessboard += "\n";
        }
        else {
            for (let i = 0; i < boardlenght / 2; i++) {
                chessboard += blackField;
                chessboard += whiteField;
            }
            chessboard += "\n";
        }
    }
    console.log(chessboard);
}
drawBoard(10);
//# sourceMappingURL=script.js.map