import Product from "../Products/Product";
import { MachineSpec } from "./MachineSpec";

export default class MachineInstance extends MachineSpec {
  // eslint-disable-next-line
  private product_objects: Product[][] = [];
  constructor(data: MachineSpec) {
    super(data);
  }

  static async init() {
    let data = await MachineSpec.init();
    return data ? new MachineInstance(data) : null;
  }

  get_id(): number {
    return this.id;
  }

  get_coordinates() {
    return this.coordinates;
  }

  get_payment() {
    return this.payment;
  }

  get_products() {
    return this.product_objects;
  }

  generate_products() {
    for (let i = 0; i < this.slots.content.length; i++) {
      for (let j = 0; j < this.slots.content[i].length; j++) {
        this.product_objects[i][j] = new Product(this.slots.content[i][j].product, this.slots.content[i][j].amount);
      }
    }
  }
}
