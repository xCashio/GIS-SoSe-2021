"use strict";
/**
 * Aufgabe 1
 * a) Schreiben Sie eine Funktion min(...), welche eine beliebige Anzahl an Übergabeparametern entgegen nimmt und aus allen übergebenen Zahlen das Minimum zurück gibt.
 */
function min(_arr) {
    let min = _arr[0];
    for (let i = 0; i < _arr.length; i++) {
        if (min > _arr[i]) {
            min = _arr[i];
        }
    }
    return min;
}
console.log(min([10, -5869, 516, -89146, 2]));
/**
 * b) Schreiben Sie eine Funktion isEven(...), welche durch Rekursion nach folgender Beschreibung Berechnet, ob eine Zahl gerade ist und entweder true oder false zurück gibt.

0 ist gerade
1 ist ungerade
Für jede andere Zahl N gilt, dass das Ergebnis gleich ist wie N - 2
Testen Sie Ihre Funktion mit 50 und 75. Was passiert bei -1? Warum? Können Sie eine Lösung dafür finden? (K)
 */
function isEven(_num) {
    _num = Math.abs(_num);
    if (_num == 0) {
        return true;
    }
    if (_num == 1) {
        return false;
    }
    return isEven(_num - 2);
}
console.log(isEven(-10));
/**
 * c) Stellen Sie sich vor, Sie sollen ein System für die Hochschule entwickeln, ihre Studierenden abzuspeichern und zu verwalten.

1. Definieren Sie einen komplexen Datentyp (interface) für einen solchen Studierenden. Wie könnte dieser aussehen, welche Eigenschaften sollte dieser haben?
2. Erschaffen Sie drei verschiedene Studierende, befüllen Sie diese mit sinnvollen Werten und speichern Sie diese in Variablen.
3. Erschaffen Sie aus diesen drei Studierenden ein Studierenden Array (Typisierung!). Fügen Sie dem Array einen weiteren Studierenden hinzu ohne diesen zunächst in einer Variable abzulegen. Geben Sie einige Attribute / Eigenschaften dieser Studierenden auf der Konsole aus.
4. Schreiben sie eine Funktion showInfo(...) mit geeigneten Übergabeparametern, welche wichtige Infos über einen Studierenden auf der Konsole ausgibt. Rufen Sie diese Funktion einmal für jeden Studierenden auf.
5. Wenn Sie können, ändern Sie das interface in eine Klasse mit Konstruktur. Verschieben Sie außerdem die showInfo Funktion innerhalb die Klasse und machen Sie damit eine Methode daraus.
 */
