"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    Aufgabe2_4.waffles = [{ description: "Chocolate Waffle", picture: "media/braunwaffel.png" }, { description: "Mango Waffle", picture: "media/orangewaffel.png" }, { description: "Strawberry Waffle", picture: "media/pinkwaffel.png" }];
    Aufgabe2_4.scoops = [{ description: "Chocolate", picture: "media/schoko.png" }, { description: "Mango", picture: "media/mango.png" }, { description: "Strawberry", picture: "media/erdbeere.png" }];
    Aufgabe2_4.creams = [{ description: "Small", picture: "media/sahne1.png" }, { description: "Medium", picture: "media/sahne2.png" }, { description: "Large", picture: "media/sahne3.png" }];
    let myIceCream = { waffles: Aufgabe2_4.waffles, scoops: Aufgabe2_4.scoops, creams: Aufgabe2_4.creams };
    console.log(JSON.stringify(myIceCream));
    Aufgabe2_4.allIceParts = `{
        "waffles": [
          {
            "description": "Chocolate Waffle",
            "picture": "media/braunwaffel.png"
          },
          {
            "description": "Mango Waffle",
            "picture": "media/orangewaffel.png"
          },
          {
            "description": "Strawberry Waffle",
            "picture": "media/pinkwaffel.png"
          }
        ],
        "scoops": [
          {
            "description": "Chocolate",
            "picture": "media/schoko.png"
          },
          {
            "description": "Mango",
            "picture": "media/mango.png"
          },
          {
            "description": "Strawberry",
            "picture": "media/erdbeere.png"
          }
        ],
        "creams": [
          {
            "description": "Small",
            "picture": "media/sahne1.png"
          },
          {
            "description": "Medium",
            "picture": "media/sahne2.png"
          },
          {
            "description": "Large",
            "picture": "media/sahne3.png"
          }
        ]
      }
      `;
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=data.js.map