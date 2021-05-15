"use strict";
/**
 * Aufgabe 3
 */
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let allIcePartsObject = JSON.parse(Aufgabe2_4.allIceParts);
    function createPartOptions(_part) {
        let div = document.createElement("div");
        div.style.maxWidth = "150px";
        let picture = document.createElement("img");
        picture.src = _part.picture;
        picture.style.width = "150px";
        div.appendChild(picture);
        let chooseButton = document.createElement("Button");
        let textChooseButton = document.createTextNode(_part.description);
        chooseButton.appendChild(textChooseButton);
        chooseButton.addEventListener("click", saveSelection);
        chooseButton.dataset.saveSort = _part.description;
        chooseButton.dataset.savePicture = _part.picture;
        div.appendChild(chooseButton);
        return div;
    }
    if (document.querySelector("title").getAttribute("id") == "site1") {
        for (let i = 0; i < allIcePartsObject.waffles.length; i++) {
            let iceElements = createPartOptions(allIcePartsObject.waffles[i]);
            document.body.appendChild(iceElements);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "site2") {
        for (let i = 0; i < allIcePartsObject.scoops.length; i++) {
            let iceElements = createPartOptions(allIcePartsObject.scoops[i]);
            document.body.appendChild(iceElements);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "site3") {
        for (let i = 0; i < allIcePartsObject.creams.length; i++) {
            let iceElements = createPartOptions(allIcePartsObject.creams[i]);
            document.body.appendChild(iceElements);
        }
    }
    function saveSelection(_input) {
        let output = _input.target;
        if (document.querySelector("title").getAttribute("id") == "site1") {
            localStorage.setItem("chosenwaffle", output.dataset.saveSort);
            localStorage.setItem("chosenwafflePic", output.dataset.savePicture);
            console.log("Your Choice:"); //Konsolenausgabe zur Überprüfung
            console.log(localStorage.getItem("chosenwaffle"));
            console.log(localStorage.getItem("chosenwafflePic"));
        }
        if (document.querySelector("title").getAttribute("id") == "site2") {
            localStorage.setItem("chosenscoop", output.dataset.saveSort);
            localStorage.setItem("chosenscoopPic", output.dataset.savePicture);
            console.log("Your Choice:");
            console.log(localStorage.getItem("chosenscoop"));
            console.log(localStorage.getItem("chosenscoopPic"));
        }
        if (document.querySelector("title").getAttribute("id") == "site3") {
            localStorage.setItem("chosencream", output.dataset.saveSort);
            localStorage.setItem("chosencreamPic", output.dataset.savePicture);
            console.log("Your Choice:");
            console.log(localStorage.getItem("chosencream"));
            console.log(localStorage.getItem("chosencreamPic"));
        }
    }
    if (document.querySelector("title").getAttribute("id") == "site2") {
        let div = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
        let descriptionChoosing = document.createElement("p");
        let descriptionChoosingText = document.createTextNode("So far you have chosen:");
        descriptionChoosing.appendChild(descriptionChoosingText);
        div.appendChild(descriptionChoosing);
        let pictureWaffle = document.createElement("img");
        pictureWaffle.src = localStorage.getItem("chosenwafflePic");
        pictureWaffle.style.width = "100%";
        div.appendChild(pictureWaffle);
    }
    if (document.querySelector("title").getAttribute("id") == "site3") {
        let div = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
        let pictureScoop = document.createElement("img");
        pictureScoop.src = localStorage.getItem("chosenscoopPic");
        pictureScoop.style.width = "100%";
        div.appendChild(pictureScoop);
        let pictureWaffle = document.createElement("img");
        pictureWaffle.src = localStorage.getItem("chosenwafflePic");
        pictureWaffle.style.width = "100%";
        div.appendChild(pictureWaffle);
    }
    if (document.querySelector("title").getAttribute("id") == "site4") {
        let div = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
        let pictureCream = document.createElement("img");
        pictureCream.src = localStorage.getItem("chosencreamPic");
        pictureCream.style.width = "100%";
        div.appendChild(pictureCream);
        let pictureScoop = document.createElement("img");
        pictureScoop.src = localStorage.getItem("chosenscoopPic");
        pictureScoop.style.width = "100%";
        div.appendChild(pictureScoop);
        let pictureWaffle = document.createElement("img");
        pictureWaffle.src = localStorage.getItem("chosenwafflePic");
        pictureWaffle.style.width = "100%";
        div.appendChild(pictureWaffle);
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map