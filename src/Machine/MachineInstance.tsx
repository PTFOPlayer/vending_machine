import {MachineSpec } from "./MachineSpec";

export default class MachineInstance extends MachineSpec {
  // eslint-disable-next-line
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
