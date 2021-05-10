"use strict";
/**
 * Aufgabe 3
 */
var Aufgabe2_3;
(function (Aufgabe2_3) {
    function createWaffleOptions(_waffle) {
        let div = document.createElement("div");
        div.style.maxWidth = "150px";
        let picture = document.createElement("img");
        picture.src = _waffle.picture;
        picture.style.width = "100%";
        div.appendChild(picture);
        let chooseButton = document.createElement("Button");
        let textChooseButton = document.createTextNode(_waffle.waffleSort);
        chooseButton.appendChild(textChooseButton);
        chooseButton.addEventListener("click", waffleSave);
        chooseButton.dataset.waffleSort = _waffle.waffleSort;
        div.appendChild(chooseButton);
        return div;
    }
    for (let i = 0; i < Aufgabe2_3.waffles.length; i++) {
        let waffleElements = createWaffleOptions(Aufgabe2_3.waffles[i]);
        document.body.appendChild(waffleElements);
    }
    function waffleSave(_input) {
        let output = _input.target;
        console.log(output.dataset.waffleSort);
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map