
/**
 * Aufgabe 2
 */

namespace Aufgabe2_3 {
    function createWaffleOptions(_waffle: Waffle): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        let picture: HTMLImageElement = document.createElement("img");
        picture.src = _waffle.picture;
        div.appendChild(picture);
        let chooseButton: HTMLElement = document.createElement("Button");
        let textChooseButton: Text = document.createTextNode("Choose this size");
        chooseButton.appendChild(textChooseButton);
        document.body.appendChild(chooseButton);
        chooseButton.id = "ChooseButtId";

        return div;
    }

    for (let i: number = 0; i < waffles.length; i++) {
        let waffleElements: HTMLElement = createWaffleOptions(waffles[i]);
        document.body.appendChild(waffleElements);
    }
}