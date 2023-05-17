import React from "react"

type productData = { id: number, price: number, color_major: string, color_minor: string, shape: React.ReactElement }

const lookup_table: Record<string, productData> = {
  "water": {
    id: 1,
    price: 2,
    color_major: "lightblue",
    color_minor: "blue",
    shape: (<i className="fa-solid fa-bottle-water" style={{ background: "-webkit-linear-gradient(lightblue, blue)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent" }}></i>),
  },
  "coke": {
    id: 1,
    price: 4,
    color_major: "lightblue",
    color_minor: "blue",
    shape: (<i className="fa-solid fa-bottle-water" style={{ background: "-webkit-linear-gradient(black, red)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent" }}></i>),
  },
  "chocolate": {
    id: 1,
    price: 2.50,
    color_major: "lightblue",
    color_minor: "blue",
    shape: (<i className="" style={{"fontSize":"70px"}}>🍫</i>),
  },
  "lolipop": {
    id: 1,
    price: 2.50,
    color_major: "lightblue",
    color_minor: "blue",
    shape: (<i className="" style={{"fontSize":"70px"}}>🍭</i>),
  },
  "cookie": {
    id: 1,
    price: 2.50,
    color_major: "lightblue",
    color_minor: "blue",
    shape: (<i className="" style={{"fontSize":"70px"}}>🍪</i>),
  }
}

const get_from_table = (name: string): productData => {
  return lookup_table[name] || {
    id: 0,
    price: 2,
    color_major: "lightblue",
    color_minor: "blue",
    shape: (<i className="fa-solid fa-bottle-water" style={{ background: "-webkit-linear-gradient(lightblue, blue)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent" }}></i>)
  }
}

export default class Product {
  private name: string;
  private id: number;
  private price: number;
  private color_major: string;
  private color_minor: string
  private shape: React.ReactElement;
  private ammount: number;
  constructor(pName: string, ammount: number) {
    this.name = pName;
    let temporary = get_from_table(this.name);
    this.id = temporary.id;
    this.price = temporary.price;
    this.color_major = temporary.color_major;
    this.color_minor = temporary.color_minor;
    this.shape = temporary.shape;
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
    return (<>
      {this.shape}
    </>)
  }
}

