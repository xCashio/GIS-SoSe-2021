namespace Aufgabe2_4 {

    export interface IcePart {
        description: string;
        picture: string;
    }
    export interface Ice {
        waffles: IcePart[];
        scoops: IcePart[];
        creams: IcePart[];
    }
    
    export let waffles: IcePart [] = [{description: "Chocolate Waffle", picture: "media/braunwaffel.png"}, {description: "Mango Waffle", picture: "media/orangewaffel.png"}, {description: "Strawberry Waffle", picture: "media/pinkwaffel.png"}];
    export let scoops: IcePart [] = [{description: "Chocolate", picture: "media/schoko.png"}, {description: "Mango", picture: "media/mango.png"}, {description: "Strawberry", picture: "media/erdbeere.png"}] ;
    export let creams: IcePart [] = [{description: "Small", picture: "media/sahne1.png"}, {description: "Medium", picture: "media/sahne2.png"}, {description: "Large", picture: "media/sahne3.png"}] ;
    //let myIceCream: Ice = {waffles: waffles, scoops: scoops, creams: creams};
    //console.log(JSON.stringify(myIceCream));
    
    export let allIceParts: string =
    `{
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
}