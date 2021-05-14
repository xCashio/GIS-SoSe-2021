
/**
 * Aufgabe 3
 */

namespace Aufgabe2_4 {
   
    function createWaffleOptions(_waffle: Waffle): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "150px";
        let picture: HTMLImageElement = document.createElement("img");
        picture.src = _waffle.picture;
        picture.style.width = "100%";
        div.appendChild(picture);
        let chooseButton: HTMLElement = document.createElement("Button");
        let textChooseButton: Text = document.createTextNode(_waffle.waffleSort);
        chooseButton.appendChild(textChooseButton);
        chooseButton.addEventListener("click", waffleSave);
        chooseButton.dataset.waffleSort = _waffle.waffleSort;
        div.appendChild(chooseButton);
        return div;
    }
    for (let i: number = 0; i < waffles.length; i++) {
        let waffleElements: HTMLElement = createWaffleOptions(waffles[i]);
        document.body.appendChild(waffleElements);
    }
    function waffleSave(_input: MouseEvent): void {
        let output: HTMLElement = <HTMLElement>_input.target;
        console.log(output.dataset.waffleSort);        
    }  
}