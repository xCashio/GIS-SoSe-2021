"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    let colors = ["blue", "red", "brown", "yellow", "green", "purple", "pink", "turquoise"];
    let previousElement = document.body;
    for (let i = 0; i < 10; i++) {
        let div = document.createElement("div");
        div.style.height = (50 + Math.floor(Math.random() * 951)).toString() + "px";
        div.style.width = (50 + Math.floor(Math.random() * 951)).toString() + "px";
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)].toString();
        div.style.position = "absolute";
        div.classList.add("rectangle");
        previousElement.appendChild(div);
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map