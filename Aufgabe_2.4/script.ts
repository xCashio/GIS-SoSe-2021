
/**
 * Aufgabe 3
 */

namespace Aufgabe2_4 {
    let allIcePartsObject: Ice = JSON.parse(allIceParts);
    function createPartOptions(_part: IcePart): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "150px";
        let picture: HTMLImageElement = document.createElement("img");
        picture.src = _part.picture;
        picture.style.width = "100%";
        div.appendChild(picture);
        let chooseButton: HTMLElement = document.createElement("Button");
        let textChooseButton: Text = document.createTextNode(_part.description);
        chooseButton.appendChild(textChooseButton);
        chooseButton.addEventListener("click", waffleSave);
        chooseButton.dataset.waffleSort = _part.description;
        div.appendChild(chooseButton);
        return div;
    }

    for (let i: number = 0; i < allIcePartsObject.waffles.length; i++) {
        let waffleElements: HTMLElement = createPartOptions(allIcePartsObject.waffles[i]);
        document.body.appendChild(waffleElements);
    }

    function waffleSave(_input: MouseEvent): void {
        let output: HTMLElement = <HTMLElement>_input.target;
        console.log(output.dataset.waffleSort);
    }
}




/*
namespace Aufgabe2_4 {
    let allIcePartsObject: Ice = JSON.parse(allIceParts);
    function createPartOptions(_part: IcePart): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "150px";
        let picture: HTMLImageElement = document.createElement("img");
        picture.src = _part.picture;
        picture.style.width = "100%";
        div.appendChild(picture);
        let chooseButton: HTMLElement = document.createElement("Button");
        let textChooseButton: Text = document.createTextNode(_part.description);
        chooseButton.appendChild(textChooseButton);
        chooseButton.addEventListener("click", waffleSave);
        chooseButton.dataset.waffleSort = _part.description;
        div.appendChild(chooseButton);
        return div;
    }
    function printPartOptions(_part: IcePart): void {
        for (let i: number = 0; i < allIcePartsObject.waffles.length; i++) {
            let waffleElements: HTMLElement = createPartOptions(allIcePartsObject.waffles[i]);
            document.body.appendChild(waffleElements);
        }
    }
    function waffleSave(_input: MouseEvent): void {
        let output: HTMLElement = <HTMLElement>_input.target;
        console.log(output.dataset.waffleSort);
    }
}*/