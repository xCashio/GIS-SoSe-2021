/* Aufgabe 1 - Basics */
function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}
/** a) In der Konsole wird nacheinander Alles, Klar?, Logo ausgegeben. 
 * Variablen dürfen aus Buchstaben, Zahlen, Unterstrich und dem Dollarzeichen bestehen. Sie dürfen kein Leezeichen enthalten.  */

