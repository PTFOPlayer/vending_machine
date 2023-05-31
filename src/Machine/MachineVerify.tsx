import { machine } from "../interfaces/machine";
import MachineInstance from "./MachineInstance";
import { MachineSpec } from "./MachineSpec";

export class MachineVerify extends MachineSpec{
    public product_objects;
    constructor(Instance: MachineInstance) {

        let machine: machine = {
            id: Instance.id,
            slots: Instance.slots,
            payment: Instance.payment,
            coin_eating_chance: Instance.coin_eating_chance,
            stuck_product_chance: Instance.stuck_produckt_chance
        }
        super(machine);
        this.product_objects = Instance.get_products();
    }

    verify() {
        let points = 0;
        if (this.coin_eating_chance) {points+=1}
        if (this.stuck_produckt_chance) {points+=1}
        if (this.slots.content.length === 4) {points+=1}
        if (this.slots.content[0].length === 5) {points+=1}
        if (this.product_objects.length === 4) {points+=1}
        if (this.product_objects[0].length === 5) {points+=1}
        return points === 6
    }
}