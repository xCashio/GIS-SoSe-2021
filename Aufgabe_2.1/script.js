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
 * Variablen dürfen aus Buchstaben, Zahlen, Unterstrich und dem Dollarzeichen bestehen. Sie dürfen kein Leezeichen enthalten.
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
 * Annahme: Hallo Bla Hallo Blubb Test Hallo
 */
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
//# sourceMappingURL=script.js.map