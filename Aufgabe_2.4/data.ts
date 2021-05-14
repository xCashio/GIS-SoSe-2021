namespace Aufgabe2_4 {

    export interface Waffle {
        waffleSort: string;
        picture: string;
    }
    export interface Scoop {
        scoopSort: string;
        picture: string;
    }
    export interface Cream {
        creamAmount: string;
        picture: string;
    }
    export interface Ice {
        waffle: Waffle;
        scoop: Scoop;
        cream: Cream;
    }

    //export let waffles: Waffle [] = [{waffleSort: "Chocolate Waffle", picture: "media/braunwaffel.png"}, {waffleSort: "Mango Waffle", picture: "media/orangewaffel.png"}, {waffleSort: "Strawberry Waffle", picture: "media/pinkwaffel.png"}];
    //export let scoops: Scoop [] = [{scoopSort: "Chocolate", picture: "media/schoko.png"}, {scoopSort: "Mango", picture: "media/mango.png"}, {scoopSort: "Strawberry", picture: "media/erdbeere.png"}] ;
    //export let creams: Cream [] = [{creamAmount: "Small", picture: "media/sahne1.png"}, {creamAmount: "Medium", picture: "media/sahne2.png"}, {creamAmount: "Large", picture: "media/sahne3.png"}] ;

    export let waffles: string =
    `
    {
        "waffles": [
            {
                "waffleSort": "Chocolate Waffle",
                "picture": "media/braunwaffel.png"
            },
            {
                "waffleSort": "Mango Waffle",
                "picture": "media/orangewaffel.png"
            },
            {
                "waffleSort": "Strawberry Waffle",
                "picture": "media/pinkwaffel.png"
            }
        ]
    }
    `;
    export let scoops: string =
    `
    {
        "scoops": [
            {
                "scoopSort": "Chocolate",
                "picture": "media/schoko.png"
            },
            {
                "scoopSort": "Mango",
                "picture": "media/mango.png"
            },
            {
                "scoopSort": "Strawberry",
                "picture": "media/erdbeere.png"
            }
        ]
    }
    `;
    export let creams: string =
    `
    {
        "creams": [
            {
                "creamAmount": "Small",
                "picture": "media/sahne1.png"
            },
            {
                "creamAmount": "Medium",
                "picture": "media/sahne2.png"
            },
            {
                "creamAmount": "Large",
                "picture": "media/sahne3.png"
            }
        ]
    }
    `;
}