class Student {
    constructor(_name, _surname, _studentnr, _age, _semester) {
        this.name = _name;
        this.surname = _surname;
        this.studentnr = _studentnr;
        this.age = _age;
        this.semester = _semester;
    }
    showInfo(studi) {
        console.log("Name: " + studi.name + "\n" + "Surname: " + studi.surname + "\n" + "Student number: " + studi.studentnr +
            "\n" + "Age: " + studi.age + "\n" + "Semester: " + studi.semester + "\n");
    }
}
let student01 = new Student("Dominik", "Breit", 123456, 25, 2);
let student02 = new Student("Marcel", "Renner", 654321, 23, 2);
let student03 = new Student("Andreas", "Reich", 456123, 25, 9000);
let studentArray = [student01, student02, student03];
studentArray.push(new Student("Linus", "Ehmann", 321456, 99, 42));
for (let student of studentArray) {
    student.showInfo(student);
}
/**
 * Aufgabe 2
 * a) Schreiben Sie eine Funktion backwards(...), welche ein Array entgegen nimmt und in umgekehrter Reihenfolge zurück gibt.
 * b) Schreiben Sie eine Funktion join(...), welche zwei Arrays zusammenfügt indem es das zweite hinter das erste hängt.
 * Bonus: Können Sie diese Funktion so umschreiben, dass Sie beliebig viele Arrays entgegen nimmt?
 * c) Eine Funktion split(...), die ein Array und zwei Indexe entgegen nimmt und das Array zwischen diesen beiden Indexen zurück gibt.
 * Bonus: Hier wäre eine Prüfung der übergebenen Indizes angebracht. Welche Prüfungen sind dies? Implementieren Sie auch das.
 */
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
//console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024])); // Bonus b)
console.log(arr);
console.log(split(arr, 0, 4));
console.log(arr);
//console.log(split(arr, 1, 2));
//console.log(split(arr, 2, 0));     // Bonus c)
//console.log(split(arr, -1, 2));    // Bonus c)
//console.log(split(arr, 0, 7));     // Bonus c)
function backwards(_arr) {
    let tempArray = [];
    for (let i = _arr.length - 1; i >= 0; i--) {
        tempArray.push(_arr[i]);
    }
    return tempArray;
}
function join(_arr1, _arr2) {
    let joinedArray = _arr1.concat(_arr2);
    console.log(joinedArray);
}
function split(_arr, _index1, _index2) {
    return _arr.slice(_index1, _index2);
}
/**
 * Aufgabe 3 - Endlich was visuelles!
 * a) Experimentieren Sie ein wenig mit dem Canvas und machen Sie sich damit vertraut. Malen Sie Linien, machen Sie diese Linien farbig oder gekrümmt, malen Sie Kreise,
 *  Kurven und Rechtecke und füllen Sie diese mit Farben. Zeichnen Sie damit eine einfache Landschaft (grüner Boden, blauer Himmel mit ein paar Wolken, ein Haus und ein Baum im Bild).
 *  Machen Sie Gebrauch von Html5CanvasTutorials.
 */
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
context.lineWidth = 10;
//Himmel & Boden
context.fillStyle = "#2E9AFE";
context.fillRect(0, 0, 500, 350);
context.fillStyle = "#298A08";
context.fill();
context.fillRect(0, 350, 500, 60);
//Haus
context.fillStyle = "#000000";
context.fillRect(275, 240, 150, 110);
context.fillStyle = "#61380B";
context.fillRect(370, 290, 40, 60);
context.fillStyle = "#81F7F3";
context.fillRect(300, 255, 40, 30);
let pathTriangle = new Path2D();
pathTriangle.moveTo(250, 240);
pathTriangle.lineTo(350, 160);
pathTriangle.lineTo(450, 240);
pathTriangle.lineTo(250, 240);
pathTriangle.closePath();
context.fillStyle = "#B43104";
context.fill(pathTriangle);
context.stroke(pathTriangle);
//Baum
context.fillStyle = "#3B0B0B";
context.fillRect(100, 270, 20, 80);
let pathTree = new Path2D();
pathTree.arc(110, 250, 40, 0, 2 * Math.PI);
context.fillStyle = "#21610B";
context.fill(pathTree);
context.strokeStyle = "#21610B";
context.stroke(pathTree);
//Wolke 1
let pathCloud = new Path2D();
pathCloud.arc(60, 60, 30, 0, 2 * Math.PI);
context.lineWidth = 3;
context.fillStyle = "#D8D8D8";
context.fill(pathCloud);
context.strokeStyle = "#6E6E6E";
context.stroke(pathCloud);
//Wolke 2
let pathCloud2 = new Path2D();
pathCloud2.arc(300, 40, 30, 0, 2 * Math.PI);
context.fill(pathCloud2);
context.stroke(pathCloud2);
//Wolke 3
let pathCloud3 = new Path2D();
pathCloud3.arc(180, 100, 30, 0, 2 * Math.PI);
context.fill(pathCloud3);
context.stroke(pathCloud3);
//Wolke 4
let pathCloud4 = new Path2D();
pathCloud4.arc(420, 80, 30, 0, 2 * Math.PI);
context.fill(pathCloud4);
context.stroke(pathCloud4);
/**
 * b) Entwerfen Sie ein Interface, welches auf sinnvolle Weise ein beliebiges Rechteck abbilden kann.
 * Bonus: Machen Sie statt einem Interface eine Klasse und, statt globaler Funktionen denen die Rechtecke übergeben werden in den folgenden Teilaufgaben, Methoden der Klasse selbst.
 * c) Schreiben Sie eine Funktion createRect(), welche Ihnen ohne Übergabeparameter ein zufällig (aber sinnvoll) befülltes Rechteck zurück gibt.
 * Für die Klasse wäre dies der Konstruktor.
 * d) Schreiben Sie eine Funktion drawRect(...), welche das ihr übergebene Rechteck auf dem Canvas malt.
 * e) Lassen Sie jedes Mal, wenn die Seite neu geladen wird, einige Rechtecke generieren und zeichnen.
 * Legen Sie die Rechtecke dafür in einem Array an und rufen für jedes im Array vorhandene Rechteck die drawRect Funktion auf.
 */
let canvas2 = document.getElementById("mySecondCanvas");
let context2 = canvas2.getContext("2d");
context2.lineWidth = 10;
class Rectangle {
    constructor() {
        this.cord1 = Math.floor(Math.random() * 501);
        this.cord2 = Math.floor(Math.random() * 401);
        this.cord3 = Math.floor(Math.random() * 501);
        this.cord4 = Math.floor(Math.random() * 401);
    }
    drawRect() {
        context2.fillRect(this.cord1, this.cord2, this.cord3, this.cord4);
    }
}
let rectArray = [];
for (let i = 0; i < 5; i++) {
    rectArray.push(new Rectangle());
}
for (let i = 0; i < 5; i++) {
    rectArray[i].drawRect();
}
//new Rectangle(250, 140, 150, 110), new Rectangle(450, 42, 77, 210), new Rectangle(50, 100, 150, 200), new Rectangle(300, 220, 300, 200), new Rectangle(11, 99, 66, 33), new Rectangle(75, 140, 150, 110), new Rectangle(10, 40, 50, 80), new Rectangle(470, 430, 450, 400)
//# sourceMappingURL=script.js.map