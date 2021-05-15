
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
        picture.style.width = "150px";
        div.appendChild(picture);
        let chooseButton: HTMLElement = document.createElement("Button");
        let textChooseButton: Text = document.createTextNode(_part.description);
        chooseButton.appendChild(textChooseButton);
        chooseButton.addEventListener("click", saveSelection);
        chooseButton.dataset.saveSort = _part.description;
        chooseButton.dataset.savePicture = _part.picture;
        div.appendChild(chooseButton);
        return div;
    }


    if (document.querySelector("title").getAttribute("id") == "site1") {
        for (let i: number = 0; i < allIcePartsObject.waffles.length; i++) {
            let iceElements: HTMLElement = createPartOptions(allIcePartsObject.waffles[i]);
            document.body.appendChild(iceElements);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "site2") {
        for (let i: number = 0; i < allIcePartsObject.scoops.length; i++) {
            let iceElements: HTMLElement = createPartOptions(allIcePartsObject.scoops[i]);
            document.body.appendChild(iceElements);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "site3") {
        for (let i: number = 0; i < allIcePartsObject.creams.length; i++) {
            let iceElements: HTMLElement = createPartOptions(allIcePartsObject.creams[i]);
            document.body.appendChild(iceElements);
        }
    }

    function saveSelection(_input: MouseEvent): void {
        let output: HTMLElement = <HTMLElement>_input.target;
        if (document.querySelector("title").getAttribute("id") == "site1") {
            console.log("Your Choice:");
            console.log(output.dataset.saveSort);
            localStorage.setItem("chosenwaffle", output.dataset.saveSort);
            localStorage.setItem("chosenwafflePic", output.dataset.savePicture);
            console.log(localStorage.getItem("chosenwaffle"));
            console.log(localStorage.getItem("chosenwafflePic"));
        }
        if (document.querySelector("title").getAttribute("id") == "site2") {
            console.log("Your Choice:");
            console.log(output.dataset.saveSort);
            localStorage.setItem("chosenscoop", output.dataset.saveSort);
            localStorage.setItem("chosenscoopPic", output.dataset.savePicture);
            console.log(localStorage.getItem("chosenscoop"));
            console.log(localStorage.getItem("chosenscoopPic"));
        }
        if (document.querySelector("title").getAttribute("id") == "site3") {
            console.log("Your Choice:");
            console.log(output.dataset.saveSort);
            localStorage.setItem("chosencream", output.dataset.saveSort);
            localStorage.setItem("chosencreamPic", output.dataset.savePicture);
            console.log(localStorage.getItem("chosencream"));
            console.log(localStorage.getItem("chosencreamPic"));
        }
    }

    if (document.querySelector("title").getAttribute("id") == "site2") {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
        let descriptionChoosing: HTMLElement = document.createElement("p");
        let descriptionChoosingText: Text = document.createTextNode("So far you have chosen:");
        descriptionChoosing.appendChild(descriptionChoosingText);
        div.appendChild(descriptionChoosing);

        let pictureWaffle: HTMLImageElement = document.createElement("img");
        pictureWaffle.src = localStorage.getItem("chosenwafflePic");
        pictureWaffle.style.width = "100%";
        div.appendChild(pictureWaffle);
    }
    if (document.querySelector("title").getAttribute("id") == "site3") {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
      
        let pictureScoop: HTMLImageElement = document.createElement("img");
        pictureScoop.src = localStorage.getItem("chosenscoopPic");
        pictureScoop.style.width = "100%";
        div.appendChild(pictureScoop);

        let pictureWaffle: HTMLImageElement = document.createElement("img");
        pictureWaffle.src = localStorage.getItem("chosenwafflePic");
        pictureWaffle.style.width = "100%";
        div.appendChild(pictureWaffle);
    }
    if (document.querySelector("title").getAttribute("id") == "site4") {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
        let pictureCream: HTMLImageElement = document.createElement("img");
        pictureCream.src = localStorage.getItem("chosencreamPic");
        pictureCream.style.width = "100%";
        div.appendChild(pictureCream);
        

        let pictureScoop: HTMLImageElement = document.createElement("img");
        pictureScoop.src = localStorage.getItem("chosenscoopPic");
        pictureScoop.style.width = "100%";
        div.appendChild(pictureScoop);

        let pictureWaffle: HTMLImageElement = document.createElement("img");
        pictureWaffle.src = localStorage.getItem("chosenwafflePic");
        pictureWaffle.style.width = "100%";
        div.appendChild(pictureWaffle);
    }
}