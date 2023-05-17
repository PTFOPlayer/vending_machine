import React from "react"

export enum shapes {
  bottle,
  bar,
  bag,
  none
}

export const bottle = shapes.bottle
export const bar = shapes.bar
export const bag = shapes.bag

type productData = { id: number, price: number, color_major: string, color_minor: string, shape: shapes }

const lookup_table: Record<string, productData> = {
  "water": {
    id: 1,
    price: 1.99,
    color_major: "lightblue",
    color_minor: "blue",
    shape: bottle,
  }
}

const get_from_table = (name: string): productData => {
  return lookup_table[name] || {
    id: 0,
    price: 0,
    color_major: "lightblue",
    color_minor: "blue",
    shape: shapes.none
  }
}

export default class Product{
  private name: string;
  private id: number;
  private price: number;
  private color_major: string;
  private color_minor: string
  private ammount: number;

  constructor(pName: string, ammount:number) {
    this.name = pName;
    let temporary = get_from_table(this.name);
    this.id = temporary.id;
    this.price = temporary.price;
    this.color_major = temporary.color_major;
    this.color_minor = temporary.color_minor;
    this.ammount = ammount;
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
  

  get_icon(): React.ReactElement {
  let color_string = "-webkit-linear-gradient(" + this.color_major +"," + this.color_minor + ")"
  console.log(color_string)
  return (<>
      <i className="fa-solid fa-bottle-water" style={{background: color_string, "WebkitBackgroundClip": "text", "WebkitTextFillColor":"transparent"}}></i>
    </>)
  }
}

