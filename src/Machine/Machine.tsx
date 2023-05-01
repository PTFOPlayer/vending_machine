import {MachineSpec } from "./MachineSpec";

export default class Machine extends MachineSpec {
  constructor(data: MachineSpec) {
    super(data);
  }

  static async init() {
    let data = await MachineSpec.init();
    return data ? new this(data) : null;
    //return new this(await MachineSpec.create());
  }

  get_id(): number {
    return this.id;
  }

  get_content() {
    return this.slots.content;
  }

  get_coordinates() {
    return this.coordinates;
  }

  get_payment() {
    return this.payment;
  }
}
