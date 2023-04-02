import Product from "../Products/Product";
import {machine, payment_methods} from "../interfaces/machine"

class MachineSpec implements machine {
    id: number;
    slots: { heigth: number; width: number; content: Array<Array<{
        ammount:number,
        product: Product
    }>> | null; };
    coordinates: { x: number; y: number; };
    coin_eating_chance?: number | undefined;
    stuck_produckt_chance?: number | undefined;
    payment: payment_methods;
    
    constructor() {
        let slots_h = 5;
        let slots_w = 3;
        let content:Array<Array<{
            ammount:number,
            product: Product
        }>> = [[]]; 
            for(let i = 0; i < slots_h; i++ ) {
                let sub_arr = [];
                for(let j = 0; j < slots_w; j++ ) {
                    sub_arr.push({
                        ammount: i*j,
                        product: new Product()
                    })
                }
                content.push(sub_arr)
            }
        

        this.id = 1;
        this.slots = {
            heigth: 2,
            width: 3,
            content: content
        };
        this.coordinates={x: 4, y: 5}
        this.payment = payment_methods.Card;
    }
}

export default class Machine {
    private machine_data: MachineSpec
    
    constructor() {
        this.machine_data = new MachineSpec();
    }

    get_id(): number {
        return this.machine_data.id;
    }

    get_content() {
        return this.machine_data.slots.content
    }

    get_coordinates() {
        return this.machine_data.coordinates
    }

    get_payment() {
        return this.machine_data.payment
    }
}