import { machine } from "../interfaces/machine";

export class MachineSpec implements machine {
  id: number;
  slots: {
    heigth: number;
    width: number;
    content: Array<
      Array<{
        amount: number;
        product: string;
      }>
    >;
  };
  coin_eating_chance?: number | undefined;
  stuck_produckt_chance?: number | undefined;
  payment: string;

  constructor(data: machine) {
    this.id = data.id;
    this.slots = data.slots;
    this.payment = data.payment;
    this.coin_eating_chance = data.coin_eating_chance;
    this.stuck_produckt_chance = data.stuck_product_chance;
  }

  static async init(): Promise<machine | null> {
    return fetch("http://localhost:3100/api/machine/random/random")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json() as Promise<machine>;
      })
      .then((res) => {
        let r = JSON.stringify(res);
        return JSON.parse(r) as machine;
      })
      .catch((e) => {
        console.log(e)
        return null
      });
  }
}