"use strict";
/**
 * Aufgabe 2
 */
var Aufgabe2_3;
(function (Aufgabe2_3) {
    function createWaffleOptions(_waffle) {
        let div = document.createElement("div");
        let picture = document.createElement("img");
        picture.src = _waffle.picture;
        div.appendChild(picture);
        let chooseButton = document.createElement("Button");
        let textChooseButton = document.createTextNode("Choose this size");
        chooseButton.appendChild(textChooseButton);
        document.body.appendChild(chooseButton);
        chooseButton.id = "ChooseButtId";
        return div;
    }
    for (let i = 0; i < Aufgabe2_3.waffles.length; i++) {
        let waffleElements = createWaffleOptions(Aufgabe2_3.waffles[i]);
        document.body.appendChild(waffleElements);
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map