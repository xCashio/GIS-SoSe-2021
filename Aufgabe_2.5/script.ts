
/**
 * Aufgabe 2.5
 * 
 * 
 */

namespace Aufgabe2_5 {

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

    function showOptions(_parts: Ice): void {

        if (document.querySelector("title").getAttribute("id") == "site1") {
            for (let i: number = 0; i < _parts.waffles.length; i++) {
                let iceElements: HTMLElement = createPartOptions(_parts.waffles[i]);
                document.body.appendChild(iceElements);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "site2") {
            for (let i: number = 0; i < _parts.scoops.length; i++) {
                let iceElements: HTMLElement = createPartOptions(_parts.scoops[i]);
                document.body.appendChild(iceElements);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "site3") {
            for (let i: number = 0; i < _parts.creams.length; i++) {
                let iceElements: HTMLElement = createPartOptions(_parts.creams[i]);
                document.body.appendChild(iceElements);
            }
        }
    }

    function saveSelection(_input: MouseEvent): void {
        let output: HTMLElement = <HTMLElement>_input.target;
        if (document.querySelector("title").getAttribute("id") == "site1") {
            localStorage.setItem("chosenwaffle", output.dataset.saveSort);
            localStorage.setItem("chosenwafflePic", output.dataset.savePicture);
            console.log("Your Choice:");                                            //Konsolenausgabe zur Überprüfung
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
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "50px";
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
        div.style.maxWidth = "50px";
        document.body.appendChild(div);
        let descriptionChoosing: HTMLElement = document.createElement("p");
        let descriptionChoosingText: Text = document.createTextNode("So far you have chosen:");
        descriptionChoosing.appendChild(descriptionChoosingText);
        div.appendChild(descriptionChoosing);

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

    /**
     * interfaces from data.ts T2.4
     */
    export interface IcePart {
        description: string;
        picture: string;
    }
    export interface Ice {
        waffles: IcePart[];
        scoops: IcePart[];
        creams: IcePart[];
    }
    export interface Answer {
        [key: string]: string;
    }

    /***
     * 2.5b
     */
    async function getData(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response: ", response);
        let data: Ice = await response.json();
        showOptions(data);
    }
    getData("https://xcashio.github.io/GIS-SoSe-2021/Aufgabe_2.5/data.json");


    /**
     * 2.5c
     */

    async function sendData(_url: RequestInfo): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: Answer = await answer.json();
        let displayResponse: HTMLParagraphElement = <HTMLDivElement>document.getElementById("3c");
        if (output.error != null) {
            //displayResponse.className = "error";
            displayResponse.innerText = output.error;
            console.log("I got an error");

        }
        if (output.message != null) {
            //displayResponse.className = "message";
            displayResponse.innerText = output.Message;
            console.log("I got a message");
        }
    }
    sendData("https://gis-communication.herokuapp.com");

}