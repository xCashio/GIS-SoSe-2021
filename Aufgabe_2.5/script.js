"use strict";
/**
 * Aufgabe 2.5
 *
 *
 */
var Aufgabe2_5;
(function (Aufgabe2_5) {
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
    function showOptions(_parts) {
        if (document.querySelector("title").getAttribute("id") == "site1") {
            for (let i = 0; i < _parts.waffles.length; i++) {
                let iceElements = createPartOptions(_parts.waffles[i]);
                document.body.appendChild(iceElements);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "site2") {
            for (let i = 0; i < _parts.scoops.length; i++) {
                let iceElements = createPartOptions(_parts.scoops[i]);
                document.body.appendChild(iceElements);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "site3") {
            for (let i = 0; i < _parts.creams.length; i++) {
                let iceElements = createPartOptions(_parts.creams[i]);
                document.body.appendChild(iceElements);
            }
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
        div.style.maxWidth = "50px";
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
        div.style.maxWidth = "50px";
        document.body.appendChild(div);
        let descriptionChoosing = document.createElement("p");
        let descriptionChoosingText = document.createTextNode("So far you have chosen:");
        descriptionChoosing.appendChild(descriptionChoosingText);
        div.appendChild(descriptionChoosing);
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
    /***
     * 2.5b
     */
    async function getData(_url) {
        let response = await fetch(_url);
        console.log("Response: ", response);
        let data = await response.json();
        showOptions(data);
    }
    getData("https://xcashio.github.io/GIS-SoSe-2021/Aufgabe_2.5/data.json");
    /**
     * 2.5c
     */
    async function sendData(_url) {
        let query = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        let output = await answer.json();
        let displayResponse = document.getElementById("3c");
        if (output.error) {
            displayResponse.className = "error";
            displayResponse.innerText = output.error;
        }
        else {
            displayResponse.className = "message";
            displayResponse.innerText = output.Message;
        }
    }
    sendData("https://gis-communication.herokuapp.com");
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map