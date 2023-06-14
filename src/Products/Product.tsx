import { useMotionValue } from "framer-motion"
import React, { useState } from "react"

type productData = {price: number, color_major: string, color_minor: string, shape: React.ReactElement }

const lookup_table: Record<string, productData> = {
  "water": {
    price: 2,
    color_major: "lightblue",
    color_minor: "blue",
    shape: (<i className="fa-solid fa-bottle-water" style={{ background: "-webkit-linear-gradient(lightblue, blue)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent" }}></i>),
  },
  "coke": {
    price: 4,
    color_major: "lightblue",
    color_minor: "blue",
    shape: (<i className="fa-solid fa-bottle-water" style={{ background: "-webkit-linear-gradient(black, red)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent" }}></i>),
  },
  "chocolate": {
    price: 2.50,
    color_major: "none",
    color_minor: "none",
    shape: (<i className="" style={{"fontSize":"70px"}}>🍫</i>),
  },
  "lolipop": {
    price: 2.50,
    color_major: "none",
    color_minor: "none",
    shape: (<i className="" style={{"fontSize":"70px"}}>🍭</i>),
  },
  "cookie": {
    price: 2.50,
    color_major: "none",
    color_minor: "none",
    shape: (<i className="" style={{"fontSize":"70px"}}>🍪</i>),
  }
}

const get_from_table = (name: string): productData => {
  return lookup_table[name] || {
    price: 0,
    color_major: "none",
    color_minor: "none",
    shape: (<i></i>)
  }
}

export default class Product {
  private name: string;
  private price: number;
  private color_major: string;
  private color_minor: string
  private shape: React.ReactElement;
  private ammount: number;
  private id: string;
  private dropdown: boolean;
  private was_dropped: boolean;
  constructor(pName: string, ammount: number, id:string) {
    this.name = pName;
    let temporary = get_from_table(this.name);
    this.price = temporary.price;
    this.color_major = temporary.color_major;
    this.color_minor = temporary.color_minor;
    this.shape = temporary.shape;
    this.ammount = ammount;
    this.id = id;
    this.dropdown = false;
    this.was_dropped = false;
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

  unset_item() {
    this.price = 0;
    this.color_major = "none";
    this.color_minor = "none";
    this.shape = (<i></i>);
    this.ammount = 0;
    this.dropdown = false;
    this.was_dropped = false;
  }

  get_colors(): [string, string] {
    return [this.color_major, this.color_minor]
  }

  get_icon(): React.ReactElement {
    return (<>{this.shape}</>)
  }

  set_dropdown(dropdown: boolean) {
    this.dropdown = dropdown;
    setTimeout(() => {
      this.set_was_dropped(true);
    }, 4000);
  }

  get_dropdown() {
    return this.dropdown
  }

  set_was_dropped(was_dropped: boolean) {
    this.was_dropped = was_dropped;
  }

  get_was_dropped() {
    return this.was_dropped
  }
}

