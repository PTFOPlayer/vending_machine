enum colors {
    "#FF0000",
    "#00FF00",
    "#0000FF"
}

export default class Product {
    private name: string;
    private id: number;
    private price: number;
    private color1: string;
    private color2: string
    
    constructor() {
        this.name = "";
        this.id = 0;
        this.price = 0;
        this.color1 = this.random_color()
        this.color2 = this.random_color()
    }

    private random_color() : string {
        const enumValues = Object.values(colors);
        const index = Math.floor(Math.random() * enumValues.length);

        return enumValues[index].toString(); 
    }

    get_id() {
        return this.id
    }

     get_price() {
        return this.price
    }
}

