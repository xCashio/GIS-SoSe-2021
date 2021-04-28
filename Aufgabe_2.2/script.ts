/**
 * Aufgabe 1
 * a) Schreiben Sie eine Funktion min(...), welche eine beliebige Anzahl an Übergabeparametern entgegen nimmt und aus allen übergebenen Zahlen das Minimum zurück gibt.
 */

/**
 * b) Schreiben Sie eine Funktion isEven(...), welche durch Rekursion nach folgender Beschreibung Berechnet, ob eine Zahl gerade ist und entweder true oder false zurück gibt.

0 ist gerade
1 ist ungerade
Für jede andere Zahl N gilt, dass das Ergebnis gleich ist wie N - 2
Testen Sie Ihre Funktion mit 50 und 75. Was passiert bei -1? Warum? Können Sie eine Lösung dafür finden? (K)
 */

/**
 * c) Stellen Sie sich vor, Sie sollen ein System für die Hochschule entwickeln, ihre Studierenden abzuspeichern und zu verwalten.

1. Definieren Sie einen komplexen Datentyp (interface) für einen solchen Studierenden. Wie könnte dieser aussehen, welche Eigenschaften sollte dieser haben?
2. Erschaffen Sie drei verschiedene Studierende, befüllen Sie diese mit sinnvollen Werten und speichern Sie diese in Variablen.
3. Erschaffen Sie aus diesen drei Studierenden ein Studierenden Array (Typisierung!). Fügen Sie dem Array einen weiteren Studierenden hinzu ohne diesen zunächst in einer Variable abzulegen. Geben Sie einige Attribute / Eigenschaften dieser Studierenden auf der Konsole aus.
4. Schreiben sie eine Funktion showInfo(...) mit geeigneten Übergabeparametern, welche wichtige Infos über einen Studierenden auf der Konsole ausgibt. Rufen Sie diese Funktion einmal für jeden Studierenden auf.
5. Wenn Sie können, ändern Sie das interface in eine Klasse mit Konstruktur. Verschieben Sie außerdem die showInfo Funktion innerhalb die Klasse und machen Sie damit eine Methode daraus.
 */

class Student {
    name: String;
    surname: String;
    studentnr: number;
    age: number;
    semester: number;

    constructor(_name: String, _surname: String, _studentnr: number, _age: number, _semester: number) {
        this.name = _name;
        this.surname = _surname;
        this.studentnr = _studentnr;
        this.age = _age;
        this.semester = _semester;
    }



    showInfo(studi: Student): void {
        console.log("Name: " + studi.name + "\n" + "Surname: " + studi.surname + "\n" + "Student number: " + studi.studentnr +
            "\n" + "Age: " + studi.age + "\n" + "Semester: " + studi.semester + "\n");
    }

}
let student01: Student = new Student("Dominik", "Breit", 123456, 25, 2);
let student02: Student = new Student("Marcel", "Renner", 654321, 23, 2);
let student03: Student = new Student("Andreas", "Reich", 456123, 25, 9000);

let studentArray: Student[] = [student01, student02, student03];
studentArray.push(new Student("Linus", "Ehmann", 321456, 99, 42));

for (let student of studentArray) {
    student.showInfo(student);
}

/**
 * Aufgabe 2
 * a) Schreiben Sie eine Funktion backwards(...), welche ein Array entgegen nimmt und in umgekehrter Reihenfolge zurück gibt.
 */