export enum shapes {
    bottle,
    bar,
    bag,
    none
}

export const bottle = shapes.bottle
export const bar = shapes.bar
export const bag = shapes.bag

const lookup_table = (name: string): { id: number, price: number, color_major: string, color_minor: string, shape: shapes } => {
    switch (name) {
        case "water": return {
            id: 1,
            price: 1.99,
            color_major: "lightblue",
            color_minor: "blue",
            shape: bottle,

        }
    }

    return {
        id: 0,
        price: 0,
        color_major: "",
        color_minor: "",
        shape: shapes.none
    }
}

export default class Product {
    private name: string;
    private id: number;
    private price: number;
    private color_major: string;
    private color_minor: string

    constructor(pName: string) {
        this.name = pName;
        let temporary = lookup_table(this.name);
        this.id = temporary.id;
        this.price = temporary.price;
        this.color_major = temporary.color_major;
        this.color_minor = temporary.color_minor;
    }

    get_id() {
        return this.id
    }

    get_price() {
        return this.price
    }

    get_name() {
        return this.name
    }

    get_colors(): [string, string] {
        return [this.color_major, this.color_minor]
    }
}

