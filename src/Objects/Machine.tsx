import {machine, payment_methods} from "../../interfaces/machine"
import { product } from "../../interfaces/product";

class MachineSpec implements machine {
    id: number;
    slots: { heigth: number; width: number; content: product[][] | null; };
    coordinates: { x: number; y: number; };
    coin_eating_chance?: number | undefined;
    stuck_produckt_chance?: number | undefined;
    payment: payment_methods;
    constructor() {
        this.id = 0;
        this.slots = {
            heigth: 0,
            width: 0,
            content: null
        };
        this.coordinates={x: 0, y: 0}
        this.payment = payment_methods.Card;
    }
}

export default class Machine {
    private machine_data: MachineSpec
    constructor() {
        this.machine_data = new MachineSpec;
    }

    get_id() {
        return this.machine_data.id;
    }

}