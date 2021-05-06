namespace Aufgabe2_3 {

    let colors: String[] = ["blue", "red", "brown", "yellow", "green", "purple", "pink", "turquoise"];
    let previousElement: HTMLElement = document.body;
    for (let i: number = 0; i < 10; i++) {
        let div: HTMLDivElement =  document.createElement("div");
        div.style.height = (50 + Math.floor(Math.random() * 951)).toString() + "px";
        div.style.width = (50 + Math.floor(Math.random() * 951)).toString() + "px";
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)].toString();
        div.style.position = "absolute";
        div.classList.add("rectangle");
        previousElement.appendChild(div);
    }
}