import Product from "../Products/Product";
import { machine, payment_methods } from "../interfaces/machine"

class MachineSpec implements machine {
    id: number;
    slots: {
        heigth: number; width: number; content: Array<Array<{
            amount: number,
            product: Product | string
        }>>;
    };
    coordinates: { x: number; y: number; };
    coin_eating_chance?: number | undefined;
    stuck_produckt_chance?: number | undefined;
    payment: payment_methods;

    constructor(data: machine) {
        this.id = data.id;
        this.slots = data.slots;
        this.coordinates = data.coordinates;
        this.payment = data.payment;
        this.coin_eating_chance = data.coin_eating_chance;
        this.stuck_produckt_chance = data.stuck_produckt_chance;
    }
    static async create() {
        console.log("fetching")
        return fetch("http://localhost:3100/api/6436ab2d18109112d5619104")
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            return res.json() as Promise<machine>
        })
        .then(res => {
            console.log(res)
            let r = JSON.stringify(res)
            console.log(r)
            return JSON.parse(r)
            
            
        }).catch(e => null)
    }
}

export default class Machine {
    private machine_data: MachineSpec

    constructor(data: MachineSpec) {
        this.machine_data = data;
    }

    static async create() {
        let data = await MachineSpec.create()
        return data ? new this(data) : null; 
        //return new this(await MachineSpec.create()); 
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